import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { OrderComponent } from './order.component';

const routes: Routes = [{ path: '', component: OrderComponent }];

@NgModule({
   imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, RouterModule.forChild(routes),OrderComponent]
})
export class OrderModule {}
