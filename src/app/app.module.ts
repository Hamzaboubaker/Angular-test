import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    NotFoundComponent,
    AddstudentsComponent,
    ShowstudentComponent
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
