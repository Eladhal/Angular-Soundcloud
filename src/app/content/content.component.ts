import {Component, OnDestroy, OnInit} from '@angular/core';
import {PassDataService} from '../service/pass-data.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

    results: string[];
    subscripPassData: Subscription;

    constructor(private dataService: PassDataService) {
    }

    ngOnInit() {
        this.subscripPassData = this.dataService.getData().subscribe(res => {this.results = res; });
    }

    ngOnDestroy() {
        this.subscripPassData.unsubscribe();
    }

}
