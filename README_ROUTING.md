# Routing
In this section, we will talk about routing in the project.

## First step
### Routing root
Who first step, we created the routing root. Main routing where has all link this project.


```
<project>/src/app/app.routing.module.ts

// core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{
    enableTracing: false,

  })],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}

```

## Second step 
### Think about extructure project
