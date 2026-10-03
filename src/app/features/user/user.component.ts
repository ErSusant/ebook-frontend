import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [MatCardModule, MatListModule, CommonModule]
})
export class UserComponent {
  users$: Observable<User[]>;

  constructor(userService: UserService) {
    this.users$ = userService.getUsers();
  }
}
