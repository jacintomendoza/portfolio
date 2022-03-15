import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ParallaxDirective } from './parallax.directive';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { ClipboardModule } from '@angular/cdk/clipboard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    SigninComponent,
    ProjectsComponent,
    EducationComponent,
    ParallaxDirective,
    IntroComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
