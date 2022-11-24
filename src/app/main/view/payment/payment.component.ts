import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  ngOnInit() { }


  constructor() { 
	document.onclick = this.hideMenu;
	document.oncontextmenu = this.rightClick;
	}
 hideMenu() {
		document.getElementById("contextMenu")
				.style.display = "none"
	}

	rightClick(e) {
		e.preventDefault();

		if (document.getElementById("contextMenu")
				.style.display == "block")
			this.hideMenu();
		else{
			var menu = document.getElementById("contextMenu")

			menu.style.display = 'block';
			menu.style.left = e.pageX + "px";
			menu.style.top = e.pageY + "px";
		}
	}

}
