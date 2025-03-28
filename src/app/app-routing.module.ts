import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseResolver } from './services/course.resolver';

import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'about-v2',
		component: AboutComponent,
	},
	{
		path: 'courses/:id',
		component: CourseComponent,
		resolve: {
			course: CourseResolver,
		},
	},
	{
		path: '**',
		redirectTo: '/',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
