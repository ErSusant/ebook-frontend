import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NotificationComponent } from './notification.component';

const routes: Routes = [{ path: '', component: NotificationComponent }];

@NgModule({
   imports: [CommonModule, MatCardModule, MatListModule, RouterModule.forChild(routes),NotificationComponent]
})
export class NotificationModule {}
