import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { CoursesService } from './courses.service';

import { Course } from '../model/course';

@Injectable()
export class CourseResolver implements Resolve<Course> {
	constructor(private coursesService: CoursesService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
		const courseId = route.params['id'];

		return this.coursesService.findCourseById(courseId).pipe(first());
	}
}
