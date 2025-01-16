import { Component } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.scss'
})
export class NotificationPageComponent {

}
