import { AfterViewInit, Directive, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appReplaceCommaByDotInCtrl]'
})
export class ReplaceCommaByDotInCtrlDirective implements AfterViewInit, OnDestroy {
  private subscription$: Subscription;

  constructor(private ngControl: NgControl) {}

  ngAfterViewInit(): void {
    if (this.ngControl && this.ngControl.valueChanges) {
      this.subscription$ = this.ngControl.valueChanges.subscribe({
        next: (value: string | number) => {
          /**
           * On control value change, we check if the user submitted value is considered valid by the form control validators
           * and contains any amount of comma
           * Then we replace it with a dot
           */
          if (value && this.ngControl.valid && `${value}`.includes(',')) {
            this.ngControl.control.setValue(replaceCommaByDot(value));
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    // destroy the subscription
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}


/**
 * Replace by a dot any comma contained the value passed in param
 * @param value - value to treat
 */
export function replaceCommaByDot(value: string | number): string {
  return value ? `${value}`.replace(/[^0-9-.]/g, '.') : undefined;
}



