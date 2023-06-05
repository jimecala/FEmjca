import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  exp: Experience[] = [];

  /*constructor (private expServ: ExperienceService, private tokenServ: TokenService) {}

  isLogged = false;
  
  */
  constructor(private expServ: ExperienceService) { }

  ngOnInit(): void {
    this.getExperience();
    /* if (this.tokenServ.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    */
  }

  getExperience(): void {
    this.expServ.getExp().subscribe(data => { this.exp = data; });
  }

  deleteExp(id: number) {
    if (id != undefined) {
      this.expServ.deleteExp(id).subscribe(
        data => {
          //alert("Halidad eliminada!!!");
          this.getExperience();
        }, error => {
          //alert("No se pudo eliminar la habilidad!")
          window.location.reload();
        })
    }
  }
}
