import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AddComponent } from './add/add.component';
import { ConfirmIpComponent } from './confirm-ip/confirm-ip.component';
import { DomainComponent } from './domain/domain.component';
import { DomainSettingComponent } from './domain-setting/domain-setting.component';
import { VerifyOwnershipComponent } from './verify-ownership/verify-ownership.component';
import { HomeComponent } from './home/home.component';
import { ScanDetailComponent } from './scan-detail/scan-detail.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { FirstComponent } from './first/first.component';
import { VerifyDomainComponent } from './verify-domain/verify-domain.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { DomianDetailComponent } from './domian-detail/domian-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    AddComponent,
    ConfirmIpComponent,
    DomainComponent,
    DomainSettingComponent,
    VerifyOwnershipComponent,
    HomeComponent,
    ScanDetailComponent,
    SubDomainComponent,
    FirstComponent,
    VerifyDomainComponent,
    ReportDetailsComponent,
    DomianDetailComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
