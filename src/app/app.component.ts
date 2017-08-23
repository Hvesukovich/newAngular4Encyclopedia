import {Component} from '@angular/core';
import {ResourcesService} from './services/resources.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private resourcesService: ResourcesService) {
    }
}
