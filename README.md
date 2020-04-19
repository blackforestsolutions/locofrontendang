# Locofrontendang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

## Setup

You need to install `Node.js`, `Angular CLI`, `Yarn`.
`Node.js`: Download Link https://nodejs.org/de/ Test in cmd: `node -v`
`Angular Cli`: npm install -g @angular/cli Test in CMD: Test in cmd: `ng version`
`Yarn`: Via Chocolatey: choco install yarn  
 Via Installer: https://classic.yarnpkg.com/en/docs/install/#windows-stable Test in cmd: `yarn --version`

## Development server (Easiest way to start our application)

Run `yarn install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. The Angular Cli simulates a webserver.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Docker and Run Container

You need to install `Docker` and `Nginx`

Run `dockerize.ps1` Shell Script to build a Docker Image
Run `redeploy.ps1` Shell Script to start a Docker container

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
