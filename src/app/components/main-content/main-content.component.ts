import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { GearsSectionComponent } from "../gears-section/gears-section.component";
import { LocationsSectionComponent } from "../locations-section/locations-section.component";
import { JoinUsSectionComponent } from "../join-us-section/join-us-section.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FooterComponent, HeroSectionComponent, GearsSectionComponent, LocationsSectionComponent, JoinUsSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.sass'
})
export class MainContentComponent {

}
