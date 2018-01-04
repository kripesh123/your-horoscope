import { Component, OnInit } from '@angular/core';
import {HoroscropeService} from '../../service/horoscrope.service';
@Component({
  selector: 'app-general-ascendant',
  templateUrl: './general-ascendant.component.html',
  styleUrls: ['./general-ascendant.component.css']
})
export class GeneralAscendantComponent implements OnInit {
model = {
    'day': 0,
    'month': 0,
    'year': 0,
    'hour': 0,
    'min': 0,
    'lat': 27.70169,
    'lon': 85.3206,
    'tzone': 5.75
  };
  generalAscendantReports: any[];
  ascendant: any;
  
  errorMsg = {'status': '', 'msg': ''};
  constructor(private horoscropeService: HoroscropeService) {

   }

  ngOnInit() {
  }
onSubmit() {
    this.horoscropeService.getGeneralAscendantReport(this.model).subscribe(
      data => {
        this.errorMsg.msg = '';
        this.generalAscendantReports = data.report;
        this.ascendant = data.ascendant;
        
      },
      error => {
        if(error.status === 500) {
          this.errorMsg.msg = 'Internal Server Error';
        }else{
          this.errorMsg = JSON.parse(JSON.parse(JSON.stringify(error._body)));
        }
      }
    );
  }
}
