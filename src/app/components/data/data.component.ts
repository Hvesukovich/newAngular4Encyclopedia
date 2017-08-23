import {Component, OnInit} from '@angular/core';
import {ResourcesService} from '../../services/resources.service';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

    constructor(private resourcesService:ResourcesService) {
    }

    ngOnInit() {
    }

    public filteredFields(arr) {
        return arr.filter((item) => {
            return item.showInTable;
        });
    }

    public filteredFieldsSearch(selectedResurs, str) {
        const rows = selectedResurs.obj.results;
        let filteredRows = [];
        filteredRows = rows.filter((row) => {
            for (let key in row) {
                if (row[key] && typeof row[key] === 'string') {
                    if (row[key].toUpperCase().indexOf(str.toUpperCase()) !== -1) {
                        return true;
                    }
                }
            }
        });

        return filteredRows;

        // return arr.filter((item) => {
        //     if( item.indexOf(this.resourcesService.str)) {
        //         return item.name;
        //     }
        // });

        //  var qwe = function() {};
        // const asd = () => {};
        // const asd = (qwe) => {return true;};
        // const asd = qwe => true;

    }

    public data(list, currentPage) {
        let arr = [];
        let length = list.length;
        let start = (currentPage - 1) * this.resourcesService.col;
        let end;
        if (start + this.resourcesService.col > length) {
            end = start + (length - start);
        } else {
            end = start + this.resourcesService.col;
        }
        for (let i = 0; start !== end; i++, start++) {
            arr[i] = list[start];
        }
        return arr;
    }

    public detailsFields(data): Promise<string> {
        return new Promise((resolve, reject) => {
            if (typeof data === 'object') {
                resolve(data);
            } else {
                resolve(data);
            }
        });
    }
}
