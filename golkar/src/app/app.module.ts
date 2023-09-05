import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgChartsModule } from 'ng2-charts';
import { AuthModule } from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule,LeafletModule,HttpClientModule,NgChartsModule,AuthModule, NgbModule] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
