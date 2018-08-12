import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';
import {Search} from '../classes/searchClass';
import {PassDataService} from '../service/pass-data.service';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    search: Search;

    constructor(private httpService: HttpService, private dataService: PassDataService) {
        this.search = new Search();
    }

    ngOnInit() {
    }

    btnSearchCliked(data: any, e: any) {
        switch (e.target.innerHTML) {
            case 'Go': {
                this.search.term = data.value;
                this.search.index = 0;
                this.httpService.search(this.search, e, this.switch, this.dataService);
                break;
            }
            case 'Next': {
                this.search.index = this.search.index + 1;
                this.httpService.search(this.search, e, this.switch, this.dataService);
                break;
            }
        }
    }

    switch(e: any, results: string) {
        if (results === 'none') {
            e.target.disabled = true;
        } else {
            e.target.innerHTML = 'Next';
        }

    }

    keyUp(data, e) {
        if (data === '') {
            e.innerHTML = 'Go';
            e.disabled = false;
            this.dataService.passData([]);
        }
    }

}
