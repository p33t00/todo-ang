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
      this.renderer.setStyle(nav, 'display', 'table-row');
      this.renderer.setStyle(color_link, 'display', 'table-row');
      this.renderer.setStyle(sidebar_left, 'width', '80%');
      this.renderer.setStyle(menu_trigger, 'width', '15px');
    } else {
      this.renderer.setStyle(nav, 'display', 'none');
      this.renderer.setStyle(color_link, 'display', 'none');
      this.renderer.setStyle(sidebar_left, 'width', '15px');
      this.renderer.setStyle(menu_trigger, 'width', '15px');
    }
  }

  ngOnInit() {
  }

}
