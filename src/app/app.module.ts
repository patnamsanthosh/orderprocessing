import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsComponent } from './order-details/order-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ZavacorOrderComponent } from './shared/dialogs/zavacor-order/zavacor-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { OmniStatusDetailsComponent } from './shared/dialogs/omni-status-details/omni-status-details.component';
import { ExactaStatusComponent } from './shared/dialogs/exacta-status/exacta-status.component';
import { EbsStatusComponent } from './shared/dialogs/ebs-status/ebs-status.component';
import { DelayedOrderTransmissionComponent } from './delayed-order-transmission/delayed-order-transmission.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    ZavacorOrderComponent,
    OmniStatusDetailsComponent,
    ExactaStatusComponent,
    EbsStatusComponent,
    DelayedOrderTransmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
