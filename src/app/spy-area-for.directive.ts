import { Directive, HostBinding, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { SpyAnchorDirective } from './spy-anchor.directive';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive({
  selector: '[spyAreaFor]'
})
export class SpyAreaForDirective implements AfterViewInit, OnDestroy {
  @Input('spyAreaFor') areaFor: SpyAnchorDirective;

  private destroy$ = new Subject();

  constructor(public elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    fromEvent(this.areaFor.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => this.elementRef.nativeElement.scrollIntoView()
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
