import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  OffersMadeprogressStartValue = 0;
  offersMadecurrent: number = 76;
  offersmademax: number = 100;
  dealsclosedcurrent: number = 55;
  dealsclosedmax: number = 100;
  stroke: number = 15;
  radius: number = 75;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  duration: number = 800;
  gradient: boolean = false;
  realCurrent: number = 0;
  leadsClosedCurrent: number = 45;
  leadsClosedmax: number = 100;
  leadsList1 = [
    {firstName:'adas',lastName:'sdsdf',industry:'sdf',address:{
      state:'AP'},mobile:'9283476926348',email:'sdf@getMaxListeners.com',
      leadStatus:'Y',createdDate:new Date(),owner:'Satish'
    },
    {firstName:'adas',lastName:'sdsdf',industry:'sdf',address:{
      state:'AP'},mobile:'9283476926348',email:'sdf@getMaxListeners.com',
      leadStatus:'Y',createdDate:new Date(),owner:'Satish'
    },
    {firstName:'adas',lastName:'sdsdf',industry:'sdf',address:{
      state:'AP'},mobile:'9283476926348',email:'sdf@getMaxListeners.com',
      leadStatus:'Y',createdDate:new Date(),owner:'Satish'
    },
  ]
  constructor() {}

  ngOnInit() {  
  }

  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '55%',
      bottom: isSemi ? '5%' : 'auto',
      left: '48%',
      transform,
      'font-size': this.radius / 3.5 + 'px',
    };
  }

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
}
