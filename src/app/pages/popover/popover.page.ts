import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  @Input() item: number;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  // El backdropDismiss: false es para q si o si tenga q seleccionar algo para cerrarlo
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });
    await popover.present();

    const {data} = await popover.onWillDismiss();

    console.log(data)
  }

}
