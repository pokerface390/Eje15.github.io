import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: './componente16.html',
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuOverviewExample {}
