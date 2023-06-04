import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent {
  employer: string = '';
  position: string = '';
  startDate: Date = new Date('2023-01-01');
  endDate: Date = new Date('2023-01-01');


  constructor(private expServ: ExperienceService, private router: Router) { }

  ngOnInit(): void {

  }

  onNewExp(event: Event): void {
    const exp = new Experience(this.employer, this.position, this.startDate, this.endDate);
    this.expServ.newExp(exp).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }

}



