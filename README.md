# Movie Search - a SvelteKit Demo

I created this demo app in order to get a practical understanding of how Svelte and SvelteKit work. In addition to these technologies I've used the following along the way:

- Package manager: PNPM
- Module bundler: Vite
- Programming language: Typescript
- Type validator: ZOD

## Developing

Once you've cloned the project and installed dependencies with `pnpm install`, do the following:

1. Create an `.env` file and copy the content of `.env.example` into it:

```bash
cp .env.example .env
```

2. Store your TMDB API Key in the env variable `TMDB_API_KEY` (if you don't have an API key yet, head over to https://developers.themoviedb.org/3 and create one)

```bash
# .env

...
TMDB_API_KEY=<MY_KEY>
...
```

3. Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Extending Types

If you make any changes to the `types/types.ts` file and you're validating data structures against these types, you have to run the following command to update the ZOD validator functions located in `types/zod-validators.ts`:

```bash
npm run gen:zod:validators
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
