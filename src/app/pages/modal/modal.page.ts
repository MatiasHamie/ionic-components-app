import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'Fernando',
        pais:'Costa Rica'
      }
    });
    return await modal.present();

    // Hay dos tipos de metodos para cerrar el modal
    // onDidDismiss y onWillDismiss, la diferencia es que el ultimo
    // se ejecuta cuando se clickea algo q cierra el modal, antes de la animacion de cierre
    const {data} = await modal.onDidDismiss();
    console.log('OnDidDismissed')
  }

}
