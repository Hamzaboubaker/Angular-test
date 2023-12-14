import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "home/students", component: StudentsComponent},
  {path: "home/add", component: AddstudentsComponent},

  {path:'home/students/showappart/:id',component:ShowstudentComponent},
  
  {path:'**',component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
