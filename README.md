# React + TypeScript + Vite
# My Component Project

A modern React component library featuring a customizable `InputField` and a responsive `DataTable`, styled with Tailwind CSS and built using Vite. The project includes Storybook for interactive component documentation and testing.

## Features
- **InputField**: Flexible input component with variants, error handling, and accessibility.
- **DataTable**: Responsive table with sorting, selection, and beautiful UI.
- **Tailwind CSS**: Utility-first styling for rapid development and easy customization.
- **Storybook**: Browse and test components in isolation.

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
3. **Run Storybook**
   ```bash
   npm run storybook
   ```

## Approach
- **Component Design**: Components are built with reusability and accessibility in mind. Props allow for customization of appearance and behavior.
- **Responsiveness**: Tailwind CSS ensures components look great on all screen sizes. Layouts use flex and grid utilities for adaptive design.
- **Styling**: Utility classes from Tailwind provide consistent, modern UI. Custom CSS is minimal and only used for global tweaks.
- **Storybook**: Stories demonstrate component usage, states, and variants, making it easy to test and document.

## Usage Examples

### InputField
```tsx
<InputField
  label="Email Address (Outlined)"
  placeholder="Enter your email"
  value={email}
  onChange={handleEmailChange}
  invalid={isEmailInvalid}
  errorMessage={isEmailInvalid ? 'Please enter a valid email address.' : undefined}
/>
<InputField
  label="Username (Filled)"
  placeholder="Your username"
  variant="filled"
/>
<InputField
  label="Search (Ghost)"
  placeholder="Search something..."
  variant="ghost"
/>
<InputField
  label="Disabled Input"
  placeholder="This field is disabled"
  disabled
/>
```

### DataTable
```tsx
<DataTable
  data={users}
  columns={userColumns}
  selectable
  onRowSelect={handleRowSelection}
/>
```

## Storybook
See the `src/components/inputfield/InputField.stories.tsx` and `src/components/table/DataTable.stories.tsx` files for more usage examples and interactive demos.

---

Feel free to customize and extend these components for your own projects!
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
