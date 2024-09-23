# pro-date

A lightweight date utility class for parsing, formatting, and manipulating dates.

## Installation

You can install the package using **npm**, **yarn**, or **pnpm**.

```bash
pnpm add pro-date

yarn install pro-date

npm install pro-date
```

## Usage

```tsx
import { ProDate } from "pro-date";

const parsedDate = ProDate.parse("2023-09-24 14:30", "YYYY-MM-DD HH:mm");

console.log(parsedDate); // Outputs: ProDate { date: Sun Sep 24 2023 14:30:00 }
```

## tsup

Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this

1. install dependencies

```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
   Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```

5. Publish your package

```zsh
$ npm publish
```

## test package

https://www.npmjs.com/package/pro-date
