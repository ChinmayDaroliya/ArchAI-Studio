import puter from "@heyputer/puter.js";
import { getORCreateHostingConfig, uploadImageToHosting } from "./puter.hosting";
import { isHostedUrl } from "./utils";
import { PUTER_WORKER_URL } from "./constants";

const PROJECT_PREFIX = 'archai_project_';

export const signIn = async () => await puter.auth.signIn();

export const signOut = () => puter.auth.signOut();

export const getCurrentUser = async () => {
    try {
        return await puter.auth.getUser();
    } catch {
        return null;
    }
}

export const createProject = async ({item , visibility="private"}:CreateProjectParams):
Promise<DesignItem | null> =>{

      if(!PUTER_WORKER_URL) {
        console.warn('Missing VITE_PUTER_WORKER_URL; skip history fetch;');
        return null;
    }

    const projectId = item.id;
    const hosting = await getORCreateHostingConfig();

    const hostedSource = projectId ? 
        await uploadImageToHosting({ hosting, url: item.sourceImage, projectId,
            label:'source',}):null;

    const hostedRender = projectId && item.renderedImage ?
        await uploadImageToHosting({ hosting, url: item.renderedImage, projectId,
             label:'rendered',}):null;   

    const resolvedSource = hostedSource?.url || (isHostedUrl(item.sourceImage)
            ? item.sourceImage
            : ''
    );         

    if(!resolvedSource){
        console.warn('Failed to host source image, skipping save');
        return null;
    }

    const resolvedRender = hostedRender?.url
        ? hostedRender?.url
        :item.renderedImage && isHostedUrl(item.renderedImage)
            ? item.renderedImage
            : undefined;

    const {
        sourcePath: _sourcePath,
        renderedPath: _renderedPath,
        publicPath: _publicPath,
        ... rest
    } = item; 

    const payload = {
         ...rest,
         sourceImage : resolvedSource,
         renderedImage : resolvedRender,
         updatedAt: new Date().toISOString(),
    }

    try {
        const key = `${PROJECT_PREFIX}${projectId}`;
        await puter.kv.set(key, payload);

        return payload;

    } catch (e) {
        console.log("Failed to save the project", e);
        return null;
    }
            
}

export const getProjects = async (): Promise<DesignItem[]> => {
    try {
        const projects = (await puter.kv.list(PROJECT_PREFIX, true)).map(({value}) => value as DesignItem)

        return projects;

    } catch (error) {
        console.error("Failed to get projects", error);
        return [];
    }
}

export const getProjectById = async ({ id }: { id: string }): Promise<DesignItem | null> => {
    try {
        const key = `${PROJECT_PREFIX}${id}`;
        const project = await puter.kv.get(key);

        return project as DesignItem | null;
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return null;
    }
};

export const updateProject = async (item: DesignItem): Promise<DesignItem | null> => {
    try {
        const key = `${PROJECT_PREFIX}${item.id}`;
        await puter.kv.set(key, item);
        return item;
    } catch (error) {
        console.error("Failed to update project", error);
        return null;
    }
};