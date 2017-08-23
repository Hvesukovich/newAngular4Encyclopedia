import {Injectable} from '@angular/core';
import {RequestsService} from "./requests.service";

interface IResource {
    name: string;
    link: string;
    obj: {}[];
}

@Injectable()
export class ResourcesService {
    public str: string = '';
    public resources: IResource[] = [];
    public resActive: any = null;
    public currentPage: number;
    public col: number = 4;
    public config: any = {};


    constructor(private requestsService: RequestsService) {
        this.getResources();
        this.getPeopleJson();
    }

    private getPeopleJson() {
        this.requestsService.getPeopleJson().subscribe((data: any) => {
            this.config = data;
        });
    }

    public getResources() {
        if (!this.resources || this.resources !== []) {
            this.requestsService.getResourcesExternal()
                .subscribe((data: any)=> {
                    for (let name in data) {
                        if (data.hasOwnProperty(name)) {
                            let obj = {
                                name: name,
                                link: data[name] + '?format=json',
                                obj: []
                            };
                            this.resources.push(obj);
                        }
                    }
                    this.getResourcesById(this.resources[0]);
                });
        } else {
            this.getResourcesById(this.resources[0]);
        }
    }

    public getResourcesById(obj) {
        if (!obj.obj || obj.obj !== {}) {
            this.requestsService.getResById(obj.link)
                .subscribe((data: any)=> {
                    obj.obj = data;
                });
        }
        this.resActive = obj;
        obj.active = true;
        this.currentPage = 1;
    }
}
