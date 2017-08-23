import {Injectable} from '@angular/core';
// import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class RequestsService {

    // constructor(private http: Http) {}
    constructor(private http: HttpClient) {}
    
    public getPeopleJson() {
        return this.http.get('http://localhost:4200/assets/json/resources-fields.json');
    }

    public getResourcesExternal() : Observable<any> {
        return this.http.get('https://swapi.co/api/?format=json');
    }

    public getResById(link) {
        return this.http.get(link);
    }

}
