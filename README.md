
### GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Upload all files including the `.github` folder
3. Go to Settings → Pages → Source: GitHub Actions
4. The workflow will automatically deploy on every push to main
5. Your site is live at `https://yourusername.github.io/repository-name`

**Note:** The included GitHub Actions workflow automatically deploys your site whenever you push changes to the main branch.

### Other Hosting Options
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **Any Web Server**: Upload files to public folder

## 📝 Customization

### Personal Information
Edit `index.html` and update:
- Your name in the `<h1>` tag
- Email addresses in contact links
- Social media URLs (LinkedIn, GitHub)
- University/organization info

### Projects
Edit `script.js` and modify:
- `cyberProjects` array for cybersecurity projects
- `softwareProjects` array for software development projects
- Add your project images, descriptions, and links

### Skills
Update the skills arrays in `script.js`:
- `cyberSkills` for cybersecurity skills
- `softwareSkills` for software development skills

### Resume
Add your `resume.pdf` file to the same folder as `index.html`

## 🎨 How It Works

### Theme Toggle
- **Light Mode**: Shows software development projects, clean blue theme
- **Dark Mode**: Shows cybersecurity projects, terminal-style green theme
- Clear indicators show visitors which mode they're viewing

### Mobile Responsive
- Automatically adapts to phone and tablet screens
- Touch-friendly navigation and buttons

### Contact Form
- Uses `mailto:` links to open email client
- No server required - works purely client-side

## 📁 File Structure
```
simple-portfolio/
├── index.html      # Main webpage
├── style.css       # All styling and themes
├── script.js       # Interactive functionality
├── resume.pdf      # Your resume (add this)
└── README.md       # This file
```

## 🔧 Tech Stack
- **HTML5**: Structure and content
- **CSS3**: Styling, animations, responsive design
- **Vanilla JavaScript**: Interactivity and theme switching
- **Font Awesome**: Icons (loaded from CDN)

## 📱 Browser Support
- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 💡 Tips

### Adding Projects
1. Find a good project image (use Unsplash URLs or upload your own)
2. Add to the appropriate project array in `script.js`
3. Include demo and code links

### Changing Colors
1. Edit CSS variables in `:root` and `[data-theme="dark"]` in `style.css`
2. Customize `--accent` for your brand color

### Adding Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation links if needed

This is much simpler than the React version and perfect for quick deployment!