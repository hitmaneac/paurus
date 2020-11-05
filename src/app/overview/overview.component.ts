import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { Student } from '@app/_models/student';

@Component({ templateUrl: 'overview.component.html' })
export class OverviewComponent {
  loading = false;
  users: User[];
  user: String = JSON.parse(localStorage.getItem('user')).firstName;
  studentForm: boolean = false;
  students: Student[];
  pageOfItems: Array<any>;
  pageNum: number = 20;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
    this.viewStudents();
  }

  addStudent() {
    this.studentForm = true;
    localStorage.setItem('students', JSON.stringify(this.students));
    this.viewStudents();
  }

  viewStudents() {
    this.students = JSON.parse(localStorage.getItem('students')) || [];
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
    console.log(this.pageOfItems);
  }

  saveStudent(event, index) {
    this.students[index] = event;
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  removeStudent(event) {
    let r = confirm("Are you sure you wish to delete this user?");
    if (!r) return;
    this.students.splice(event, 1);
    localStorage.setItem('students', JSON.stringify(this.students));
    window.location.reload();
  }





}