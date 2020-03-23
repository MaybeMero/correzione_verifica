import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Drive } from '../drive.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  obs_drive: Observable<Drive[]>;
  drivelist: Drive[];
  selectedCar : Drive;
  constructor( public http: HttpClient) { }

  ngOnInit(): void {
    this.obs_drive=this.http.get<Drive[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi');
    this.obs_drive.subscribe(this.get_driving)
  }
  get_driving =(auto:Drive[]) =>
  {
      this.drivelist=auto;
  }
  conNoleggia(macchina : Drive) :boolean
  {
    console.log(macchina);
   this.selectedCar = macchina;
    return false;
  }
}
