import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProfessorsComponent } from './overview/professors.component';
import { CoursesComponent } from './overview/courses.component';
import { AddStudentComponent } from './overview/add-student.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ButtonModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule
  ],
  declarations: [OverviewComponent, AddStudentComponent, ProfessorsComponent, CoursesComponent]
})
export class OverviewModule { }