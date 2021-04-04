import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  onClick(){
    this.presentActionSheet();
  }

  ngOnInit() {
  }

  /**
   * Donde dice cssClass, podemos hacer una clase (justamente) en css y editarlo como se nos cante
   * en role, que en el caso de delete dice destructive, es para q aparezcla color rojo, PERO en MD o sea android
   * no funciona, y en la pagina de ionic no aparece que clase es la que se tiene q modificar, pero inspeccionando elemento
   * en el explorador, copie y pegue la clase -> edite el global.scss
   *
   * backdropDismiss es para evitar que al tocar otra parte de la pantalla se minimize el menu
   */
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      backdropDismiss: false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
