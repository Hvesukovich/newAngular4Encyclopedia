import {Component, OnInit} from '@angular/core';
import {ResourcesService} from '../../services/resources.service';

@Component({
    selector: 'app-tabbar',
    templateUrl: './tabbar.component.html',
    styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
    
    constructor(private resourcesService: ResourcesService) {
    }

    ngOnInit() {
    }

    public clickTab(obj) {
        this.resourcesService.getResourcesById(obj);
    }
}
