# AGENTS.md - DNAI-Institutional Development Guide

## Project Overview

- **Stack**: Vite + React 19 + TailwindCSS 4
- **Language**: JavaScript/JSX (ES Modules)
- **Type Checking**: TypeScript types available (@types/react, @types/react-dom)
- **Package Manager**: npm

## Build / Lint / Test Commands

```bash
npm run dev       # Start development server (http://localhost:5173)
npm run build     # Production build to dist/
npm run lint      # Run ESLint on all files
npm run preview   # Preview production build locally
```

### Single Test
No test framework is currently configured. To add tests, consider installing Vitest:
```bash
npm install -D vitest
```

## Required Tools - Context7 & DevTools MCP

**OBRIGATÓRIO**: A cada interação com o código, utilize as ferramentas Context7 e DevTools MCP:

### Context7 (Documentação)
- Use **context7_resolve-library-id** para obter o ID de bibliotecas
- Use **context7_query-docs** para consultar documentação de frameworks/libraries
- Exemplos de uso:
  - Consultar React hooks: `context7_query-docs` com libraryId `/facebook/react`
  - Consultar Tailwind CSS v4: `context7_query-docs` com libraryId `/tailwindlabs/tailwindcss`
  - Sempre prefira Context7 em vez de buscar documentação manualmente

### DevTools MCP (Testes no Navegador)
- Use **devtools_navigate_page** para navegar para http://localhost:5173
- Use **devtools_take_snapshot** para verificar renderização dos componentes
- Use **devtools_list_console_messages** para verificar erros no console
- Use **devtools_lighthouse_audit** para verificar acessibilidade e SEO
- Execute `npm run dev` em background antes de usar DevTools

**Fluxo obrigatório após cada mudança no código:**
1. Execute `npm run lint` para verificar erros
2. Execute `npm run build` para verificar build
3. Inicie `npm run dev` e verifique no navegador via DevTools
4. Use Context7 para consultar APIs quando necessário

## Code Style Guidelines

### General
- Use functional components with hooks (React 19 patterns)
- Prefer default exports for components
- Use `.jsx` for files containing JSX, `.js` for logic-only files
- ES Modules (import/export) - no CommonJS

### Formatting
- 2-space indentation
- Trailing commas in multi-line objects/arrays
- Single quotes for strings (JSX uses double quotes for attributes)
- No semicolons at end of statements

### Imports
- React hooks first (built-in), then external libs, then local imports
- Group: 1) React hooks 2) Third-party 3) Local components/utils
- Relative imports for local files (./components/...), absolute for public assets

```jsx
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import MyComponent from './components/MyComponent'
```

### Naming Conventions
- Components: PascalCase (MyComponent.jsx)
- Hooks: camelCase starting with use (useMyHook)
- Utils/Constants: PascalCase for exported constants, camelCase for functions
- Files: kebab-case (my-component.jsx) or PascalCase for components

### Types
- Use JSDoc annotations for type hints when TypeScript isn't used
- PropTypes for component prop validation
- TypeScript types available in devDependencies

### React Patterns
- Use useState for local state, useEffect for side effects
- Memoize expensive computations with useMemo/useCallback
- Use useCallback for event handlers passed to child components
- Avoid inline object/array creation in JSX props

### Error Handling
- Use try/catch for async operations
- Display user-friendly error messages in UI
- Log errors to console during development

### TailwindCSS 4
- Use `@import "tailwindcss"` in CSS (v4 syntax)
- Utility classes for styling (no custom CSS unless necessary)
- Custom theme in CSS using @theme directive

## ESLint Configuration

Project uses ESLint with these rules:
- React Hooks (recommended-latest)
- React Refresh (safe component updates)
- No unused variables (except UPPER_CASE_PATTERN)
- Standard ES2020 features

## File Structure (Recommended)

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── utils/         # Helper functions
├── contexts/      # React Context providers
├── pages/         # Page-level components
├── App.jsx        # Root component
├── main.jsx       # Entry point
└── index.css      # Global styles + Tailwind
```

## Key Configuration Files

- `vite.config.js` - Vite + React + Tailwind plugins
- `eslint.config.js` - ESLint rules and plugins
- `package.json` - Dependencies and scripts

## Base HTML Template

This project includes `base.html` in the root directory - this is the literal design reference for the DNAI website. All React components MUST match this HTML exactly in terms of:
- Layout structure
- Styling classes
- Design system colors
- Typography
- Spacing
- Components

### Design System (from base.html)

**Colors (Tailwind CSS):**
- Primary Container: `#0c1c2e`
- Primary Fixed: `#d3e4fd`
- On Primary Fixed: `#0c1c2e`
- Secondary Container: `#d6e4f7`
- Surface: `#f6fafe`
- On Surface: `#171c1f`
- On Secondary Container: `#586676`
- Tertiary: `#3583eb`
- Error: `#ba1a1a`

**Typography:**
- Font Family: Manrope (headline, body, label)
- Google Fonts: https://fonts.googleapis.com/css2?family=Manrope:wght@200..800

**Icons:**
- Material Symbols Outlined: https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined

**Custom CSS Classes:**
- `.glass` - Glassmorphism effect (white/45% opacity, blur 24px)
- `.material-symbols-outlined` - Icon styling

**Tailwind Config (in base.html):**
The design uses custom colors configured via Tailwind CDN. When implementing in React:
1. Copy the color palette to `src/index.css` using Tailwind v4 `@theme` directive
2. Use the color classes exactly as shown in base.html (e.g., `bg-primary-container`, `text-on-primary-fixed`)

### Bento Grid Layout
The health data section uses a responsive bento grid:
- Mobile: 1 column
- Desktop: 4 columns x 3 rows
- Gap: 6 (1.5rem)
- Cards use `glass` class with rounded-3xl and hover:translate-y-[-4px]

## Notes

- No test framework currently installed
- No TypeScript (plain JS with optional type hints)
- TailwindCSS v4 uses CSS-based configuration
- ALWAYS reference base.html when implementing components - the HTML is the source of truth