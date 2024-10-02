import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-language',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {
  language = 'English';

  constructor(private translateService: TranslateService) { }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
}
