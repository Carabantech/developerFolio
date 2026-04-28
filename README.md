# Software Developer Portfolio ⚡️ 
[![Next.js](https://img.shields.io/badge/Next.js-13-black)](https://nextjs.org/) [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developerFolio/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/saadpasta/developerFolio)](https://github.com/saadpasta/developerFolio/stargazers)

## A modern, clean and responsive portfolio built with Next.js 13

### 🚀 Personalized for Sebastian Mauricio Carabante
This is a customized version of developerFolio featuring an **IT Manager & Infrastructure Expert** profile. 
👉 **Visit my GitHub**: [@Carabantech](https://github.com/Carabantech)

<p align="center">
  <kbd>
<img src="https://user-images.githubusercontent.com/53429438/106779355-e9cd9e80-666c-11eb-9417-8a4b54441bc6.gif"></img>
  </kbd>
</p>

### ✨ Built with Next.js 13 App Router

This portfolio template uses the latest Next.js features including:
- **App Router** for modern routing and layouts
- **Server Components** for optimal performance
- **SCSS Modules** for component-scoped styling
- **Lottie animations** for engaging visuals
- **Responsive design** for all devices

Just change `src/portfolio.js` to get your personal portfolio. Customize the theme by using your own color scheme in the `src/styles/_globalColor.scss` file.

If you'd like to **contribute** and make this much better for other users, have a look at [Issues](https://github.com/saadpasta/developerFolio/issues).

Created something awesome for your fork of the portfolio and want to share it? Feel free to open a [pull request](https://github.com/saadpasta/developerFolio/pulls).

## 📑 Table of Contents
- [Portfolio Sections](#portfolio-sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Environment Variables](#environment-variables)
- [Customization](#customization)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributors](#contributors)

## 📂 Portfolio Sections
✔️ Summary and About me\
✔️ Skills & Tech Stack\
✔️ Education\
✔️ Work Experience\
✔️ Open Source Projects (GitHub Integration)\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs (Medium Integration)\
✔️ Talks\
✔️ Podcast\
✔️ Contact Information\
✔️ Twitter Timeline\
✔️ GitHub Profile

To view a live example, **[click here](https://developerfolio.js.org/)**.


## 🚀 Getting Started

### Prerequisites

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

**Minimum versions required:**
```
node >= 18.17.0
npm >= 9.0.0
git >= 2.17.0
```

**Recommended:**
- Node.js 18 LTS or Node.js 20 LTS
- npm 9.x or higher

### Docker Support

You can also use [Docker](https://www.docker.com/products/docker-desktop) to run the project:

```bash
# Build the Docker image
docker build -t developerfolio:latest .

# Run the container
docker run -p 3000:3000 developerfolio:latest
```


## 💻 How To Use 

From your command line, clone and run the project:

```bash
# Clone this repository
git clone https://github.com/Carabantech/developerFolio.git

# Go into the repository
cd developerFolio

# Setup environment variables
# For Linux/Mac
cp .env.example .env

# For Windows
copy .env.example .env

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Available Commands

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 🔐 Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root directory based on `.env.example`.

### Available Environment Variables

```env
# Medium username for blog integration
MEDIUM_USERNAME=your_medium_username

# GitHub username (optional, for GitHub integration)
GITHUB_USERNAME=your_github_username

# Display GitHub data (true/false)
USE_GITHUB_DATA=true
```

**Note:** In Next.js, environment variables that need to be exposed to the browser must be prefixed with `NEXT_PUBLIC_`. Currently, this portfolio fetches data server-side, so the prefix is not required for these variables.

### GitHub Integration

To enable GitHub integration:

1. Make sure `.env` file exists with your `GITHUB_USERNAME`
2. Set `USE_GITHUB_DATA="true"` in the `.env` file
3. In `src/portfolio.js`, set `showGithubProfile` to `true`

**Note:** The GitHub integration uses the public GitHub API which has rate limits. For development, a personal access token is not required, but for production deployments with frequent updates, consider using GitHub Actions (see [Deployment](#deployment) section).

**Open Source Projects Display:**

Only pinned items from your GitHub profile will be shown. To pin repositories:
1. Go to your GitHub profile
2. Click "Customize your pins"
3. Select up to 6 repositories to display

![Pin Repositories](https://i.imgur.com/Hj6mu1K.png)

For more details, visit the [GitHub Setup Wiki](https://github.com/saadpasta/developerFolio/wiki/Github-Setup-For-Open-Source-Projects).

### Medium Blog Integration

To display your Medium articles:

1. Add your Medium username to `.env`:
   ```env
   MEDIUM_USERNAME=your_medium_username
   ```

2. In `src/portfolio.js`, set `displayMediumBlogs` to `true`

## 🎨 Customization

### Personalize Your Portfolio Content

Edit `/src/portfolio.js` to customize your portfolio content:

```javascript
/* Change this file to get your Personal Portfolio */

const greeting = {
  title: "Hi, I'm Sebastian",
  subTitle: emoji("IT Manager & Infrastructure Expert 🚀"),
  resumeLink: "https://your-resume-link.com"
};

const socialMediaLinks = {
  github: "https://github.com/Carabantech",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  gmail: "your.email@gmail.com",
  // ... more social links
};

const skillsSection = { /* ... */ };
const techStack = { /* ... */ };
const workExperience = { /* ... */ };
const openSource = { /* ... */ };
const bigProjects = { /* ... */ };
const achievementSection = { /* ... */ };
const blogSection = { /* ... */ };
const contactInfo = { /* ... */ };
const twitterDetails = { /* ... */ };
```

### Customize Colors and Styling

Modify the global color scheme in `/src/styles/_globalColor.scss`:

```scss
// Example color customization
$primary-color: #55198b;
$accent-color: #ff6b6b;
// ... more color variables
```

### Update Page Metadata

Edit `/src/app/head.jsx` to update SEO metadata:

```jsx
export default function Head() {
  return (
    <>
      <title>Your Name - Portfolio</title>
      <meta name="description" content="Your custom description" />
      {/* ... more meta tags */}
    </>
  )
}
```

### Using Emojis

For adding emoji 😃 into texts in `portfolio.js`, use the `emoji()` function:

```javascript
const greeting = {
  title: emoji("Hi, I'm John 👋")
};
```

This keeps emojis compatible across different browsers and platforms.

### Customize Lottie Animations

1. Choose a Lottie animation from [LottieFiles](https://lottiefiles.com/)
2. Download it in JSON format
3. Replace the desired animation file in `/src/assets/lottie/`
4. To change animation options, edit `/src/components/displayLottie/DisplayLottie.js`

Refer to [react-lottie docs](https://www.npmjs.com/package/lottie-react) for more configuration options.

### Add Twitter Timeline

Insert your Twitter username in `portfolio.js`:

```javascript
const twitterDetails = {
  userName: "your_twitter_username" // Don't use @ symbol
};
```

## 🚀 Deployment

### Deploying to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com), the platform from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Carabantech/developerFolio)

**Steps:**
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your GitHub repository
4. Configure environment variables if needed
5. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

### Deploying to Netlify

You can also deploy to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Carabantech/developerFolio)

**Build settings for Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`

**Important:** Add a `netlify.toml` file in the root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Deploying to GitHub Pages

For GitHub Pages deployment with Next.js:

1. Install the required package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `next.config.js` for static export:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

3. Add deployment scripts to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "next build && next export && gh-pages -d out"
     }
   }
   ```

4. Run deployment:
   ```bash
   npm run deploy
   ```

### GitHub Actions (Automated Deployment)

The project includes a GitHub Actions workflow for automated deployment. 

**Setup:**
1. Enable GitHub Actions in your repository settings
2. Configure environment variables in GitHub Secrets:
   - `MEDIUM_USERNAME`
   - `GITHUB_USERNAME`

The workflow will automatically:
- Deploy your site when you push to the main branch
- Run weekly to update GitHub profile data
- Can be triggered manually via `workflow_dispatch`

See `.github/workflows/deploy.yml` for configuration details.

### Environment Variables in Production

Remember to set your environment variables in your deployment platform:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment
- **GitHub Pages:** Repository Settings → Secrets and variables → Actions


## 🛠️ Technologies Used 

- **[Next.js 13](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[Sass/SCSS](https://sass-lang.com/)** - CSS preprocessor with modules
- **[Lottie React](https://www.npmjs.com/package/lottie-react)** - Animation library
- **[react-easy-emoji](https://github.com/appfigures/react-easy-emoji)** - Emoji rendering
- **[react-awesome-reveal](https://www.npmjs.com/package/react-awesome-reveal)** - Scroll animations
- **[ESLint](https://eslint.org/)** - Code linting

### Illustrations & Assets
- **[UnDraw](https://undraw.co/illustrations)** - Open-source illustrations
- **[LottieFiles](https://lottiefiles.com/oblikweare)** - Animation files by Oblikweare

## 📁 Project Structure

```
developerFolio/
├── public/                 # Static files (favicon, images, etc.)
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── head.jsx       # Page metadata
│   │   ├── layout.jsx     # Root layout
│   │   └── page.jsx       # Home page
│   ├── assets/            # Images, fonts, animations
│   │   ├── fonts/
│   │   ├── images/
│   │   └── lottie/
│   ├── client/            # Client-side data fetching
│   ├── components/        # Reusable components
│   │   ├── button/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── socialMedia/
│   │   └── ...
│   ├── containers/        # Page sections/containers
│   │   ├── greeting/
│   │   ├── skills/
│   │   ├── education/
│   │   ├── workExperience/
│   │   ├── projects/
│   │   └── ...
│   ├── contexts/          # React contexts
│   ├── styles/            # Global styles
│   │   └── _globalColor.scss
│   ├── portfolio.js       # 📝 Main content configuration
│   └── utils.js           # Utility functions
├── .env                   # Environment variables (create this)
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── jsconfig.json          # JavaScript configuration
└── package.json           # Project dependencies
```

### 🔑 Key Files to Modify

1. **`src/portfolio.js`** - Your portfolio content and data
2. **`src/styles/_globalColor.scss`** - Color theme customization
3. **`src/app/head.jsx`** - SEO metadata
4. **`.env`** - Environment variables

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 🗺️ Roadmap

Future improvements and features being considered:

- [ ] Migration to Next.js 14/15 with latest features
- [ ] Integration with LinkedIn API
- [ ] Dark/Light theme toggle
- [ ] Blog section with MDX support
- [ ] Performance optimizations
- [ ] Accessibility improvements
- [ ] Multi-language support

## 📝 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

If you have any questions or need help:

- 📧 Email: [Contact](mailto:your.email@example.com)
- 💼 LinkedIn: [Sebastian Mauricio Carabante](https://www.linkedin.com/in/your-profile)
- 🐛 Issues: [GitHub Issues](https://github.com/Carabantech/developerFolio/issues)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
