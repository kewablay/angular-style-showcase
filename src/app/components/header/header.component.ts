import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  currentTheme: 'light' | 'dark' = 'dark';
  constructor(private themeService: ThemeService) {}
  toggleTheme() {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  ngOnInit() {
    this.currentTheme = this.themeService.getCurrentTheme();
  }
}
