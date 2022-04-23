import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(
    private profileService: ProfileService
  ) { }

  experiences: any = [];

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences() {
    this.experiences = this.profileService.getExperiences();
  }

}
