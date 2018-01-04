import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from 'app/components/home/home.component';
import {GeneralAscendantComponent}from 'app/components/general-ascendant/general-ascendant.component';
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
     {
     path: 'generalAscendantReports',
     component: GeneralAscendantComponent
   } 
];

 export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);