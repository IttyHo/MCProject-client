import { Component,  OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  
ngOnInit() {}
  
  items = [
    { id: 1, name: "אפשרות א" },
    { id: 2, name: "אפשרות ב" },
    { id: 3, name: "אפשרות ג" }
  ];

  @ViewChild(MatMenuTrigger,{static: false})
  contextMenu: MatMenuTrigger;

  onContextMenu(event: MouseEvent, item: Item) {
    event.preventDefault();
    this.contextMenu.openMenu();
  }

  onContextMenuUpdate(item: Item) {
    alert(`Click on Update `);
  }

  onContextMenuDelete(item: Item) {
    alert(`Click on Delete for `);
  }
}

export interface Item {
  id: number;
  name: string;
}
 