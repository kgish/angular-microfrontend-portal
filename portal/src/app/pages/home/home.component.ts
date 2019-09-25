import { Component, OnInit } from '@angular/core';

import { AppsService, IApp, ISingleSpaEvent, SingleSpaService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fn = 'HomeComponent';

  apps: IApp[];
  modules: string[];
  mounted: boolean;

  constructor(private appService: AppsService,
              private singleSpaService: SingleSpaService) {
  }

  ngOnInit() {
    this.mounted = false;
    this._addEventListeners();
    this.appService.getAll().subscribe(apps => this._initApps(apps));
  }

  // navigateTo(url: string) {
  //   this.singleSpaService.navigateToUrl(url);
  // }

// Private

  _initApps(apps: IApp[]) {
    this.apps = apps;
    this.modules = apps.map(app => app.module);
    console.log(`${ this.fn }#_initApps: modules=['${ this.modules.join('\',\'') }']`);
    this.singleSpaService.register(apps);
  }

  _addEventListeners() {
    this.singleSpaService.eventNames.forEach(eventName => {
      window.addEventListener(`single-spa:${ eventName }`, (event: ISingleSpaEvent) => {
        const prevMounted = this.mounted;
        let nextMounted = false;
        console.log(`${ this.fn }#listener: ${ event.type }`, event);
        if (eventName === 'routing-event') {
          const path = window.location.href.replace(/^https?:\/\/[^/]*\/?/, '');
          console.log(`${ this.fn }#listener: path='${ path }'`);
          if (this.modules.indexOf(path) !== -1) {
            nextMounted = true;
          }
        }
        if (nextMounted !== prevMounted) {
          setTimeout(() => {
            this.mounted = nextMounted;
            console.log(`${ this.fn }#listener: mounted changed to ${ nextMounted }`);
          }, 100);
        }
      });
    });
  }

}
