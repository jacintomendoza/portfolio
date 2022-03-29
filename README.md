# PortfolioFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Creating Angular Appllication:
```
ng new <name of app>
```

Execution:
```
npm run build
npm run start
```
Optional Execution:
```
nodemon
```

## Deploy via gh-pages
```
npm run deploy
```
package.json:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

angular.json:
```
"baseHref": "/portfolio/",
"outputPath": "build",
```

Notes:
refreshing on ghpages caueses 404 error since ghpages doesn't support single page apps.  It doesn't have access to front-end routes.