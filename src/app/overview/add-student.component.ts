import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Student } from '../_models/student';
import { UuidService } from '../_services/uuid.service';

@Component({ templateUrl: 'add-student.component.html', selector: 'add-student' })
export class AddStudentComponent {
  students: Student[];
  student: Student;
  studentInfo: FormGroup;
  constructor(private uuid: UuidService) { }

  ngOnInit() {
    this.student = { id: null, firstName: '', lastName: '', age: null, courses: {} };
  }

  idExists(id: any, arr: any[]) {
    return arr.some(el => el[id] === id);
  }

  saveStudent() {
    this.students = JSON.parse(localStorage.getItem('students')) || [];
    if (!this.student.firstName || !this.student.lastName || !this.student.age) return;
    let id = this.uuid.UUID(localStorage.getItem('lastId'));
    localStorage.setItem('lastId', id);
    this.student.id = id;
    this.students.push(this.student);
    localStorage.setItem('students', JSON.stringify(this.students));
    this.student = { id: null, firstName: null, lastName: null, age: null, courses: {} };
    window.location.reload();
  }
}
