# ArchAI Studio

Transform 2D floor plans into stunning 3D architectural visualizations instantly using AI.

## 🌐 Live Demo

🚀 **[View Live Application](https://arch-ai-studio-git-main-chinmaydaroliyas-projects.vercel.app/)**

## 🚀 Features

- **AI-Powered 3D Rendering**: Convert floor plans to realistic 3D visualizations
- **Before/After Comparison**: Interactive slider to compare original and rendered images
- **Project Management**: Save and manage multiple architectural projects
- **Cloud Storage**: Secure storage using Puter cloud platform
- **Export Functionality**: Download rendered images as PNG files
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **React Router 7** - Full-stack routing with SSR support
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### AI & Cloud
- **Puter.js** - AI image generation, cloud storage, and authentication
- **Puter KV** - Key-value storage for project data
- **Puter Hosting** - Image hosting and CDN

### UI Components
- **Shadcn/ui** - Modern component library built on Radix UI
- **React Compare Slider** - Interactive image comparison
- **Radix UI** - Accessible component primitives

### Development
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Docker** - Containerization

## 📋 Prerequisites

- Node.js 20+
- npm or yarn
- Puter account (for AI and storage features)

## 🏃‍♂️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChinmayDaroliya/ArchAI-Studio.git
   cd archai-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_PUTER_WORKER_URL=https://your-app.puter.work
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🐳 Docker Deployment

### Development
```bash
docker build -t archai-studio .
docker run -p 5173:5173 archai-studio
```

### Production
```bash
npm run build
npm start
```

## 📖 Usage

1. **Sign In**: Authenticate with your Puter account
2. **Upload Floor Plan**: Drag and drop or select a 2D floor plan image
3. **Generate 3D View**: Click "Start Building" to AI-generate the 3D visualization
4. **Compare Results**: Use the interactive slider to compare before/after
5. **Export Image**: Download the rendered 3D image
6. **Manage Projects**: View and organize your saved projects

## 🏗️ Project Structure

```
archai-studio/
├── app/
│   ├── routes/
│   │   ├── home.tsx          # Main page with upload
│   │   └── visualizer.$id.tsx # Project visualization
│   ├── root.tsx              # App root component
│   └── routes.ts             # Route configuration
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── NavBar.tsx            # Navigation component
│   ├── Upload.tsx            # File upload component
│   └── ...
├── lib/
│   ├── ai.action.ts          # AI image generation
│   ├── puter.action.ts       # Puter integration
│   ├── puter.hosting.ts      # Image hosting
│   ├── puter.worker.js       # Server-side worker
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── Dockerfile                # Docker configuration
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
└── README.md
```

## 🔧 Configuration

### Puter Setup
1. Create a Puter account at [puter.com](https://puter.com)
2. Set up your app subdomain for hosting
3. Configure the worker URL in `.env.local`

### Environment Variables
- `VITE_PUTER_WORKER_URL`: Your Puter app's worker endpoint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

### Code Style
- Use TypeScript for all new code
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain component composition

## 📄 License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🙏 Acknowledgments

- [Puter](https://puter.com) for AI and cloud infrastructure
- [React Router](https://reactrouter.com) for routing
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Shadcn/ui](https://ui.shadcn.com) for components

## 📞 Support

- Create an issue on GitHub
- Join our Discord community
- Check the [Puter documentation](https://docs.puter.com)

---

Built with ❤️ using Puter and React