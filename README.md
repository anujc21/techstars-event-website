# Techstars Event Website

## Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Development

Start the development server with hot reloading:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173/
```

(or the port shown in your terminal).

## Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Build

Create an optimized production build:

```bash
npm run build
```

## Preview

After building, preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

-   If you encounter issues after pulling new changes:
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```
-   If the development server fails to start, check if another app is using port `5173`.  
    You can specify a different port when running dev:
    ```bash
    npm run dev -- --port=3000
    ```

---
