

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ScanDetailComponent } from './scan-detail/scan-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomainSettingComponent } from './domain-setting/domain-setting.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { FirstComponent } from './first/first.component';

export const router: Routes = [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/subdomain', component: SubDomainComponent },
    { path: 'user', component: UserComponent },
    { path: 'dashboard/scan', component: ScanDetailComponent },
    { path: 'first', component: FirstComponent },
    { path: 'dashboard/setting', component: DomainSettingComponent },
    
   
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


