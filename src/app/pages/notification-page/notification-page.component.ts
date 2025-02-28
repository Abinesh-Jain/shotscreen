import { Component } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { MatListModule } from '@angular/material/list';
import { Strings } from '../../utils/strings';

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [ToolbarComponent, MatListModule],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.scss'
})
export class NotificationPageComponent {
  strings = Strings;
}
