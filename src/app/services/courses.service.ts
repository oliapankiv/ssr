import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { Lesson } from '../model/lesson';

@Injectable()
export class CoursesService {
	static readonly API_URL = 'https://angular-universal-course-94047.firebaseio.com';

	constructor(private http: HttpClient) {}

	public findCourseById(courseId: string): Observable<Course> {
		return this.http.get<Course>(`${CoursesService.API_URL}/courses/${courseId}.json`);
	}

	public findAllCourses(): Observable<Course[]> {
		return this.http.get<Course[]>(`${CoursesService.API_URL}/courses.json`);
	}

	public findAllCourseLessons(courseId: string): Observable<Lesson[]> {
		return this.http.get<Lesson[]>(`${CoursesService.API_URL}/lessons/${courseId}.json`);
	}
}
