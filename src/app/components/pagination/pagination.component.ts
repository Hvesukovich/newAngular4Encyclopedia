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

    public updateCurrentPage(data) {
        if (data === 'next') {
            if (this.resourcesService.currentPage < this.resourcesService.resActive.obj.results.length / this.resourcesService.col) {
                this.resourcesService.currentPage += 1;
            }
        } else if (data === 'prev') {
            if (this.resourcesService.currentPage > 1) {
                this.resourcesService.currentPage -= 1;
            }
        } else {
            this.resourcesService.currentPage = data;
        }
    }

    public pagesArr(resurs, rows, col) {
        let arr = [];
        let comparison = rows/col;
        for (let i = 0; i < comparison; i++) {
            arr[i] =  i + 1;
        }
        return arr;
    }

}
