import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
    templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {

    countries: any[] = [];

    wikiEntries: any[];

    catFacts: any[];

    filteredCountries: any[] = [];

    value1: any;

    value2: any;

    value3: any;

    value4: any;

    value5: any;

    value6: any;

    value7: any;

    value8: any;

    value9: any;

    value10: any;

    value11: any;

    value12: any;

    constructor(private countryService: CountryService) {
        /*this.wikiEntries = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];*/
    }

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
        this.countryService.getEntries().then(entries => {
            this.wikiEntries = entries.pages;
        });
        this.countryService.getCatFacts().then(facts => {
            this.catFacts = facts;
        });
        this.countryService.getJoke().then(joke => {
            this.value1 = joke.setup;
            this.value4 = joke.punchline;
        });
        this.countryService.getFact().then(fact => {
            this.value3 = fact.text;
            this.value9 = fact.source;
        });
    }

    searchCountry(event: any) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered: any[] = [];
        const query = event.query;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.translations.spa.official.toLowerCase().includes(query.toLowerCase())) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}
