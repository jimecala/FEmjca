import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {
  exp: Experience[] = [];

  constructor(private expServ: ExperienceService) { }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience(): void {
    this.expServ.getData().subscribe(data => { this.exp = data; });
  }
}
