import { Component } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  imports: [MatListModule, MatCardModule, CommonModule]
})
export class NotificationComponent {
  messages = [
    { id: '1', title: 'Order confirmed', date: 'Today' },
    { id: '2', title: 'New book added', date: 'Yesterday' }
  ];
}
