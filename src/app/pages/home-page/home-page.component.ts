import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ParticlesComponent } from "../../components/particles/particles.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, RouterModule, ParticlesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
