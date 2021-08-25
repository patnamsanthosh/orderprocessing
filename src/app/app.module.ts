import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ZavacorOrderComponent } from './shared/dialogs/zavacor-order/zavacor-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { OmniStatusDetailsComponent } from './shared/dialogs/omni-status-details/omni-status-details.component';
import { ExactaStatusComponent } from './shared/dialogs/exacta-status/exacta-status.component';
import { EbsStatusComponent } from './shared/dialogs/ebs-status/ebs-status.component';
import { DelayedOrderTransmissionComponent } from './delayed-order-transmission/delayed-order-transmission.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { HeaderComponent } from './shared/menu/header/header.component';
import { SideMenuComponent } from './shared/menu/side-menu/side-menu.component';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { DelayReasonComponent } from './shared/dialogs/delay-reason/delay-reason.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    ZavacorOrderComponent,
    OmniStatusDetailsComponent,
    ExactaStatusComponent,
    EbsStatusComponent,
    DelayedOrderTransmissionComponent,
    HeaderComponent,
    SideMenuComponent,
    DelayReasonComponent
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
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
