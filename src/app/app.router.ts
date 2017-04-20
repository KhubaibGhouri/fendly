

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ScanDetailComponent } from './scan-detail/scan-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomainSettingComponent } from './domain-setting/domain-setting.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { FirstComponent } from './first/first.component';
import { VerifyDomainComponent } from './verify-domain/verify-domain.component';
import { ReportDetailsComponent } from './report-details/report-details.component';

import { DomainComponent } from './domain/domain.component';
import { ConfirmIpComponent } from './confirm-ip/confirm-ip.component';
import { DomianDetailComponent } from './domian-detail/domian-detail.component';

export const router: Routes = [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/subdomain', component: SubDomainComponent },
    { path: 'user', component: UserComponent },
    { path: 'dashboard/domain', component: DomainComponent },
    { path: 'dashboard/scan', component: ScanDetailComponent },
    { path: 'dashboard/reportdetails', component: ReportDetailsComponent },
    { path: 'first', component: FirstComponent },
    { path: 'confirm', component: ConfirmIpComponent },
    { path: 'dashboard/setting', component: DomainSettingComponent },
    { path: 'dashboard/verifydomain', component: VerifyDomainComponent },
    { path: 'dashboard/domaindetail', component: DomianDetailComponent },
    
   
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


