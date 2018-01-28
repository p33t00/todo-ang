import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public horizontal_menu_visibility = false;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    public authService: AuthService,
    public router: Router
  ) {
    // const token: string = authService.getToken();

  }

  logout() {
    const _this = this;
    this.authService.signOut().then(
      value => {_this.router.navigate(['login']); },
      value => {console.error(value); });
  }

  view_horizontal_menu() {
    const head_left = this.elRef.nativeElement.querySelector('.head-left');

    if (this.toggleHorizontalMenu()) {
      this.renderer.setStyle(head_left, 'display', 'table');
    } else {
      this.renderer.removeAttribute(head_left, 'style');
    }
  }

  toggleHorizontalMenu() {
    return this.horizontal_menu_visibility = !this.horizontal_menu_visibility;
  }

  ngOnInit() {
  }

}
