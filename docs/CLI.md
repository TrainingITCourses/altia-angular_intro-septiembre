# CLI journal

## 0. Application, module, and root component.

```bash
# Install Angular CLI globally
npm i @angular/cli

# Generate a new minimal application
ng new altia-angular_intro-septiembre --minimal=true --routing=true --style=css

# Alternatively, you can skip global installation by running
npx @angular/cli new altia-angular_intro-septiembre --minimal=true --routing=true --style=css

# run
npm start

# Add a bit of style
npm install @picocss/pico
# βπΌ angular.json : "./node_modules/@picocss/pico/css/pico.fluid.classless.min.css",

```

## 1. Templates

## 2. Modules

```bash
# Generate new component Header
ng g c header --flat

# Generate new component Footer with flat true on βπΌ angular.json
ng g c footer


# Generate new module Home
ng g m home

# Generate new component home
# (needs to be exported in the module Home)
ng g c home
ng g c home/agencies
ng g c home/trips


# Generate a Shared module
ng g m shared
# Generate an exported component
ng g c shared/reloading --export

# π§πΌββοΈ Alternatively Generate a Core module
ng g m core
## Move header and footer to core module

# π¦ΈπΌ Improvement: Generate a Page component for Home
ng g c home/home --export --type=page
```

# 3. Router

```bash
# Generate a new module
ng g m about
# Generate a new component
ng g c about/about --type=page

# Same, but with manual lazy loading
ng g m contact
ng g c contact/contact --type=page

# π§πΌββοΈ Same but auto generated a new route
ng g m agencies --route=agencies --module=app
# even with sub folders
ng g m auth/register --route=auth/register --module=app
ng g m auth/login --route=auth/login --module=app
# or deep routes
ng g m agencies/agenciesNew --route=new --module=agencies
# and parametric routes
ng g m agencies/agencies-view --route=:id --module=agencies
```

## 4. Forms

## 5. Services

```bash
# A generic stateless service
ng g s services/helper

# A generic stateful service
ng g s services/data
# with model interfaces
ng g i models/agency --type=interface
# optional edit in angular.json

# An specific service
ng g s agencies/agencies-new/agencies-new

```

## 6. Http

```bash
# install a development server with a fake api
npm i -D json-server json-server-auth
npm run api

# a service to talk with the api
ng g s services/api
```
