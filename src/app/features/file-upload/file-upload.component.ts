import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-file-upload',
  standalone: true,
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  imports: [MatCardModule,CommonModule]
})
export class FileUploadComponent {
  selectedFileName = '';

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFileName = input.files[0].name;
    }
  }
}
