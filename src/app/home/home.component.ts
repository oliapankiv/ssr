import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesService } from '../services/courses.service';

import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';

import { Course } from '../model/course';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [MatTabsModule, CoursesCardListComponent, AsyncPipe],
})
export class HomeComponent implements OnInit {
	public courses$: Observable<Course[]>;

	constructor(private coursesService: CoursesService) {}

	public ngOnInit() {
		this.courses$ = this.coursesService.findAllCourses().pipe(map(Object.values));
	}
}
