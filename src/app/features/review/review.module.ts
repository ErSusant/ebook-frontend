import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ReviewComponent } from './review.component';

const routes: Routes = [{ path: '', component: ReviewComponent }];

@NgModule({
   imports: [CommonModule, MatCardModule, MatListModule, RouterModule.forChild(routes),ReviewComponent]
})
export class ReviewModule {}
