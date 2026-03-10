import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'Angular', level: 85, icon: '🅰️', animated: false },
    { name: 'Ionic', level: 80, icon: '⚡', animated: false },
    { name: 'TypeScript', level: 85, icon: '📘', animated: false },
    { name: 'HTML & CSS', level: 90, icon: '🎨', animated: false },
    { name: 'Node.js', level: 75, icon: '🟢', animated: false },
    { name: 'Git & GitHub', level: 80, icon: '🐙', animated: false },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.skills = this.skills.map(s => ({ ...s, animated: true }));
    }, 300);
  }
}