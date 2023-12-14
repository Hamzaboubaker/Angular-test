import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Student{
  name: string,
  email: string,
  gender:string
}
@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.scss']
})


export class AddstudentsComponent {
  studentFrom: FormGroup; 
  isEditing: boolean = false;
  
  editingIndex: number = -1;
  students: Student[] = [
    {
    
    name: "aa",
    email: "aa@email.com",
    gender:"M"
    },
    {
     
      name:"bb",
      email: "bb@email.com",
      gender:"M"
    }
   
  ];

  
  get studentName() {
    return this.studentFrom.get('studentName')
  }

  get studentEmail() {
    return this.studentFrom.get('studentEmail')
  }
  get studentGender() {
    return this.studentFrom.get('studentGender')
  }

  edit(i: number): void {
    this.isEditing = true;
    this.editingIndex = i;
    this.studentName.setValue(this.students[i].name);
    this.studentEmail.setValue(this.students[i].email);
    this.studentGender.setValue(this.students[i].email);

  }

  delete(i: number): void {
    this.students.splice(i,1)
  }

  submit(): void {
    if(!this.isEditing){
      this.students.push({
        
        name: this.studentName.value,
        email: this.studentEmail.value,
        gender:this.studentGender.value
      })
    }else {
      this.students[this.editingIndex].name = this.studentName.value
      this.students[this.editingIndex].email = this.studentEmail.value
      this.students[this.editingIndex].gender=this.studentGender.value
      this.isEditing = false
      this.editingIndex = -1
    }
    console.log(this.students)
    this.studentFrom.reset();
  }

  ngOnInit(): void {
    this.studentFrom = new FormGroup({
      studentName: new FormControl('', [Validators.required]),
      studentEmail: new FormControl('', [Validators.required, Validators.email]),
      studentGender:new FormControl('',Validators.required)
    });
  }
}
