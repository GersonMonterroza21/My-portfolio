import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  skills = [
    { name: 'Angular', level: 85, icon: '🅰️', animated: false },
    { name: 'Ionic', level: 80, icon: '⚡', animated: false },
    { name: 'TypeScript', level: 85, icon: '📘', animated: false },
    { name: 'HTML & CSS', level: 90, icon: '🎨', animated: false },
    { name: 'Node.js', level: 75, icon: '🟢', animated: false },
    { name: 'Git & GitHub', level: 80, icon: '🐙', animated: false },
  ];

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.skills = this.skills.map(s => ({ ...s, animated: true }));
    }, 300);
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#skills .fade-up');
    this.animationService.observe(elements);
  }

  ngOnDestroy() {
    this.animationService.disconnect();
  }
}