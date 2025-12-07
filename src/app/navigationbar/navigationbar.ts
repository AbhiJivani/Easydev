import { Component } from '@angular/core';
import { DataServices } from '../services/data-services';
import { toolCategoriesInterFace } from '../interfaces/tool-categories-interface';

@Component({
  selector: 'app-navigationbar',
  imports: [],
  templateUrl: './navigationbar.html',
  styleUrl: './navigationbar.scss',
})
export class Navigationbar {
  toolCategoriesData:toolCategoriesInterFace[]=[];
 constructor(
  private _dataServices:DataServices
 ){}
 ngOnInit(){
  this.toolCategoriesData = this._dataServices.toolCategoriesData;
  console.log(this.toolCategoriesData);
  
 }
}
