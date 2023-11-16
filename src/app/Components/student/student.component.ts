import { Student } from './../../Models/student.model';
import { StudentService } from './../../Services/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList:Student[]
  student:Student

  formStatus!:number
  formVisible:boolean=false
  
  constructor(private studentService:StudentService){
    this.studentList = new Array<Student>()
    this.student = new Student()
  }

  id!:number
  firstName!: string
  lastName!: string
  dni!: number
  email!: string

  toUpdateId!: number
  toUpdateFirstName!: string
  toUpdateLastName!: string
  toUpdateDni!: number
  toUpdateEmail!: string

ngOnInit(){
  this.getStudents()
}
openUpdateForm(){
  this.formStatus = 2
}

openAddForm(){
  this.formStatus = 1
}

cancelForm(){
  this.formStatus = 0
}

getStudents(){
  this.studentService.getStudents().subscribe(response =>{
    this.studentList = response as Student[];
  })
}

addStudent(){
  var student = new Student()
  student.firstName = this.firstName
  student.lastName = this.lastName
  student.dni = this.dni
  student.email = this.email

  console.log(student)
    this.studentService.addStudent(student).subscribe(response => {
      console.log(response);
      this.getStudents()
      this.student = new Student()
    }, error => {
    console.error(error);
    });
}

updateStudent(){
  var student = new Student()
  student.id = this.toUpdateId
  student.dni = this.toUpdateDni,
  student.lastName = this.toUpdateLastName,
  student.firstName = this.toUpdateFirstName,
  student.email = this.toUpdateEmail,

  console.log(student)
    this.studentService.updateStudent(student).subscribe(response => {
      console.log(response);
      this.getStudents()
    }, error => {
    console.error(error);
    });
}

selectStudent(student:Student){
  this.toUpdateId = student.id
  this.toUpdateDni = student.dni
  this.toUpdateFirstName = student.firstName
  this.toUpdateLastName = student.lastName
  this.toUpdateEmail = student.email
  }

deleteStudent(student:Student){
  this.studentService.deleteStudent(student).subscribe(response => {
    console.log(response);
    this.getStudents()
  }, error => {
  console.error(error);
  });
}
}

