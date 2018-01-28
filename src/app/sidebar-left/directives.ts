import {HostListener, Directive, ElementRef, Renderer2, ViewChild} from "@angular/core";

@Directive({
selector: '[appVmt]'
})
export class VerticalMenuDirective {
/*  @ViewChild('aaa') el: ElementRef;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  toggleVerticalMenu = true;
  @HostListener('click') viewHorizontalMenu() {
    const nav = document.getElementById('nav');
    const sidebar_left = this.elRef.nativeElement.querySelector('.sidebar-left');
    console.log(this.el.nativeElement);
    this.toggleVerticalMenu = !this.toggleVerticalMenu;
    if (this.toggleVerticalMenu) {
      this.renderer.setStyle(nav, 'display', 'block');
      this.renderer.setStyle(sidebar_left, 'width', '80%');
    } else {
      this.renderer.setStyle(nav, 'display', 'none');
      this.renderer.setStyle(sidebar_left, 'width', 0);
    }
  }*/
}
