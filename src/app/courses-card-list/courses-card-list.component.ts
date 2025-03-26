import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

import { Course } from '../model/course';

@Component({
	selector: 'courses-card-list',
	templateUrl: './courses-card-list.component.html',
	styleUrls: ['./courses-card-list.component.scss'],
	imports: [NgFor, MatCardModule, MatButtonModule, RouterLink],
})
export class CoursesCardListComponent {
	@Input() public courses: Course[];

	constructor(private dialog: MatDialog) {}

	public editCourse({ description, longDescription, category }: Course) {
		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;

		dialogConfig.data = {
			description,
			longDescription,
			category,
		};

		const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(val => console.log('Dialog output:', val));
	}
}
