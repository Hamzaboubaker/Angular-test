import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Student{
  
  name: string,
  email: string,
  id:number,
  gender:string
}
@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.scss']
})

export class ShowstudentComponent {
  idc=0;
  constructor(
    private route: ActivatedRoute,
   
  ) {}
  ngOnInit(): void {
     this.idc = Number(this.route.snapshot.params['id']);
     console.log(this.idc)
  }
  students: Student[] = [
    {
      id:1,
    name: "boubaker",
    email: "boubaker@email.com",
    gender:"M"
    },
    {
      id:2,
      name:"salma",
      email: "salma@email.com",
      gender:"F"
    },
    {
      id:3,
      name:"Oussema",
      email: "Oussema@email.com",
      gender:"M"
    }
   
  ];
}
