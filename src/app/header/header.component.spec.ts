import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

describe('HeaderComponent', () => {
	
	let fixture: ComponentFixture<HeaderComponent>
	let component: HeaderComponent;

	beforeEach(() => {
		class MockAuthService {}
    	TestBed.configureTestingModule({
	    	imports: [],
	    	providers: [
	    		// different type of providers are shown below for example
	    		{provide: AuthService, useClass: MockAuthService},
	    		{provide: Renderer2, useValue: {}},
	    		{provide: Router, useValue: {}},
	    		{provide: ElementRef, useValue: {}}
	    	],
        	declarations: [
	    		HeaderComponent
        	],
   		}).compileComponents();
	    fixture = TestBed.createComponent(HeaderComponent);
	    component = fixture.debugElement.componentInstance;
    });

    it('should create HeaderComponent', () => {
	    expect(component).toBeTruthy();
	});

	it('checks if output value of HeaderComponent::toggleHorizontalMenu() is toggling', () => {
		expect(component.toggleHorizontalMenu()).toBeDefined();
		expect(component.toggleHorizontalMenu()).toBeFalsy();
		expect(component.toggleHorizontalMenu()).toBeTruthy();
	});
})