import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { ThemeComponent } from "../theme/theme.component";
import { LanguageComponent } from "../language/language.component";
import { TextComponent } from "../text/text.component";
import { Strings } from '../../utils/strings';
import { Icons } from '../../utils/icons';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, ThemeComponent, LanguageComponent, TextComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  strings = Strings;
  icons = Icons;

  share() {
    navigator.share({
      text: 'Shotscreen'
    });
  }
}
