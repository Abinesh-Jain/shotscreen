import { Component } from '@angular/core';
import { ImagePickerComponent } from "../../components/image-picker/image-picker.component";
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { ImageComponent } from "../../components/image/image.component";
import { Icons } from '../../utils/icons';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ImagePickerComponent, ToolbarComponent, CommonModule, ImageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  icons = Icons;

  images: string[] = [];

  imagesSelected(images: string[]) {
    this.images.push(...images)
  }
}
