import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { CourseResolver } from './services/course.resolver';
import { CoursesService } from './services/courses.service';

import { AppShellNoRenderDirective } from './directives/app-shell-norender.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(
			BrowserModule,
			MatMenuModule,
			MatButtonModule,
			MatIconModule,
			MatCardModule,
			MatTabsModule,
			MatSidenavModule,
			MatListModule,
			MatToolbarModule,
			MatInputModule,
			MatTableModule,
			MatPaginatorModule,
			MatSortModule,
			MatProgressSpinnerModule,
			MatDialogModule,
			AppRoutingModule,
			MatSelectModule,
			MatDatepickerModule,
			ReactiveFormsModule,
			AppShellRenderDirective,
			AppShellNoRenderDirective
		),
		CoursesService,
		CourseResolver,
		provideAnimations(),
		provideHttpClient(withInterceptorsFromDi(), withFetch()),
		provideClientHydration(),
	],
};
