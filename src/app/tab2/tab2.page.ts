import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private menu: MenuController) { }
  async navigateToTab3() {
    // Deshabilita el menú del tab1 antes de navegar
    await this.menu.enable(false, 'menu1');
  
    // Navega al tab2
    // ...
  
    // Habilita el menú del tab2 después de navegar
    await this.menu.enable(true, 'menu2');
  }
  openMenu() {
    this.menu.open('fisrt');
  }
  

}
