import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

@Injectable()
export class LayoutService  implements OnDestroy{

	_activeBreakpoint = new BehaviorSubject<string>(null);
	_breakpointwatcher: Subscription;
	constructor(private media: ObservableMedia) { 

		this._breakpointwatcher = media.subscribe((change: MediaChange) => {

			let bp = this.detectBreakpoint( 
	    		BREAKPOINTS.filter((breakpoint)=>{
		  			return change.mqAlias == breakpoint;
		  		})
	    	);
	    	this._activeBreakpoint.next(bp);  
	    });

	}


	detectBreakpoint(breakpoints): string{
		if(Object.prototype.toString.call( breakpoints ) === '[object Array]'){
			
			if(breakpoints.length === 1){
	  			return breakpoints.shift();
	  		} else {
	  			return null;
	  		}

	  	}else{
  			return null;
  		}
  	}

  	get activeBreakpoint(): BehaviorSubject<string> {
  		return this._activeBreakpoint;
  	}

  	set activeBreakpoint(activeBreakpoint) {
  		this._activeBreakpoint = activeBreakpoint;
  	}
	
	ngOnDestroy() {
	    this._breakpointwatcher.unsubscribe();
	}

}
