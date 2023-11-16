import { Student } from './../Models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url!:string;

  constructor(private http: HttpClient) {
    this.url = "https://backend-idra-production.up.railway.app/student"
  }

  getStudents(){
    return this.http.get(this.url + '/getAll')
  }

  addStudent(student:Student){
    return this.http.post(this.url, student)
  }

  updateStudent(student:Student){
    return this.http.post(this.url + '/' + student.id + '/update', student)
  }

  deleteStudent(id:number, student:Student){
    return this.http.post(this.url + id + "/delete", student)
  }
}
