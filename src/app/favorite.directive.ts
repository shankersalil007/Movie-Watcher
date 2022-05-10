import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({ selector: '[favmov]' })
export class FavoriteDirective {
  constructor() {}
  @HostBinding('class.is-fav') isFav = true;
  @Input() set favmov(value) {
    this.isFav = value;
  }

  @HostListener('click') onClickFav() {
    if (this.isFav) {
      this.isFav = false;
    } else {
      this.isFav = true;
    }
  }
}
