import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { InterceptTokenService } from './intercept-token.service';

import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AlbumComponent } from './components/album/album.component';
import { ArtistDiscographyComponent } from './components/artist-discography/artist-discography.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReleasesComponent,
    AboutComponent,
    NotFoundComponent,
    AlbumComponent,
    ArtistDiscographyComponent,
    SearchResultComponent,
    FavouritesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptTokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
