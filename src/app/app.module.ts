import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { ChildsComponent } from './pages/childs/childs.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidenavListComponent } from './shared/layout/sidenav-list/sidenav-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    ChildsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidenavListComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
