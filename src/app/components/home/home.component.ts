import { Component, OnInit } from '@angular/core';
import {HoroscropeService} from '../../service/horoscrope.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  personalityReports: any[];
  spiritualLesson: any;
  keyQuality: any;
  errorMsg = {'status': '', 'msg': ''};
  constructor(private horoscropeService: HoroscropeService) {
  }
  ngOnInit() {
  }

  onSubmit() {
    this.horoscropeService.getPersonalityReport(this.model).subscribe(
      data => {
        this.errorMsg.msg = '';
        this.personalityReports = data.report;
        this.spiritualLesson = data.spiritual_lesson;
        this.keyQuality = data.key_quality;
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
