import { Student } from './../../Models/student.model';
import { StudentService } from './../../Services/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList:Student[]
  student:Student

  addStudentForm:boolean=false
  updateStudentForm:boolean=false
  formVisible:boolean=false

  firstName = new FormControl('',(Validators.required));
  lastName = new FormControl('', (Validators.required));
  dni = new FormControl('', (Validators.required))
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private studentService:StudentService){
    this.studentList = new Array<Student>
    this.student = new Student()
  }

ngOnInit(){
  this.getStudents()
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

addStudent(){
  if (this.firstName.invalid || this.lastName.invalid || this.dni.invalid || this.email.invalid) {
    alert("Invalid form.")
    return;
  }else{
    var student = new Student()
    student.firstName = this.firstName.value || ""
    student.lastName = this.lastName.value || ""
    student.dni = parseInt(this.dni.value ?? '0')
    student.email = this.email.value || ""
  }
  console.log(student)
    this.studentService.addStudent(student).subscribe(response => {
      console.log(response);
      this.getStudents();
      this.firstName.reset()
      this.lastName.reset()
      this.dni.reset()
      this.email.reset()
    }, error => {
    console.error(error);
    });
}

updateStudent(){

}
}

