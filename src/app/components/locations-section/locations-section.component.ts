import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Location } from '../../models/data.model';

@Component({
  selector: 'app-locations-section',
  standalone: true,
  imports: [],
  templateUrl: './locations-section.component.html',
  styleUrl: './locations-section.component.sass',
})
export class LocationsSectionComponent {
  locations: Location[] = [];
  constructor(private dataService: DataService) {
  }
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.locations = data.locations
      console.log('locations: ', this.locations);
    })
  }
}
