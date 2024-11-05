# cosmos

A UI framework designed for astronomical instruments.

## How It Works

The cosmos UI Framework is built using Next.js, leveraging its powerful features to create a seamless user experience for astronomical applications.

### Component-Based Architecture

The framework is designed with a component-based architecture, allowing developers to build applications by assembling reusable components. Each component encapsulates its own logic and styles, promoting reusability and maintainability.

### Responsive Design

Components are built with responsive design principles, ensuring that they adapt to various screen sizes and devices. This allows users to access astronomical tools on desktops, tablets, and mobile devices without compromising usability.

### State Management

The components utilize React's state management capabilities to handle user interactions and dynamic data. For example, the `Guider` component manages telescope navigation through internal state and props, providing a smooth experience for users.

## Getting Started

To run the cosmos UI Framework in your local development environment, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)
- [yarn](https://yarnpkg.com/) (optional, for package management)

Install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
