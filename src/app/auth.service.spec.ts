import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
	let service: AuthService;
	const token = 'abc123';
	// const MockHttpClient = {
	// 		status: 200,
	// 		token,
	// 		tokenData: {}
	// 	}

	/*class MockHttpClient extends HttpClient {
		post(){return of({status: 200})}
	}*/

	beforeEach(() => {
		// let MockHttpClient = Object.assign({}, HttpClient, {post: function(){return of({status: 200})}); // };
		// service = new AuthService(MockHttpClient);
		// class MockAuthService {}
    	TestBed.configureTestingModule({
	    	imports: [HttpClientModule],
	    	providers: [AuthService
	    		// {provide: AuthService, useClass: MockAuthService},
	    		// {provide: Renderer2, useValue: {}},
	    		// {provide: Router, useValue: {}},
	    		// {provide: ElementRef, useValue: {}}
	    	],
	    	// schemas: [NO_ERRORS_SCHEMA]
   		}).compileComponents();

	    service = TestBed.get(AuthService);
	    // let fixture = TestBed.createComponent(HeaderComponent);
	    // hcm = fixture.debugElement.componentInstance;
    });
	// it('should be created', inject([AuthService], (service: AuthService) => {
	it('should create service', () => {
	    expect(service).toBeTruthy();
	});

	it('checks if getToken works', () => {
		localStorage.setItem('token', token);
	    expect(service.getToken()).toBe(token);
	});

	it('checks if Authentication check works', () => {
		// needed response mock from isAuthenticated()
		spyOn(service, 'getToken').and.returnValue(token);
		spyOn(service.http, 'post').and.returnValue(of({status: 200}));
		// spyOn(HttpClientModule, 'post').and.returnValue(123);
		// console.log(service.getToken());
		// spyOn(service.http, 'post').and.returnValue(of({status: 200}));
	    expect(service).toBeTruthy();

	    service.isAuthenticated().then((resp) => {
	    	expect(resp.status).toBe(200);
	    });
	});
});
