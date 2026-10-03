import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { WishlistComponent } from './wishlist.component';

const routes: Routes = [{ path: '', component: WishlistComponent }];

@NgModule({
   imports: [CommonModule, MatCardModule, MatListModule, RouterModule.forChild(routes),WishlistComponent]
})
export class WishlistModule {}
