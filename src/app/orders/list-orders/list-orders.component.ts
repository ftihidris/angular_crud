import { Component } from '@angular/core';
import { OrdersModule } from '../orders.module';

@Component({
  selector: 'app-list-orders',
  imports: [
    OrdersModule
  ],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.scss'
})
export class ListOrdersComponent {

}
