import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Student {
  name: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  studentForm: FormGroup;
  isEditing = false;
  editingIndex = -1;
  students: Student[] = [
    { name: "boubaker", email: "boubaker@email.com", gender: "M" },
    { name: "salma", email: "salma@email.com", gender: "F" },
    { name: "Oussema", email: "Oussema@email.com", gender: "M" }
  ];

  get studentName() {
    return this.studentForm.get('studentName');
  }

  get studentEmail() {
    return this.studentForm.get('studentEmail');
  }

  get studentGender() {
    return this.studentForm.get('studentGender');
  }

  edit(i: number): void {
    this.isEditing = true;
    this.editingIndex = i;
    const selectedStudent = this.students[i];
    this.studentName.setValue(selectedStudent.name);
    this.studentEmail.setValue(selectedStudent.email);
    this.studentGender.setValue(selectedStudent.gender);
  }

  delete(i: number): void {
    this.students.splice(i, 1);
  }

  submit(): void {
    if (!this.isEditing) {
      this.students.push({
        name: this.studentName.value,
        email: this.studentEmail.value,
        gender: this.studentGender.value
      });
    } else {
      const editedStudent = this.students[this.editingIndex];
      editedStudent.name = this.studentName.value;
      editedStudent.email = this.studentEmail.value;
      editedStudent.gender = this.studentGender.value;
      this.isEditing = false;
      this.editingIndex = -1;
    }

    this.studentForm.reset();
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      studentName: new FormControl('', [Validators.required]),
      studentEmail: new FormControl('', [Validators.required, Validators.email]),
      studentGender: new FormControl('', Validators.required)
    });
  }
}
