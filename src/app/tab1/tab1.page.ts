import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private router: Router) {}

  navigateToTab2() {
    this.router.navigateByUrl('/tabs/tab2'); // Esto navegará a la pestaña 2
  }
}
