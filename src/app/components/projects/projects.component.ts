import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('projectsDiv') projectsDiv: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  navigateToProjects() {
    this.projectsDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
