import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private profileService: ProfileService
  ) { }

  projects: any = [];

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.profileService.getProjects();
  }

}
