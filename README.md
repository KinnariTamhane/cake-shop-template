# Sweet Delights - Cake Shop

Project URL : https://cakeshop-template.netlify.app/

A modern, responsive single-page React application for a cake shop featuring beautiful UI components and smooth user interactions.

## Features

- **Header Navigation**: Sticky header with navigation links (Home, Menu, Custom Orders, About Us) with hover and active state underlines
- **Hero Section**: Carousel displaying different cake images with automatic rotation
- **Featured Cakes**: Grid display of best-selling cakes with hover effects
- **Custom Order Form**: Comprehensive form for custom cake orders
- **Testimonials**: Customer reviews section
- **Footer**: Contact information and social media links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18.2.0
- CSS3 (Custom styling with modern design patterns)
- Google Fonts (Playfair Display & Poppins)

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Header.css
│   ├── Hero.js
│   ├── Hero.css
│   ├── FeaturedCakes.js
│   ├── FeaturedCakes.css
│   ├── CustomOrder.js
│   ├── CustomOrder.css
│   ├── Testimonials.js
│   ├── Testimonials.css
│   ├── Footer.js
│   └── Footer.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Features in Detail

### Navigation
- Smooth scroll to sections
- Active state highlighting
- Hover effects with underline animation

### Hero Carousel
- Automatic slide rotation (5 seconds)
- Manual navigation buttons
- Indicator dots
- Smooth transitions

### Custom Order Form
- Multiple dropdown selections
- Date picker for pickup date
- File upload for reference images
- Form validation

## License

This project is created for demonstration purposes.
