# Arabica Cafe

A modern, responsive website for Arabica Cafe, built with React and Vite. This project showcases a cafe's offerings with sections for hero, about, services, menu, testimonials, contact, and footer. It features smooth animations, interactive carousels, and a clean design using Tailwind CSS.

## Features

- **Hero Section**: Eye-catching landing area with background image and call-to-action.
- **About Section**: Information about the cafe's story and values.
- **Services Section**: Highlights the services offered by the cafe.
- **Menu Section**: Displays the cafe's menu items with images and descriptions.
- **Testimonials Section**: Customer reviews and feedback.
- **Contact Section**: Contact information and location.
- **Footer Section**: Additional links and information.
- **Scroll to Top**: Button to quickly return to the top of the page.
- **Responsive Design**: Optimized for all device sizes.
- **Animations**: Smooth animations using AOS (Animate On Scroll).
- **Carousels**: Interactive sliders using Swiper for menu and testimonials.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **AOS (Animate On Scroll)**: Library for animating elements on scroll.
- **Swiper**: Modern touch slider for carousels.
- **Iconify**: Icon library for various icons.
- **ESLint**: Linting tool for code quality.
- **GH Pages**: For deploying the site to GitHub Pages.

## Project Structure

```
arabica__cafe/
├── public/
│   ├── Fonts/
│   ├── img/
│   └── ...
├── src/
│   ├── Components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Home.jsx
│   │   ├── Main.jsx
│   │   ├── Menu.jsx
│   │   ├── Menu__data.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonial.jsx
│   │   └── scrollToTop.jsx
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .fetched.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Components Explanation

- **App.jsx**: Main application component that initializes AOS and renders the Main component.
- **Main.jsx**: Layout component that includes all sections, with lazy loading for performance.
- **Home.jsx**: Container for the Hero section with background styling.
- **Hero.jsx**: Hero section with title, description, and buttons.
- **About.jsx**: About section describing the cafe.
- **Services.jsx**: Services offered by the cafe.
- **Menu.jsx**: Menu section with items displayed in a carousel.
- **Testimonial.jsx**: Customer testimonials in a slider.
- **Contact.jsx**: Contact information and location.
- **Footer.jsx**: Footer with links and details.
- **Header.jsx**: Navigation bar.
- **scrollToTop.jsx**: Button to scroll back to top.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Abdlatifbnchihk/arabica__coffe.git
   cd arabica__cafe
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

To build the project for production:

```
npm run build
```

This will create a `dist` folder with the optimized build.

### Preview Production Build

To preview the production build locally:

```
npm run preview
```

### Deployment

The project is set up for deployment to GitHub Pages. To deploy:

1. Build the project:
   ```
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

Make sure to update the repository URL in `package.json` if deploying to a different repository.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint for code linting.
- `npm run preview`: Previews the production build locally.
- `npm run predeploy`: Builds the project before deployment.
- `npm run deploy`: Deploys the project to GitHub Pages.

## Customization

- **Styling**: Modify styles in `src/App.css` and `src/index.css`, or use Tailwind classes in components.
- **Content**: Update text, images, and data in the respective component files.
- **Animations**: Adjust AOS settings in `App.jsx` or component files.
- **Icons**: Use Iconify icons by importing from `@iconify/react`.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and commit them.
4. Push to your fork.
5. Create a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out to [abdellatifbencheikh43@gmail.com].

---

This README provides a comprehensive overview of the Arabica Cafe project, explaining all key concepts, components, and setup instructions. Enjoy exploring the code!
