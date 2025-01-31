import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { Icons } from '../../utils/icons';
import { DragAndDropComponent } from "../../components/drag-and-drop/drag-and-drop.component";
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ToolbarComponent, CommonModule, DragAndDropComponent, MatSidenavModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  icons = Icons;

  @ViewChild('drawer') drawer!: any;

  toggleDrawerFunc: () => void;

  constructor() {
    this.toggleDrawerFunc = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

}
