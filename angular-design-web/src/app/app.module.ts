import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './index/index/index.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BannerComponent } from './index/banner/banner.component';
import { BannerBottomComponent } from './index/banner-bottom/banner-bottom.component';
import { FeatureMoviesComponent } from './index/feature-movies/feature-movies.component';
import { LatesTvSeriesComponent } from './index/lates-tv-series/lates-tv-series.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    NavbarComponent,
    BannerComponent,
    BannerBottomComponent,
    FeatureMoviesComponent,
    LatesTvSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
