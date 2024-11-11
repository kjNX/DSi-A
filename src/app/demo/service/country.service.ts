import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) {
    }

    getCountries() {
        return this.http.get<any>('https://restcountries.com/v3.1/subregion/South America')
            .toPromise()
            .then(data => data);
    }

    getEntries() {
        return this.http.get<any>('https://en.wikipedia.org/w/rest.php/v1/search/page?q=earth&limit=10')
            .toPromise()
            .then(data => data);
    }

    getCatFacts() {
        return this.http.get<any>('https://cat-fact.herokuapp.com/facts')
            .toPromise()
            .then(data => data);
    }

    getJoke() {
        return this.http.get<any>('https://official-joke-api.appspot.com/random_joke')
            .toPromise()
            .then(data => data)
    }

    getFact() {
        return this.http.get<any>('https://uselessfacts.jsph.pl/api/v2/facts/random')
            .toPromise()
            .then(data => data)
    }
}
