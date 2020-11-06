import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { Course } from '@app/_models/course';
import { Professor } from '@app/_models/professor';
import { Student } from '@app/_models/student';

@Component({ templateUrl: 'courses.component.html' })
export class CoursesComponent {
  loading = false;
  users: User[];
  user: String = JSON.parse(localStorage.getItem('user')).firstName;
  courseForm: boolean = false;
  courses: Course[] = [];
  professors: Professor[] = [];
  students: Student[] = [];
  pageOfItems: Array<any>;
  pageNum: number = 20;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
    this.viewCourses();
  }

  viewCourses() {
    this.courses = JSON.parse(localStorage.getItem('courses')) || [];
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}