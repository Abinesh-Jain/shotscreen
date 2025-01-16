import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-picker',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './image-picker.component.html',
  styleUrl: './image-picker.component.scss'
})
export class ImagePickerComponent {

  images: string[] = [];

  @Input() icon?: string;

  @Output() fileSelected = new EventEmitter<string[]>();

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      const files = event.target.files;
      this.images = [];
      let filesRead = 0;
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(e.target.result);
          filesRead++;
          if (filesRead === files.length) {
            this.fileSelected.emit(this.images);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

}
