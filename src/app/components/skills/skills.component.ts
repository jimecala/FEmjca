import { Component } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skills: Skills[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.load();
    /* if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
        this.isLogged = false;
      } */
  }

  load(): void {
    this.skillsService.getData().subscribe(data => {
      this.skills = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(
        data => {
          this.load();
        }, error => {
          alert("Error");
          window.location.reload();
        })
    }
  }


}
