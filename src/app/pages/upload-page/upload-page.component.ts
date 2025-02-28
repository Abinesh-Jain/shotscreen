import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { Icons } from '../../utils/icons';
import { DragAndDropComponent } from "../../components/drag-and-drop/drag-and-drop.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppleService } from '../../services/apple-service/apple.service';
import { SnackbarService } from '../../services/snackbar-service/snackbar.service';
import { DrawerComponent } from "../../components/drawer/drawer.component";
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [ToolbarComponent, DragAndDropComponent, MatSidenavModule, CommonModule, DrawerComponent],
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.scss'
})
export class UploadPageComponent implements OnInit {
  icons = Icons;
  devices: Device[] = [];

  deviceSpecs: any[] = [];

  @ViewChild('drawer') drawer!: any;

  toggleDrawerFunc: () => void;

  constructor(private appleService: AppleService, private snackbarService: SnackbarService) {
    this.toggleDrawerFunc = this.toggleDrawer.bind(this);
  }

  ngOnInit(): void {
    this.appleService.getAppleDevices().subscribe((data) => {
      this.snackbarService.openSnackBar(data.message);
      this.devices = data.data ?? [];
    });
  }

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  deviceSelected(device: Device) {
    this.appleService.getAppleDeiveSpecs(device.selector).subscribe((data) => {
      this.snackbarService.openSnackBar(data.message);
      this.deviceSpecs = data.data ?? [];
    });
  }
}
