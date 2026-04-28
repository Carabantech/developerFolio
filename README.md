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

## 🙏 Acknowledgments

- Original template by [Saad Pasta](https://github.com/saadpasta)
- All the amazing [contributors](#contributors) who have helped improve this project

---

## 👥 Project Maintainers

<table>
  <tr>
    <td align="center"><a href="http://saadpasta.github.io"><img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt=""/><br /><sub><b>Saad Pasta</b></sub></a></td>
    <td align="center"><a href="https://github.com/kartikcho"><img src="https://avatars1.githubusercontent.com/u/48270786?v=4" width="100px;" alt=""/><br /><sub><b>Kartik Choudhary</b></sub></a></td>
    <td align="center"><a href="https://github.com/naveen521kk"><img src="https://avatars1.githubusercontent.com/u/49693820?v=4" width="100px;" alt=""/><br /><sub><b>Naveen M K</b></sub></a></td>
    <td align="center"><a href="http://www.muhammadhasham.com"><img src="https://avatars0.githubusercontent.com/u/17927649?v=4" width="100px;" alt=""/><br /><sub><b>Muhammad Hasham</b></sub></a></td>
  </tr>
</table>

## Contributors 

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://facebook.com/9inpachi"><img src="https://avatars2.githubusercontent.com/u/36920441?v=4?s=100" width="100px;" alt="Fawad Ali"/><br /><sub><b>Fawad Ali</b></sub></a><br /><a href="#ideas-9inpachi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=9inpachi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dasunnavoda.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/5556085?v=4?s=100" width="100px;" alt="Dasun Navoda"/><br /><sub><b>Dasun Navoda</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=IamDZN" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://brian.teeman.net"><img src="https://avatars3.githubusercontent.com/u/1296369?v=4?s=100" width="100px;" alt="Brian Teeman"/><br /><sub><b>Brian Teeman</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=brianteeman" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rajkumaar.co.in"><img src="https://avatars1.githubusercontent.com/u/37476886?v=4?s=100" width="100px;" alt="Rajkumar S"/><br /><sub><b>Rajkumar S</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=rajkumaar23" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/viveksharmaui"><img src="https://avatars1.githubusercontent.com/u/28563357?v=4?s=100" width="100px;" alt="Slim Coder"/><br /><sub><b>Slim Coder</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://msayyaf.com"><img src="https://avatars3.githubusercontent.com/u/22149734?v=4?s=100" width="100px;" alt="Mohamed Sayyaf"/><br /><sub><b>Mohamed Sayyaf</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=msayyaf1" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ashutosh1919.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?v=4?s=100" width="100px;" alt="Ashutosh Hathidara"/><br /><sub><b>Ashutosh Hathidara</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=ashutosh1919" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.upwork.com/freelancers/~01d10c23d4ffe3c658"><img src="https://avatars0.githubusercontent.com/u/8683960?v=4?s=100" width="100px;" alt="Rizwan Jamal ⚡️"/><br /><sub><b>Rizwan Jamal ⚡️</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Rizwanjamal" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.muhammadhasham.com"><img src="https://avatars0.githubusercontent.com/u/17927649?v=4?s=100" width="100px;" alt="Muhammad Hasham"/><br /><sub><b>Muhammad Hasham</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=MohammadHasham" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sourcerer.io/joshiujjawal22"><img src="https://avatars3.githubusercontent.com/u/44023234?v=4?s=100" width="100px;" alt="UJJAWAL JOSHI"/><br /><sub><b>UJJAWAL JOSHI</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=joshiujjawal22" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/palak-sethi"><img src="https://avatars2.githubusercontent.com/u/51605219?v=4?s=100" width="100px;" alt="Palak Sethi"/><br /><sub><b>Palak Sethi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=palak-sethi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://viniciusbds.github.io/"><img src="https://avatars3.githubusercontent.com/u/34755896?v=4?s=100" width="100px;" alt="Vinicius Barbosa"/><br /><sub><b>Vinicius Barbosa</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=viniciusbds" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bharatkammakatla.github.io"><img src="https://avatars1.githubusercontent.com/u/28840761?v=4?s=100" width="100px;" alt="Bharat Kammakatla"/><br /><sub><b>Bharat Kammakatla</b></sub></a><br /><a href="#design-BharatKammakatla" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bit.ly/garimasingh"><img src="https://avatars2.githubusercontent.com/u/44302373?v=4?s=100" width="100px;" alt="Garima Singh"/><br /><sub><b>Garima Singh</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=garimasingh128" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HenryHengZJ"><img src="https://avatars2.githubusercontent.com/u/26460777?v=4?s=100" width="100px;" alt="Henry Heng"/><br /><sub><b>Henry Heng</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=HenryHengZJ" title="Code">💻</a> <a href="#design-HenryHengZJ" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PulkitBanta"><img src="https://avatars2.githubusercontent.com/u/43134750?v=4?s=100" width="100px;" alt="Pulkit Banta"/><br /><sub><b>Pulkit Banta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=PulkitBanta" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3APulkitBanta" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AkshayCHD"><img src="https://avatars1.githubusercontent.com/u/25455546?v=4?s=100" width="100px;" alt="Akshay Kumar"/><br /><sub><b>Akshay Kumar</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AkshayCHD" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3AAkshayCHD" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AmnaEjaz"><img src="https://avatars3.githubusercontent.com/u/14257959?v=4?s=100" width="100px;" alt="Amna Ejaz"/><br /><sub><b>Amna Ejaz</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AmnaEjaz" title="Code">💻</a> <a href="#ideas-AmnaEjaz" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/parasnagpal"><img src="https://avatars0.githubusercontent.com/u/39419139?v=4?s=100" width="100px;" alt="Paras Nagpal"/><br /><sub><b>Paras Nagpal</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=parasnagpal" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sourcerer.io/sparsh-99"><img src="https://avatars0.githubusercontent.com/u/56729873?v=4?s=100" width="100px;" alt="Sparsh Garg"/><br /><sub><b>Sparsh Garg</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=sparsh-99" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://aashutosh.dev"><img src="https://avatars2.githubusercontent.com/u/21199234?v=4?s=100" width="100px;" alt="Aashutosh Rathi"/><br /><sub><b>Aashutosh Rathi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=aashutoshrathi" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://abhishekashyap.studio/"><img src="https://avatars3.githubusercontent.com/u/29458374?v=4?s=100" width="100px;" alt="Abhishek Kashyap"/><br /><sub><b>Abhishek Kashyap</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Aabhishekashyap" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lcsvcn"><img src="https://avatars1.githubusercontent.com/u/6011385?v=4?s=100" width="100px;" alt="Lucas V C Nicolau"/><br /><sub><b>Lucas V C Nicolau</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=lcsvcn" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bradleycherrin.com"><img src="https://avatars0.githubusercontent.com/u/5648785?v=4?s=100" width="100px;" alt="Bradley C. Herrin"/><br /><sub><b>Bradley C. Herrin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=bradleycherrin" title="Documentation">📖</a> <a href="#ideas-bradleycherrin" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.zekinahlecaros.com"><img src="https://avatars0.githubusercontent.com/u/43392346?v=4?s=100" width="100px;" alt="Zekinah Lecaros"/><br /><sub><b>Zekinah Lecaros</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=zekinah" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vandana1499"><img src="https://avatars2.githubusercontent.com/u/29394600?v=4?s=100" width="100px;" alt="unbeat"/><br /><sub><b>unbeat</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=vandana1499" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lARSHADl"><img src="https://avatars3.githubusercontent.com/u/45604332?v=4?s=100" width="100px;" alt="Arshad Ahmed"/><br /><sub><b>Arshad Ahmed</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=lARSHADl" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://xiaohuiliu.me"><img src="https://avatars1.githubusercontent.com/u/33507446?v=4?s=100" width="100px;" alt="Xiaohui Liu"/><br /><sub><b>Xiaohui Liu</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Ergouzii" title="Documentation">📖</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=Ergouzii" title="Code">💻</a> <a href="#design-Ergouzii" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://seungyeon-lee.github.io/"><img src="https://avatars1.githubusercontent.com/u/26589915?v=4?s=100" width="100px;" alt="Seungyeon-Lee"/><br /><sub><b>Seungyeon-Lee</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Seungyeon-Lee" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/NajamShehzad"><img src="https://avatars2.githubusercontent.com/u/37629243?v=4?s=100" width="100px;" alt="Najam Shehzad "/><br /><sub><b>Najam Shehzad </b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=NajamShehzad" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.exspiravit.ga/"><img src="https://avatars1.githubusercontent.com/u/22334680?v=4?s=100" width="100px;" alt="Randy Jesus Real Srsen"/><br /><sub><b>Randy Jesus Real Srsen</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Exspiravit" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tamojitdas.netlify.app"><img src="https://avatars0.githubusercontent.com/u/40804626?v=4?s=100" width="100px;" alt="Tamojit Das"/><br /><sub><b>Tamojit Das</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=tamojit-123" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://warengonzaga.com"><img src="https://avatars1.githubusercontent.com/u/15052701?v=4?s=100" width="100px;" alt="Waren Gonzaga"/><br /><sub><b>Waren Gonzaga</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=WarenGonzaga" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.benjaminbourgeois.com"><img src="https://avatars3.githubusercontent.com/u/20949060?v=4?s=100" width="100px;" alt="Benjamin Bourgeois"/><br /><sub><b>Benjamin Bourgeois</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=BourgeoisBenjamin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/keshavjain235"><img src="https://avatars2.githubusercontent.com/u/52530690?v=4?s=100" width="100px;" alt="Keshav Jain"/><br /><sub><b>Keshav Jain</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=keshavjain235" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://hanzla.ga"><img src="https://avatars.githubusercontent.com/u/59178380?v=4?s=100" width="100px;" alt="Hanzla"/><br /><sub><b>Hanzla</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=1hanzla100" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yogeshhrathod"><img src="https://avatars.githubusercontent.com/u/46518134?v=4?s=100" width="100px;" alt="Yogesh Rathod"/><br /><sub><b>Yogesh Rathod</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=yogeshhrathod" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AlKun25"><img src="https://avatars.githubusercontent.com/u/53429438?v=4?s=100" width="100px;" alt="Kunal Mundada"/><br /><sub><b>Kunal Mundada</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AlKun25" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jayhawk24"><img src="https://avatars.githubusercontent.com/u/38766415?v=4?s=100" width="100px;" alt="Anubhav Gupta"/><br /><sub><b>Anubhav Gupta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=jayhawk24" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://vatsaldavevdwpblog.wordpress.com/"><img src="https://avatars.githubusercontent.com/u/42956495?v=4?s=100" width="100px;" alt="Vatsal Dave"/><br /><sub><b>Vatsal Dave</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=vatsaldaveVD" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.elvisciuffetelli.com"><img src="https://avatars.githubusercontent.com/u/35818757?v=4?s=100" width="100px;" alt="Elvis Ciuffetelli"/><br /><sub><b>Elvis Ciuffetelli</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=elvisciuffetelli" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ScottJellen.com"><img src="https://avatars.githubusercontent.com/u/51421669?v=4?s=100" width="100px;" alt="Scott Jellen"/><br /><sub><b>Scott Jellen</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=SJellen" title="Code">💻</a> <a href="#design-SJellen" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/karthik-mohan-/"><img src="https://avatars.githubusercontent.com/u/25052382?v=4?s=100" width="100px;" alt="Karthik Mohan"/><br /><sub><b>Karthik Mohan</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Akarthikmohan" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mhowell11"><img src="https://avatars.githubusercontent.com/u/62813469?v=4?s=100" width="100px;" alt="mhowell11"/><br /><sub><b>mhowell11</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=mhowell11" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gajanandh"><img src="https://avatars.githubusercontent.com/u/80502737?v=4?s=100" width="100px;" alt="gajanandh"/><br /><sub><b>gajanandh</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Agajanandh" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JooHyukKim"><img src="https://avatars.githubusercontent.com/u/61615301?v=4?s=100" width="100px;" alt="JooHyukKim"/><br /><sub><b>JooHyukKim</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=JooHyukKim" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://redheadphone.github.io/"><img src="https://avatars.githubusercontent.com/u/55500003?v=4?s=100" width="100px;" alt="Red Headphone"/><br /><sub><b>Red Headphone</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=RedHeadphone" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3ARedHeadphone" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sunitroy2703.github.io"><img src="https://avatars.githubusercontent.com/u/67560900?v=4?s=100" width="100px;" alt="Sunit Roy"/><br /><sub><b>Sunit Roy</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3ASunitRoy2703" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nayabatir1"><img src="https://avatars.githubusercontent.com/u/91016903?v=4?s=100" width="100px;" alt="Atir Nayab"/><br /><sub><b>Atir Nayab</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Anayabatir1" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://thatdevsherry.pk"><img src="https://avatars.githubusercontent.com/u/40890226?v=4?s=100" width="100px;" alt="Shehriyar Qureshi"/><br /><sub><b>Shehriyar Qureshi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=thatdevsherry" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Rispectech"><img src="https://avatars.githubusercontent.com/u/90450963?v=4?s=100" width="100px;" alt="respectech"/><br /><sub><b>respectech</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Rispectech" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://braydentw.com"><img src="https://avatars.githubusercontent.com/u/47185402?v=4?s=100" width="100px;" alt="Brayden"/><br /><sub><b>Brayden</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3ABraydenTW" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/CanciuCostin"><img src="https://avatars.githubusercontent.com/u/27332434?v=4?s=100" width="100px;" alt="Canciu Costin"/><br /><sub><b>Canciu Costin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=CanciuCostin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SpectralGT"><img src="https://avatars.githubusercontent.com/u/78777556?v=4?s=100" width="100px;" alt="Atharv Singh"/><br /><sub><b>Atharv Singh</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=SpectralGT" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://allishaan.co"><img src="https://avatars.githubusercontent.com/u/59707330?v=4?s=100" width="100px;" alt="Ishan Khandelwal"/><br /><sub><b>Ishan Khandelwal</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Ishan-001" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://slyapustin.com"><img src="https://avatars.githubusercontent.com/u/370774?v=4?s=100" width="100px;" alt="Sergey Lyapustin"/><br /><sub><b>Sergey Lyapustin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=slyapustin" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.cam1pozas.xyz/"><img src="https://avatars.githubusercontent.com/u/89259499?v=4?s=100" width="100px;" alt="Camila Pozas"/><br /><sub><b>Camila Pozas</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=camipozas" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://saiteja13427.github.io"><img src="https://avatars.githubusercontent.com/u/40917760?v=4?s=100" width="100px;" alt="Sai Teja"/><br /><sub><b>Sai Teja</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Asaiteja13427" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Vinitvh"><img src="https://avatars.githubusercontent.com/u/42197888?v=4?s=100" width="100px;" alt="Vinit Hemadri "/><br /><sub><b>Vinit Hemadri </b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Vinitvh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Njong392"><img src="https://avatars.githubusercontent.com/u/81039882?v=4?s=100" width="100px;" alt="Njong Emy"/><br /><sub><b>Njong Emy</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Njong392" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tamal.vercel.app/"><img src="https://avatars.githubusercontent.com/u/72851613?v=4?s=100" width="100px;" alt="Tamal Das "/><br /><sub><b>Tamal Das </b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=IAmTamal" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://dunsin.vercel.app"><img src="https://avatars.githubusercontent.com/u/78784850?v=4?s=100" width="100px;" alt="Dunsin"/><br /><sub><b>Dunsin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Dun-sin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/muneebahmedayub"><img src="https://avatars.githubusercontent.com/u/65030135?v=4?s=100" width="100px;" alt="Muneeb Ahmed"/><br /><sub><b>Muneeb Ahmed</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=muneebahmedayub" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/qais-attarwala/"><img src="https://avatars.githubusercontent.com/u/52388168?v=4?s=100" width="100px;" alt="Qais Attarwala"/><br /><sub><b>Qais Attarwala</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=KazAttarwala" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
