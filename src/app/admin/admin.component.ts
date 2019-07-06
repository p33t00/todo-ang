import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	tss: 'It\'s gettin\' better!' + "🙂";
	ngOnInit() {
		console.log(this.tss);
	 }
}
