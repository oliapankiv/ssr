import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {
	MAT_DIALOG_DATA,
	MatDialogActions,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Course } from '../model/course';

@Component({
	selector: 'course-dialog',
	templateUrl: './course-dialog.component.html',
	styleUrls: ['./course-dialog.component.css'],
	imports: [
		MatDialogTitle,
		MatDialogContent,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatOptionModule,
		MatDialogActions,
		MatButtonModule,
	],
})
export class CourseDialogComponent implements OnInit {
	form: FormGroup;
	description: string;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<CourseDialogComponent>,
		@Inject(MAT_DIALOG_DATA) { description, longDescription, category }: Course
	) {
		this.description = description;

		this.form = fb.group({
			description: [description, Validators.required],
			category: [category, Validators.required],
			longDescription: [longDescription, Validators.required],
		});
	}

	ngOnInit() {}

	save() {
		this.dialogRef.close(this.form.value);
	}

	close() {
		this.dialogRef.close();
	}
}
