import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Device } from '../../models/device.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  @Input() devices: Device[] = [];

  @Input() deviceSpecs: any[] = [];

  @Output() deviceSelected = new EventEmitter<Device>();

  valueChanged(event: any) {
    this.deviceSelected.emit(event);
  }

  onImageClick(deviceSpec: any) {
    console.log(deviceSpec);
  }
  constructor(private http: HttpClient) { }

  downloadImage(imageUrl: string, fileName: string) {
    this.http.get(imageUrl, { responseType: 'blob' }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.svg`; // Dynamic filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

}
