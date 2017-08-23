import {Component, OnInit} from '@angular/core';
import {ResourcesService} from '../../services/resources.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private resourcesService: ResourcesService) {}

    ngOnInit() {
    }
}
