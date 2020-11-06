import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { Professor } from '@app/_models/professor';
import { Course } from '@app/_models/course';

@Component({ templateUrl: 'professors.component.html' })
export class ProfessorsComponent {
  loading = false;
  users: User[];
  user: String = JSON.parse(localStorage.getItem('user')).firstName;
  professorForm: boolean = false;
  professors: Professor[] = [];
  courses: Course[] = [];
  pageOfItems: Array<any>;
  pageNum: number = 20;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
    this.viewProfessors();
  }

  viewProfessors() {
    this.professors = JSON.parse(localStorage.getItem('professors')) || [];
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}