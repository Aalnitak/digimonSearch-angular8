import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DigiServiceService } from 'src/services/digi-service.service';
import { DigiResults } from 'src/interfaces';
@Component({
  selector: 'app-digi-home',
  templateUrl: './digi-home.component.html',
  styleUrls: ['./digi-home.component.scss']
})
export class DigiHomeComponent implements OnInit {
  @Output() exportDigimons = new EventEmitter();
  digiLoaded: boolean;
  digimons: Array<DigiResults>;
  query:string;
  lvlFilter: string;

  @Input() set search(newSearch:string){
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }
  @Input() set levelFilter(lvl: string) {
    if (lvl !== this.levelFilter) {
      this.lvlFilter = lvl;
    }
  }

  constructor(private DigiService: DigiServiceService) { }

  ngOnInit(): void {
    this.digiLoaded = false;
    this.digimons = [];
    this.getDigimons();
  }

  getDigimons():void{
    this.DigiService.getAllDigimon().subscribe(
      (data:DigiResults)=>{
        
        for (let i = 0; i < 100; i++){
          let digi : DigiResults = data[i];
          digi.name = data[i].name;
          digi.lvl = data[i].level;
          digi.img = data[i].img;
          digi.id = data[i].id;
          this.digimons.push(digi);
          if (data[i].id == "100") {
            this.digiLoaded = true;
            this.exportDigimons.emit(this.digimons);
            }
        }

        
        
      }
    )
  }

}
