import {ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {ProjectsComponent} from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('projectsComponent')
  projects: ProjectsComponent;
  title = 'Hasham Rasheed - Full Stack Engineer';

  navigateToProject() {
    this.projects.navigateToProjects();
  }
}
