import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CategoryComponent } from './category.component';

const routes: Routes = [{ path: '', component: CategoryComponent }];

@NgModule({
   imports: [CommonModule, MatCardModule, MatChipsModule, RouterModule.forChild(routes),CategoryComponent]
})
export class CategoryModule {}
