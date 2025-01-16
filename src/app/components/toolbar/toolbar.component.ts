import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge';
import { ThemeComponent } from "../theme/theme.component";
import { LanguageComponent } from "../language/language.component";
import { TextComponent } from "../text/text.component";
import { Strings } from '../../utils/strings';
import { Icons } from '../../utils/icons';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from "../back-button/back-button.component";
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, ThemeComponent, LanguageComponent, TextComponent, MatBadgeModule, RouterModule, CommonModule, BackButtonComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  strings = Strings;
  icons = Icons;

  @Input() title: string = this.strings.shotScreen;

  @Input() showBackButton: boolean = false;

  @Input() notification: boolean = true;

  share() {
    navigator.share({
      text: 'Shotscreen'
    });
  }

  back() {
    window.history.back();
  }
}
