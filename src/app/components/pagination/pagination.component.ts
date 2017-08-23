import {Component, OnInit} from '@angular/core';
import {ResourcesService} from '../../services/resources.service';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    public math;
    constructor(private resourcesService:ResourcesService) {
        this.math = Math;
    }

    ngOnInit() {
    }

    public updateCurrentPage(i) {
        this.resourcesService.currentPage += i;
    }

}
