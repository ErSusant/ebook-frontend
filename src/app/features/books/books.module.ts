import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [{ path: '', component: BookListComponent }];

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, RouterModule.forChild(routes), BookListComponent]
})
export class BooksModule {}
