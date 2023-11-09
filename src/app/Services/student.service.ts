import { Student } from './../Models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url!:string;

  constructor(private http: HttpClient) {
    this.url = "https://7acf-2800-2245-9080-776-668-1c51-3c8d-fa31.ngrok-free.app/student"
  }

  getStudents(){
    return this.http.get(this.url + '/getAll')
  }

  addStudent(student:Student){
    return this.http.post(this.url + "/", student)
  }

  updateStudent(id:number, student:Student){
    return this.http.post(this.url + id + "/update", student)
  }

  deleteStudent(id:number, student:Student){
    return this.http.post(this.url + id + "/delete", student)
  }
}
