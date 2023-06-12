import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent {
  form: FormGroup;
  institution = '';
  endDate = new Date('2023-01-01');

  constructor(private formBuilder: FormBuilder, private eduServ: EducationService) {
    this.form = this.formBuilder.group(
      {
        institution: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        endDate: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      }
    )

  }

  ngOnInit(): void {
  }

  //Declaraciones para validaciones
  get Institution() {
    return this.form.get('institution');
  }

  get EndDate() {
    return this.form.get('endDate');
  }

  //Validaciones
  get InstitutionValid() {
    return this.Institution?.touched && !this.Institution.valid;
  }

  get EndDateValid() {
    return this.EndDate?.touched && !this.EndDate.valid;
  }

  onNew(): void {
    const skl = new Education(this.institution, this.endDate);
    this.eduServ.save(skl).subscribe(data => {
      alert("Educación añadida");
      window.location.reload();
    }, error => {
      alert("Error");
      this.form.reset();
    });
  }

  clean(): void {
    this.form.reset();
  }

}
