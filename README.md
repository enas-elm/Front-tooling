Tailwind.css
Run "npm run tailwind:watch" to run tailwind in the project
the variable are configured in the tailwind.config.js, you can change bthe values

Prettier
Run "run npx prettier . --write to"

## Lint

[ESLint](https://eslint.org/docs/latest/use/getting-started)

Configure the rules in the **'.eslintrc.json'** file

Run `npm run lint` to launch test

## Style

[Tailwind](https://tailwindcss.com/docs/installation)

Configure tailwind your tailwind classes in **'tailwind.config.js'** and modify you style in **'./src/style.css'** and **'./src/tailwind.css'**
Run `tailwind:watch` to launch make tailwind watch for style changes

## Formatter

[Prettier](https://prettier.io/docs/en/install)
Run `npx prettier . --write to`

## Test

[Jest](<https://www.google.com](https://jestjs.io/docs/getting-started)https://jestjs.io/docs/getting-started>)

Configure test in **'sum.js'** and **'sum.test.js'**

Run `npm run test` to launch test

## Git management

[Husky](https://typicode.github.io/husky/getting-started.html)

Right before your commit, husky wil launch your test to check if youre ode is ready to be pushed
