import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[spyAnchor]',
  exportAs: 'spyAnchor'
})
export class SpyAnchorDirective {
  @HostBinding('class.active')
  active = false;

  constructor(public elementRef: ElementRef<HTMLAnchorElement>) {}
}
