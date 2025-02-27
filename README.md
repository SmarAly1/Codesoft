# TechVision Studio - Modern Web Solutions

A professional, responsive landing page showcasing our web development expertise. Built with modern technologies and best practices.

## 🚀 Features

- Modern, responsive design optimized for all devices
- Custom animations and transitions
- Performance-optimized code
- Professional UI/UX with attention to detail
- Secure and scalable architecture

## 🛠️ Technology Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- ShadcnUI components
- Modern tooling and build system

## 📋 Project Structure

```
src/
├── components/
│   ├── layout/      # Layout components 
│   ├── sections/    # Page sections
│   └── ui/          # Reusable UI components
├── lib/             # Utilities and helpers
└── pages/          # Page components
```

## 🔧 Development

Prerequisites:
- Node.js 18+
- npm or yarn
- Git

Setup:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deployment

The site is automatically deployed to GitHub Pages on push to the main branch.

### Deployment Steps:
1. Fork or clone this repository
2. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root
   - Click Save
3. Push your changes to the main branch
4. GitHub Actions will automatically build and deploy your site

### Deployment Prerequisites:
- GitHub account with permission to create/manage repositories
- Git installed locally
- Node.js 18+ installed
- Repository secrets configured (if needed)

### Troubleshooting Deployment:
- Check GitHub Actions tab for build logs
- Ensure all dependencies are properly listed in package.json
- Verify GitHub Pages is enabled in repository settings
- Check browser console for any resource loading errors
- If routes are not working:
  - Ensure VITE_BASE_URL is set correctly in your environment
  - Check that all links use relative paths
  - Clear browser cache after deployment
  - Wait a few minutes for DNS propagation

## 📝 License

MIT License