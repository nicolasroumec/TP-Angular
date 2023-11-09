import { Student } from 'src/app/Models/student.model';
import { StudentService } from './../../Services/student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  formVisible:boolean=false
  studentList:Student[]

  student1:Student
  student2:Student
  student3:Student
  student4:Student

  constructor(private studentService:StudentService){
    this.studentList = new Array<Student>
    this.student1 = new Student
    this.student2 = new Student
    this.student3 = new Student
    this.student4 = new Student

    this.student1.id = 1
    this.student1.dni = 41854405
    this.student1.firstName = 'Nicolas'
    this.student1.lastName = 'Roumec'
    this.student1.email = 'nicolasroumec@hotmail.com'

    this.student2.id = 2
    this.student2.dni = 41854405
    this.student2.firstName = 'Nicolas'
    this.student2.lastName = 'Roumec'
    this.student2.email = 'nicolasroumec@hotmail.com'

    this.student3.id = 3
    this.student3.dni = 41854405
    this.student3.firstName = 'Nicolas'
    this.student3.lastName = 'Roumec'
    this.student3.email = 'nicolasroumec@hotmail.com'

    this.student4.id = 4
    this.student4.dni = 41854405
    this.student4.firstName = 'Nicolas'
    this.student4.lastName = 'Roumec'
    this.student4.email = 'cristian@hotmail.com'

    this.studentList.push(this.student1)
    this.studentList.push(this.student2)
    this.studentList.push(this.student3)
    this.studentList.push(this.student4)

  }

ngOnInit(){
}

openForm(){
  this.formVisible=true
}

cancelForm(){
  this.formVisible=false
}

getStudents(){
  this.studentService.getStudents().subscribe(response =>{
    this.studentList = response as Student[];
  })

}
}
