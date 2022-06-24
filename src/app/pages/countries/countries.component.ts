import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartOptions, ChartType, ChartDataset  } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { CountriesService } from 'src/app/_services/countries.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexAxisChartSeries, ApexChart, ApexGrid, ApexNonAxisChartSeries, ApexStates, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  ngUnsubscribe = new Subject<void>();
   _data : string[]= [];
  _data1 : any = [];

  MyArrayType : Array<{data: number[], label: string}> = [];;

   barChartOptions: ChartOptions = {
    responsive: true,
  };
   barChartLabels: NgChartsModule[] = [this._data];
   barChartType: ChartType = 'bar';
   barChartLegend = true;
   barChartPlugins = [];
  
   barChartData: ChartDataset[] = [
    { data: [50], label: 'PHP' },
    { data: [50], label: 'PHP' },
    { data: [50], label: 'PHP' }
  ];

  constructor(private _title: Title,
    private apiService: CountriesService,) { 
      _title.setTitle('Country Master');
   
    }
  ngOnInit(): void {
    this.getCountry();

  }

  getCountry() {
    this.apiService.getCountries().pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
      for (var i in res) {
        this._data.push(res[i].Country);
        this.MyArrayType.push({data: [50], label: res[i].Country})
      }
      console.log(this.MyArrayType)
    }, err => {
      console.log(err);
    }, () => {
      //complete      
    })

    console.log(this._data);
  }
  

   

}
