import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

import { AppShellRenderDirective } from './directives/app-shell-render.directive';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	imports: [
		MatSidenavModule,
		MatListModule,
		MatProgressSpinner,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		RouterLink,
		RouterOutlet,
		AppShellRenderDirective,
	],
})
export class AppComponent {}
