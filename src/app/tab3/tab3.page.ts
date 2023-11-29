import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Item {
  text: string;
  // puedes agregar más propiedades aquí si tu objeto 'item' las tiene
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  items = [
    { text: 'Matemática' },
    { text: 'Física' },
    { text: 'Química' },
    { text: 'Biología' },
    { text: 'Historia' },
    { text: 'Lengua y Literatura' },
    { text: 'Inglés' },
    { text: 'Asociacionismo' },
    { text: 'Educación Física' },
    { text: 'Emprendimiento y Gestión' },
    { text: 'Mod. Programación Móvil' },
    { text: 'Mod. Programación y Base de Datos' },
    { text: 'Mod. Sistemas Operativos' },
    { text: 'Mod. Soporte Técnico' },
    { text: 'Religión' },

  ];
  constructor(private menu: MenuController) { }
 
  async navigateToTab2() {
    // Deshabilita el menú del tab1 antes de navegar
    await this.menu.enable(false, 'menu1');
  
    // Navega al tab2
    // ...
  
    // Habilita el menú del tab2 después de navegar
    await this.menu.enable(true, 'menu2');
  }
  onButtonClick(item: Item) {
    console.log('Botón clickeado para el item:', item);
    // Aquí puedes agregar la lógica que quieras ejecutar cuando se haga clic en el botón
  }
}
