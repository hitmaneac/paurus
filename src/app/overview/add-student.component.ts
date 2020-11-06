import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Student } from '../_models/student';
import { Course } from '../_models/course';
import { UuidService } from '../_services/uuid.service';
import { Professor } from '@app/_models/professor';

@Component({ templateUrl: 'add-student.component.html', selector: 'add-student' })
export class AddStudentComponent implements OnInit {
  students: Array<Student>;
  studentInfo: FormGroup;
  courses: Array<Course>;
  professors: Array<Professor>;
  student: Student;
  course: Course;
  professor: Professor = { id: null, name: null, courses: null };
  courseName: string;
  professorName: string;
  constructor(private uuid: UuidService) { }

  ngOnInit() {
    this.initialValues();
  }

  idExists(id: any, arr: any[]) {
    return arr.some(el => el[id] === id);
  }

  saveStudent() {
    if (!this.student.name) return;
    let id = this.uuid.UUID(localStorage.getItem('lastId'));
    localStorage.setItem('lastId', id);
    this.student.id = id;
    this.student.courses = [];
    this.student.courses.push(this.addCourse());
    this.students.push(this.student);
    localStorage.setItem('students', JSON.stringify(this.students));
    this.initialValues();
    window.location.reload();
  }

  addCourse() {
    this.courses = JSON.parse(localStorage.getItem('courses')) || [];
    this.professors = JSON.parse(localStorage.getItem('professors')) || [];
    this.course = { id: this.courses.length, name: this.courseName, professor: this.professors.length };
    this.courses.push(this.course);
    localStorage.setItem('courses', JSON.stringify(this.courses));
    let courses = this.professors && this.professors[this.professors.length] && this.professors[this.professors.length].courses ? this.professors[this.professors.length].courses : [];
    courses.push(this.course.id);
    this.professor = { id: this.professors.length, name: this.professorName, courses };
    console.log('profesor', this.professor);
    this.professors.push(this.professor);
    localStorage.setItem('professors', JSON.stringify(this.professors));
    return this.course.id;
  }

  initialValues() {
    this.student = { id: null, name: null, courses: null };
    this.course = { id: null, name: null, professor: null };
    this.professor = { id: null, name: null, courses: null };
    this.courses = JSON.parse(localStorage.getItem('courses')) || [];
    this.professors = JSON.parse(localStorage.getItem('professors')) || [];
    this.students = JSON.parse(localStorage.getItem('students')) || [];
  }
}
