# AGENTS.md

## Commands

- `npm run lint`: Runs linter to check code style.
- `npm run typecheck`: Performs static type checking.
- `npm run test`: Executes all tests.
- `npm run build`: Builds the application.

## Running Specific Tests/Packages

- `npm test -- <test-file>`: Runs a specific test file.
- `npm run test -- --grep <pattern>`: Runs tests matching a pattern.
- `npm run start`: Starts the development server.

## Command Order

1. `npm run lint`
2. `npm run typecheck`
3. `npm run test`

## Monorepo Boundaries

- `packages/client/`: Frontend application.
- `packages/server/`: Backend API.
- `packages/shared/`: Shared utilities and components.

## Framework Quirks

- Generated code is located in the `build` directory.
- Environment variables are loaded from `.env` files.
- Development server runs on port 5001.
- Build artifacts are stored in the `dist` directory.

## Testing Conventions

- Fixtures are located in `__tests__/fixtures/`.
- Integration tests require a running MongoDB instance.
- Snapshot tests update snapshots with `npm run test -- -u`.

## Important Constraints

- Always run lint and typecheck before committing changes.
- Ensure all dependencies are up-to-date by running `npm install`.
