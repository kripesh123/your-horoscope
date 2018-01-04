import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HoroscropeService {

  userId = '601586';
  apiKey = '22f3a8fa22a4ce2ee95d1f74b285ab2c';
  constructor(private http:Http) { }

  getPersonalityReport(model:any){
    let tokenUrl1 = "https://json.astrologyapi.com/v1/personality_report/tropical" ;
    let headers1 = new Headers({'authorization': 'Basic ' + btoa(this.userId+':'+this.apiKey),'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1})
          .map(res => res.json());
  }

getGeneralSignReport(model:any){
    let tokenUrl1 = "https://json.astrologyapi.com/v1/general_sign_report/tropical/:planetName" ;
    let headers1 = new Headers({'authorization': 'Basic ' + btoa(this.userId+':'+this.apiKey),'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1})
          .map(res => res.json());
  }

getGeneralAscendantReport(model:any){
    let tokenUrl1 = "https://json.astrologyapi.com/v1/general_ascendant_report/tropical" ;
    let headers1 = new Headers({'authorization': 'Basic ' + btoa(this.userId+':'+this.apiKey),'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1})
          .map(res => res.json());
}

}
