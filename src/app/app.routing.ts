import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from 'app/components/home/home.component';

const appRoutes : Routes = [
   {
     path:'',
     redirectTo: '/personalityReport',
     pathMatch: 'full'
   },
   {
     path: 'personalityReport',
     component: HomeComponent
   },
];

 export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);