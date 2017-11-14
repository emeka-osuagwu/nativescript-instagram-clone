import { Page } from "ui/page" 
import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: './pages/login.html',
    styleUrls: ['./assets/css/login.css']
})

export class LoginComponent {


	constructor
	(
		private page: Page
	)
	{
		this.page.actionBarHidden = true;
	}

}
