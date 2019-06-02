import { Component, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  private toggleVerticalMenu = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  viewHorizontalMenu() {
    const nav = this.elRef.nativeElement.querySelector('nav');
    const color_link = this.elRef.nativeElement.querySelector('.color-link');
    const sidebar_left = this.elRef.nativeElement.querySelector('.sidebar-left');
    const menu_trigger = this.elRef.nativeElement.querySelector('#vertical-side-menu-trigger');
    this.toggleVerticalMenu = !this.toggleVerticalMenu;
    if (this.toggleVerticalMenu) {
      this.renderer.addClass(sidebar_left, 'side-b-expand');
      this.renderer.removeClass(sidebar_left, 'side-b-shrink');
    } else {
      this.renderer.removeClass(sidebar_left, 'side-b-expand');
      this.renderer.addClass(sidebar_left, 'side-b-shrink');
    }
  }

  ngOnInit() {
  }

}
