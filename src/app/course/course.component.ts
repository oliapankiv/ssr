import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, startWith, tap } from 'rxjs/operators';

import { CoursesService } from '../services/courses.service';

import { Course } from '../model/course';
import { Lesson } from '../model/lesson';

@Component({
	selector: 'course',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss'],
	imports: [NgIf, MatProgressSpinnerModule, MatTableModule],
})
export class CourseComponent implements OnInit {
	course: Course;

	dataSource: MatTableDataSource<Lesson>;

	displayedColumns = ['seqNo', 'description', 'duration'];

	constructor(
		private route: ActivatedRoute,
		private coursesService: CoursesService
	) {}

	ngOnInit() {
		this.course = this.route.snapshot.data['course'];

		this.dataSource = new MatTableDataSource([]);

		this.coursesService.findAllCourseLessons(this.course.id).subscribe(lessons => (this.dataSource.data = lessons));
	}
}
