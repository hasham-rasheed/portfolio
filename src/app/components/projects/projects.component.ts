import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('projectsDiv') projectsDiv: ElementRef;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  navigateToProjects() {
    this.projectsDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  redirectToJava() {
      this.document.location.href = 'https://github.com/hasham-rasheed/co2';
  }
}
