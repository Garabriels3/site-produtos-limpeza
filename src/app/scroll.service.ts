import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private ngZone: NgZone) {}

  scrollToTop() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.document) {
          window.document.body.scrollTop = 0;
          window.document.documentElement.scrollTop = 0;
        }
      }, 0);
    });
  }
}
