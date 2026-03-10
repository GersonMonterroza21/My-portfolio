import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

interface Project {
  title: string;
  description: string;
  category: string;
  techs: string[];
  emoji: string;
  github: string;
  demo: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class ProjectsComponent implements OnInit {
  filters = ['ALL', 'FRONTEND', 'BACKEND', 'FULLSTACK'];
  activeFilter = 'ALL';

  projects: Project[] = [
    {
      title: 'Portfolio Personal',
      description: 'Portafolio moderno con Ionic + Angular, animaciones y dark mode.',
      category: 'FRONTEND',
      techs: ['Angular', 'Ionic', 'SCSS'],
      emoji: '🚀',
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce App',
      description: 'Tienda online con carrito de compras y pasarela de pagos.',
      category: 'FULLSTACK',
      techs: ['Angular', 'Node.js', 'MongoDB'],
      emoji: '🛒',
      github: '#',
      demo: '#'
    },
    {
      title: 'REST API',
      description: 'API RESTful con autenticación JWT y documentación Swagger.',
      category: 'BACKEND',
      techs: ['Node.js', 'Express', 'JWT'],
      emoji: '⚙️',
      github: '#',
      demo: '#'
    },
    {
      title: 'Dashboard Admin',
      description: 'Panel de administración con gráficas y gestión de usuarios.',
      category: 'FRONTEND',
      techs: ['Angular', 'TypeScript', 'Charts'],
      emoji: '📊',
      github: '#',
      demo: '#'
    },
  ];

  filteredProjects: Project[] = [];

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filteredProjects = filter === 'ALL'
      ? this.projects
      : this.projects.filter(p => p.category === filter);
  }
}
