import { Component } from '@angular/core';
import { IParticlesProps, NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { Container } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.scss'
})
export class ParticlesComponent {
  id = "tsparticles";

  particlesOptions: IParticlesProps = { "fullScreen": { "zIndex": 1 }, "particles": { "color": { "value": ["#FFFFFF", "#FFd700"] }, "move": { "direction": "bottom", "enable": true, "outModes": { "default": "out" }, "size": true, "speed": { "min": 1, "max": 3 } }, "number": { "value": 500, "density": { "enable": true, "height": 800 } }, "opacity": { "value": 1, "animation": { "enable": false, "startValue": "max", "destroy": "min", "speed": 0.3, "sync": true } }, "rotate": { "value": { "min": 0, "max": 360 }, "direction": "random", "move": true, "animation": { "enable": true, "speed": 60 } }, "tilt": { "direction": "random", "enable": true, "move": true, "value": { "min": 0, "max": 360 }, "animation": { "enable": true, "speed": 60 } }, "shape": { "type": ["circle", "square"], "options": {} }, "size": { "value": { "min": 2, "max": 4 } }, "roll": { "darken": { "enable": true, "value": 30 }, "enlighten": { "enable": true, "value": 30 }, "enable": true, "speed": { "min": 15, "max": 25 } }, "wobble": { "distance": 30, "enable": true, "move": true, "speed": { "min": -15, "max": 15 } } } };

  constructor(private ngParticlesService: NgParticlesService) { }


  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadFull(engine);
    })
  }
  particlesLoaded(container: Container): void {
  }
}
