import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  dataPag = [];
  civ =  [];
  totalCivs = 32;
  totalPag = 10;
  pagina = 0;
  showDetalle = false;

  constructor(private dataService: GetDataService) { }

  ngOnInit(): void {
   this.loadData(); 
  }

  async loadData() {
    this.data = await this.dataService.getData();
    this.paginationData();
  }

  async showCivilization(id: number) {
    this.showDetalle = true;
    this.civ = this.data.filter(e => e.id == id);
    console.log(this.civ);
    
  }

  private paginationData() {
    const offset = this.pagina * 10;
    const end = this.pagina * 10 + 10;
    return this.dataPag = this.data.slice(offset , end);
  }

  siguiente() {
    this.pagina++;
    this.paginationData();
  }

  anterior() {
    this.pagina--;
    this.paginationData();
  }

  regresar() {
    this.showDetalle = false;

  }

}
