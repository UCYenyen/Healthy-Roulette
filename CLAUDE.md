# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**healthy-roulette** is a Next.js 16 + React 19 application using TypeScript and Tailwind CSS v4. The project includes a component system built with shadcn/ui primitives (Radix UI + Base UI) and is configured for modern web development with ESLint and the React Compiler enabled.

## Quick Commands

- **Development**: `pnpm dev` — Starts the Next.js dev server on http://localhost:3000
- **Build**: `pnpm build` — Builds the app for production
- **Start**: `pnpm start` — Runs the production build
- **Lint**: `pnpm lint` — Runs ESLint checks

## Project Structure

```
src/
  app/              # Next.js App Router pages and layouts
    page.tsx        # Home page
    layout.tsx      # Root layout with metadata and font setup
    globals.css     # Global Tailwind CSS configuration
  components/
    ui/             # shadcn/ui component primitives (Radix UI + Base UI)
    features/       # Feature-based components (domain-specific, reusable feature modules)
  hooks/            # Custom React hooks (e.g., use-mobile.ts)
  lib/              # Utility functions and helpers
  types/            # TypeScript interfaces and type definitions (strict, no 'any')
  validation/       # Zod schemas for runtime validation and type inference
```

## Key Technologies

- **Next.js 16.2.5** with App Router
- **React 19.2.4** with Server Components support
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** with `@tailwindcss/postcss` for modern CSS features
- **shadcn/ui**: Component system combining:
  - **Radix UI**: Unstyled, accessible primitive components
  - **Base UI**: Alternative component library integration
- **ESLint**: Next.js core web vitals + TypeScript rules (eslint-config-next)
- **React Compiler**: Enabled in next.config.ts for automatic memoization

## Component Development

### shadcn/ui Conventions

- All UI primitives are in `src/components/ui/`
- Components are built on Radix UI or Base UI for accessibility
- Use `class-variance-authority` (cva) for variant management
- Apply Tailwind classes for styling
- Export components from individual files with consistent naming

### Styling

- Tailwind CSS v4 with modern PostCSS plugin
- Custom theme variables are defined in `globals.css` using `@theme inline`
- Design tokens include: colors (primary, secondary, accent, etc.), radius values, and semantic sidebar/chart colors
- Dark mode uses the `.dark` class selector
- Use `clsx` or `tailwind-merge` for conditional classes

### Icons

- **lucide-react** is the icon library (v1.14.0)

### Component Architecture

**Feature-Based Components** (`src/components/features/`)
- Organize reusable feature modules by domain (e.g., `auth/`, `dashboard/`, `settings/`)
- Each feature folder contains its own components, hooks, and logic
- Examples: authentication flows, user dashboards, forms, dialogs specific to a feature
- Keep features self-contained and composable

**UI Components** (`src/components/ui/`)
- Primitive, reusable building blocks (shadcn/ui components)
- No business logic; purely presentational
- Composed together to build feature components

## Type Safety and Validation

### Types (`src/types/`)
- Define strict TypeScript interfaces and types
- **No `any` types** — use discriminated unions, generics, or unknown where needed
- Organize by domain: `user.types.ts`, `game.types.ts`, etc.
- Export all types from a barrel file or individual type files
- Use `interface` for objects, `type` for unions and complex shapes

**Example structure:**
```
src/types/
  index.ts          # Main export barrel
  user.types.ts     # User-related types
  game.types.ts     # Game/roulette-related types
  api.types.ts      # API request/response types
```

### Validation (`src/validation/`)
- Use **Zod** for runtime validation and type-safe schema definitions
- Generate types from Zod schemas using `z.infer<typeof schema>`
- Organize by domain matching types folder: `user.schema.ts`, `game.schema.ts`, etc.
- Use validation schemas for:
  - Form validation (react-hook-form integration)
  - API request/response validation
  - Runtime type checking
  - User input sanitization

**Example:**
```typescript
// src/validation/user.schema.ts
import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
});

export type User = z.infer<typeof userSchema>;

// src/types/user.types.ts can extend Zod-inferred types as needed
export interface UserProfile extends User {
  avatar?: string;
}
```

## TypeScript Configuration

- **Strict mode** enabled
- **No `any` types** — TypeScript strict checking is enforced. Use proper types, generics, or `unknown` instead
- **Path aliases** configured: `@/*` resolves to `src/*`
- **Module resolution**: bundler (Next.js default)
- **Target**: ES2017
- **JSX mode**: react-jsx (React 17+ auto-JSX)
- When TypeScript cannot infer a type, define it in `src/types/` rather than using `any`

## Development Notes

- **React Compiler**: Enabled by default. This automatically optimizes component memoization.
- **Font Loading**: Using next/font with Geist font family (auto-optimized by Next.js)
- **Metadata**: Set at the root layout level in `src/app/layout.tsx`
- **Dark Mode**: Configured via `next-themes` if used; apply the `.dark` class on the root element

## ESLint Configuration

- Uses modular ESLint config (eslint.config.mjs)
- Includes Next.js core web vitals and TypeScript rules
- Ignores standard Next.js build directories (.next, out, build, etc.)

## Common Tasks

**Add a new page**: Create a new directory under `src/app/` with a `page.tsx` file.

**Add a new UI component**: Create a file in `src/components/ui/` using shadcn/ui patterns. Use cva for variants and Tailwind for styling.

**Add a feature component**: Create a feature folder under `src/components/features/[feature-name]/` with:
- Composable components that use UI primitives
- Local hooks and utilities specific to the feature
- Associated types and validation schemas
- Example: `src/components/features/auth/LoginForm.tsx`

**Add types and interfaces**: Create domain-specific type files in `src/types/`:
- Use strict interfaces without `any`
- Export from `src/types/index.ts` for convenience
- Coordinate with validation schemas in `src/validation/`

**Add validation schema**: Create Zod schemas in `src/validation/[domain].schema.ts`:
- Define schemas matching your domain types
- Use `z.infer<typeof schema>` to generate TypeScript types
- Integrate with react-hook-form for form validation

**Add a custom hook**: Create a file in `src/hooks/` following the `use-*` naming convention.

**Add utilities**: Place reusable logic in `src/lib/utils.ts` or create domain-specific files in `src/lib/`.
