import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Robin'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    //Tengo q mover de forma manual el item dentro del array,
    // ya que graficamente veo q el drag and drop funciona  ylo mueve, pero
    // realmente no se esta alterando el array y yo quiero que si se altere

    const itemMover = this.personajes.splice(event.detail.from, 1)[0]; // saco el elemento del array

    this.personajes.splice(event.detail.to, 0, itemMover) // lo pongo en la nueva posicion
    event.detail.complete();

    console.log(this.personajes)
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}
