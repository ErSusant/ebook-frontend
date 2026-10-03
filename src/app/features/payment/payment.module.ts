import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PaymentComponent } from './payment.component';

const routes: Routes = [{ path: '', component: PaymentComponent }];

@NgModule({
   imports: [CommonModule, MatCardModule, MatListModule, RouterModule.forChild(routes),PaymentComponent]
})
export class PaymentModule {}
