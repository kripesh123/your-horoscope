import { Component, OnInit } from '@angular/core';
import { HoroscropeService } from '../../service/horoscrope.service';

@Component({
  selector: 'app-general-sign',
  templateUrl: './general-sign.component.html',
  styleUrls: ['./general-sign.component.css']
})
export class GeneralSignComponent implements OnInit {

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
  extPlanetNames:any[] = ["Sun", "Moon","Mars","Mercury","Jupiter","Venus","Saturn",
                  "Rahu","Ketu","Uranus","Ascendant"];
  planetName: any;
  signName:any;
  errorMsg = { 'status': '', 'msg': '' };
  pName:string;
  constructor(private horoscropeService: HoroscropeService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.horoscropeService.getGeneralSignReport(this.model, this.pName).subscribe(
      data => {
        this.errorMsg.msg = '';
        this.planetName = data.planet_name;
        this.signName = data.sign_name;
      },
      error => {
        if (error.status === 500) {
          this.errorMsg.msg = 'Internal Server Error';
        } else {
          this.errorMsg = JSON.parse(JSON.parse(JSON.stringify(error._body)));
        }
      }
    );
  }

}
