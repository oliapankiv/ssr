import { Inject, Injectable, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { CoursesService } from './courses.service';

import { Course } from '../model/course';

@Injectable()
export class CourseResolver implements Resolve<Course> {
	constructor(
		@Inject(PLATFORM_ID) private platformId,
		private coursesService: CoursesService,
		private transferState: TransferState
	) {}

	public resolve(route: ActivatedRouteSnapshot): Observable<Course> {
		const courseId = route.params['id'];
		const COURSE_KEY = makeStateKey<Course>(`courseKey-${courseId}`);

		if (this.transferState.hasKey(COURSE_KEY)) {
			const course = this.transferState.get(COURSE_KEY, null);

			this.transferState.remove(COURSE_KEY);

			return of(course);
		} else {
			return this.coursesService.findCourseById(courseId).pipe(
				first(),
				tap(course => isPlatformServer(this.platformId) && this.transferState.set(COURSE_KEY, course))
			);
		}
	}
}
