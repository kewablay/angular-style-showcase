import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Gear } from '../../models/data.model';

@Component({
  selector: 'app-gears-section',
  standalone: true,
  imports: [],
  templateUrl: './gears-section.component.html',
  styleUrl: './gears-section.component.sass',
})
export class GearsSectionComponent {
  gears: Gear[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.gears = data.gears;
      console.log('gears: ', this.gears);
    });
  }
}
