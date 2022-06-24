import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataTableDirective } from 'angular-datatables';
import { CountriesService } from 'src/app/_services/countries.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  //must be top
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective | any;
  ngUnsubscribe = new Subject<void>();

  _data: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isDtInitialized: boolean = false;
  _adminLoginId = "";
  
  constructor(private _title: Title,
    private apiService: CountriesService,
    private ngxLoderSrc: NgxUiLoaderService) { 
      _title.setTitle('Summary Master');
    }

  ngOnInit(): void {
    this.SetData();
  }

  SetData() {
    this.dtOptions = {
      pageLength: 10,
      lengthMenu: [10, 20, 50],
      processing: true
    };
    this.getSummary();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(0);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getSummary() {
    this.ngxLoderSrc.startLoader('ldr');
    this.apiService.getSummary().pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
      this._data = res.Countries;
      this.ngxLoderSrc.stopLoader('ldr');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next(0);
      });
    }, err => {
      console.log(err);
      this.ngxLoderSrc.stopLoader('ldr');
    }, () => {
      //complete      
      this.ngxLoderSrc.stopLoader('ldr');
    })
  }

}
