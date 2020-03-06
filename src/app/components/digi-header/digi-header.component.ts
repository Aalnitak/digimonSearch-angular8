import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DigiResults } from 'src/interfaces';

@Component({
  selector: 'app-digi-header',
  templateUrl: './digi-header.component.html',
  styleUrls: ['./digi-header.component.scss']
})
export class DigiHeaderComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  @Output() lvlSelected = new EventEmitter();
  @Output() abilitiesSelected = new EventEmitter();


  levels: Array<string>;
  digimonList: Array<DigiResults>;
  search: string;
  currentLevel: string;


  @Input() set digimons(digimons: DigiResults[]){

    if (digimons !== this.digimonList){
      this.digimonList = digimons;

      this.digimonList.forEach(digimon => {
        this.setDigimonLevels(digimon);
      })

    }
  }

  constructor() { }

  ngOnInit(): void {

    this.levels = [];
  }
   /**
   * Called when a search field is updated
   */
  searchEvent(search): void {
    // verifica si la busqueda esta limpia
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }
  
  onLevelSelected(): void {
    if (this.currentLevel) {
      this.lvlSelected.emit(this.currentLevel);
    } else {
      this.lvlSelected.emit('');
    }
  }
  setDigimonLevels(digimon: DigiResults): void {

    if (digimon) {
      const levels = digimon.lvl;

      if(!this.levels.includes(levels)){
        this.levels.push(levels);
        this.levels.sort();
      }
    }
  }
  

}
