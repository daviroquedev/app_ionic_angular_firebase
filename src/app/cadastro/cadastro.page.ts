import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroPage implements OnInit {
  
  contactField: null | undefined;
  messageField: null | undefined;

  constructor(private alertController: AlertController) {
    
   }

  ngOnInit() {
  }

  async sendForm(f: NgForm) {

    const message = 'Contato: ' + this.contactField +
                    '\nMensagem:' + this.messageField;

    const alert = await this.alertController.create({
      header: 'Alerta!',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Canceled');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Alert Confirmed');
          }
        }
      ]
    });
    await alert.present();
  }

}
