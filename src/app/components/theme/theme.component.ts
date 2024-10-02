import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent implements OnInit {
  ngOnInit(): void {
    let theme = localStorage.getItem('theme');
    if (theme) {
      switch (theme) {
        case 'light':
          this.setLightTheme();
          break;
        case 'dark':
          this.setDarkTheme();
          break;
        default:
          break;
      }
    }

  }

  switchTheme(isDark?: boolean) {
    switch (isDark) {
      case true:
        this.setDarkTheme();
        break;
      case false:
        this.setLightTheme();
        break;
      default:
        break;
    }

  }

  setLightTheme() {
    document.body.classList.remove('mat-app-background', 'darkMode');
    localStorage.setItem('theme', 'light');
  }

  setDarkTheme() {
    document.body.classList.add('mat-app-background', 'darkMode');
    localStorage.setItem('theme', 'dark');
  }

  changeTheme() {
    document.body.classList.toggle('mat-app-background');
    document.body.classList.toggle('darkMode');
  }
}
