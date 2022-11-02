import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DeleteElementComponent } from '../../components/delete-element/delete-element.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  flag:Boolean=false;
  // constructor(private alertController: AlertController,
  //             private modalCtrl:ModalController
  //             ) { }

  ngOnInit() {
    }
    message = 'This modal example uses the modalController to present and dismiss modals.';

    constructor(private modalCtrl: ModalController) {}
  
    async openModal() {
      const modal = await this.modalCtrl.create({
        component: DeleteElementComponent,
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === 'confirm') {
        console.log(role,"rrrrroooooooooollllllllleeeee");
        console.log(data,"dddddaaaaaaaatttttaaaa");
        
        this.message = `Hello, ${data}!`;
      }
    }
  }
