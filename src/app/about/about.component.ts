import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
	AsyncSubject,
	BehaviorSubject,
	concat,
	from,
	fromEvent,
	interval,
	merge,
	noop,
	observable,
	Observable,
	of,
	ReplaySubject,
	Subject,
	timer,
} from 'rxjs';
import { delayWhen, filter, map, take, timeout } from 'rxjs/operators';

@Component({
	selector: 'about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
	standalone: true,
})
export class AboutComponent implements OnInit {
	ngOnInit() {}

	run() {}
}
