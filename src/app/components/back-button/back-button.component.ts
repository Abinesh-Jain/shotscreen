import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { Icons } from '../../utils/icons';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent implements OnInit {

  icons = Icons;

  icon?: string;

  ngOnInit(): void {
    let platform = this.getDeviceType();
    switch (platform) {
      case 'iOS': {
        this.icon = this.icons.arrowBackIos;
        break;
      }
      default: {
        this.icon = this.icons.arrowBack;
        break;
      }
    }
  }

  getDeviceType(): string {
    const userAgent = navigator.userAgent;

    // Check if the device is Android
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
    // Check if the device is iOS (iPhone, iPad, iPod)
    else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      return 'iOS';
    }
    // Check if the device is Windows
    else if (/windows/i.test(userAgent)) {
      return 'Windows';
    }
    // Default case for unknown devices
    else {
      return 'Unknown';
    }
  }

  back() {
    if (window.history.length > 1) window.history.back();
  }
}
