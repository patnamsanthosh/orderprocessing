import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayedOrderTransmissionComponent } from './delayed-order-transmission/delayed-order-transmission.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path: 'order-detail', component: OrderDetailsComponent
  },
  {
    path: 'order-delay', component: DelayedOrderTransmissionComponent
  },
  // { path: '**', component: OrderDetailsComponent },
  // { path: '', component: OrderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
