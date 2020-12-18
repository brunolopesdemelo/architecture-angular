# Routing ## [Return](https://github.com/brunolopesdemelo/architecture-angular/blob/main/README.md)
In this section, we will talk about routing in the project.

## First step
### Routing Root
As a first step, we create the routing root. But first, we will see an idea of ​​how the file structure will be:

```
draft
   + - src
       + - application
            + - app.routing.module.ts
            + - app.module.ts
            + - [modules]
            + - [core]
```

The root folder *app*, created the routing file, this has all the access links to all the pages of our project. Next we can see how the **app.routing.module.ts** file looks like:


```
file: <project> /src/app/app.routing.module.ts

// core
import {NgModule} from '@ angular / core';
import {RouterModule, Routes} from '@ angular / router';

export const appRoutes: Routes = [];

@NgModule ({
  imports: [RouterModule.forRoot (appRoutes, {
    enableTracing: false,

  })],
  exports: [RouterModule]
})

export class AppRoutingModule {};

```

## Second step
### Think about the structure of the project

The router will be able to get the following structure:

```
draft
   + - src
       + - application
            + - app.routing.module.ts
            + - app.module.ts
            + - modules
                 + - home
                      + home.component.ts
                      + home.component.css
                      + home.component.html
                      + home.routing.module.ts
                      + home.module.ts
                     ...
            + - core
```

Next, with our example, with each new component, we need to add its routing, example we can see **home.routing.module.ts**:

```
file: <project> /src/app/modules/home/app.routing.module.ts

//core
import {NgModule} from '@ angular / core';
import {RouterModule, Routes} from '@ angular / router';
// application
import {HomeComponent} from './home.component';


const homeRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'start', component: start component}
];

@NgModule ({
  imports: [RouterModule.forChild (homeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {};

```

After creating our module redirect, they should be linked in their modules, example **home.module.ts**:

```
file: <project> /src/app/modules/home/app.routing.module.ts

//core
import {CommonModule} from '@ angular / common';
import {NgModule} from '@ angular / core';
// application
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule ({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
})

export class HomeModule {};

```

But what would happen if the user digitized a wrong URL? <br />
We can redirect this non-existent URL to a personalized page, indicating the user with a legend **404 - Page not found**.

```
draft
   + - src
       + - application
            + - app.routing.module.ts
            + - app.module.ts
            + - modules
                 + - home
                      + home.component.ts
                      + home.component.css
                      + home.component.html
                      + home.routing.module.ts
                      + home.module.ts
                 + - page not found
                      + page-not-found.component.ts
                      + page-not-found.component.css
                      + page-not-found.component.html
                 ...
            + - core
```

In this component, we can send a default message about this link that doesn't work.

Now, in this step, we have two elements:
1. *app.routing.module.ts*, root routing
2. *home.routing.module.ts*, our first secondary routing.

Now we need to include the secondary route to the primary route:

```
file: <project> /src/app/app.routing.module.ts

// core
import {NgModule} from '@ angular / core';
import {RouterModule, Routes} from '@ angular / router';
// application
import {PageNotFoundComponent} from './modules/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/ home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot (appRoutes, {
    enableTracing: false,

  })],
  exports: [RouterModule]
})

export class AppRoutingModule {};

```
