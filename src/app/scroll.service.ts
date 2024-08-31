import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
