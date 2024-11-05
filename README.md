<h1 align="center">Typescript Boilerplate for Node.js Project</h1>

<p align="center">
    <i>Boilerplate Project for a Node.js application using <strong>TypeScript</strong> with all core stuff already configured. 
    <br />
    It's like a pizza with all your favorite toppings, but for code! 🍕🍕🍕</i>
</p>

<p align="center">
  <a href="https://github.com/ddnb/boilerplate-typescript/actions/workflows/ci.yml">
    <img src="https://github.com/ddnb/boilerplate-typescript/actions/workflows/ci.yml/badge.svg" alt="GitHub Action Status" />
  </a>
  <a href="https://www.npmjs.com/package/boilerplate-typescript">
    <img src="https://img.shields.io/npm/v/boilerplate-typescript.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="npm" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier"/>
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"/>
  </a>
</p>

## Overview

Boilerplate project for **Node.js** applications using **TypeScript** with test, lint, code formatter already configured.
Check the [Key Features](#Key) section for more details.  
The preferable way to use this boilerplate is using `npx` command. You can use `npm init` too.  
Use the following commands to bootstrap a new project:

### NPX

```
npx boilerplate-typescript --no --app=your-app
```

### NPM Init

```
npm init nodejs-ts -- --app=your-app
```

Without parameters, the project will be created on a folder **my-app** in the same directory where you executed the
command.  
All parameters available:

```
--destination=<FOLDER_DESTINATION> Defaults to the current directory
--app=<APP_NAME> Defaults to my-app
```

The final folder will the parameter `destination`, if provided, concatenated with the parameter `app`.

## ESM

The project template now uses **ESM** by default.

## Docker

Minimalist docker image generation.  
Check this [Dockerfile](build/docker/Dockerfile).

## Local Dev Environment

Run `make up` to spin up a local environment with **Docker Compose**.  
Check this [docker-compose.yml](deployments/dev/docker-compose.yml) for more details.

## Key Features

- **ESM (ECMAScript Modules)**: Uses ESM by default for module management.
- **TypeScript**: Provides strong typing and modern JavaScript features.
- **Jest**: Configured for unit testing.
- **EsLint**: Ensures code quality and consistency.
- **Husky**: Manages Git hooks.
- **Commit Lint**: Enforces conventional commit messages.
- **Lint Staged**: Runs linters on staged Git files.
- **Prettier**: Formats code for readability.
- **Nodemon**: Automatically restarts the application on file changes during development.
- **Docker**: Includes a minimalist Docker image generation.
- **Docker Compose**: Sets up a local development environment with Docker Compose.

## License

This project is [MIT Licensed](LICENSE).
