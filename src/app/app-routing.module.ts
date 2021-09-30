import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayedOrderTransmissionComponent } from './delayed-order-transmission/delayed-order-transmission.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { OpenOrderComponent } from './open-order/open-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path: 'order-detail', component: OrderDetailsComponent
  },
  {
    path: 'menu-management', component: MenuManagementComponent
  },
  {
    path: 'order-delay', component: DelayedOrderTransmissionComponent
  },{
    path: 'open-order', component: OpenOrderComponent
  },
  // { path: '**', component: OrderDetailsComponent },
   { path: '', component: OrderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
