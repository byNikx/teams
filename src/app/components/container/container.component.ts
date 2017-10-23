import { Component, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { LayoutService } from "../../services/layout/layout.service";


@Component({
  selector: 'bd-container',
  host: {
  	'[class]': 'activeClass'
  },
  template: `<ng-content></ng-content>`,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnDestroy{

	_element: any;
	activeClass: string;
	watcher: Subscription;

	constructor(element: ElementRef, private layout: LayoutService) {
		this._element = element.nativeElement;
		this.watcher = this.layout.activeBreakpoint.subscribe((breakpoint) => {
			this.updateContainer(this._element, breakpoint);
		});
	}

	updateContainer(element, breakpoint): void{
//		console.log("breakpoint", breakpoint);
		if(!element)
			throw ReferenceError('No container defined.');

		this.activeClass = breakpoint;
	}

	ngOnDestroy(){
		this.watcher.unsubscribe();
	}

}
