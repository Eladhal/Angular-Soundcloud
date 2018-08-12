import {Injectable} from '@angular/core';
import {Search} from '../classes/searchClass';

declare const SC: any;

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor() {
    }

    search(search: Search, e: any, callback, servicePassData: any) {
        SC.get('/tracks', {
            q: search.term, limit: 5, linked_partitioning: search.index
        }).then(function (tracks) {
            if (tracks.collection.length > 0) {
                servicePassData.passData(tracks.collection.map(track => track.title));
                callback(e, tracks.next_href);
            } else {
                servicePassData.passData(['No Results']);
                callback(e, 'none');
            }
        });
    }
}
