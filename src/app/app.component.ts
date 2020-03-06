import { Component } from '@angular/core';
import { DigiResults } from 'src/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public search: string;
  public lvlFilter: string;
  public digimons: Array<DigiResults>;

  newDigimonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

  /**
   * Called when header type selection changes
   */
  newLvlSelected(filter: string): void {
    if (this.lvlFilter !== filter) {
      this.lvlFilter = filter;
    }
  }

 

  /**
   * Called when homepage emits digimons
   */
  exportDigimons(digimons: Array<DigiResults>): void {
    if (this.digimons !== digimons) {
      this.digimons = digimons;
    }
  }
}
