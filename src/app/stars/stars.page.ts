import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-stars',
  templateUrl: 'stars.page.html',
  styleUrls: ['stars.page.scss']
})
export class StarsPage {
  stars: any[] = [];

  constructor(public alertController: AlertController) {}

    ionViewDidEnter() {
        this.stars = [
            {
            name: 'CSS Star',
                template: 'css',
        },
            {
                name: 'SVG Star',
                template: 'svg',
            },
            {
                name: 'Ionicon Star',
                template: 'ionicon',
            },
            {
                name: 'Symbol Star',
                template: 'symbol',
            },
        ];

        setTimeout(()=>{
            this.presentAlert();
        }, 1000);
        
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['OK']
        });

        await alert.present();
    }



}
