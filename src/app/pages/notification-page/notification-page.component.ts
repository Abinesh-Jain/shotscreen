import { Component } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [ToolbarComponent, MatListModule],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.scss'
})
export class NotificationPageComponent {

}
