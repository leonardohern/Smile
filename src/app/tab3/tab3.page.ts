import { Component } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
  constructor( public alertCrtl:AlertController){}
  condiciones : true;
  
  verCondicion(){

    console.log(this.condiciones);
  }
  
  async VerAlert1(){

    const alerta = await this.alertCrtl.create({
      header : 'Encuesta Enviada',
      subHeader : 'Muchas gracias',
      message : 'Te esperamos pronto!!',
      buttons : [ 'Aceptar']
    });
      alerta.present();
  }

}