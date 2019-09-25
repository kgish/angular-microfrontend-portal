import { Injectable } from '@angular/core';

// import * as singleSpa from 'single-spa';
import { IApp } from '../apps';

export interface ISingleSpaEvent extends Event {
  detail: any;
}

export interface ISingleSpaApp {
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class SingleSpaService {

  private readonly fn = 'SingleSpaService';

  // private apps: IApp[] = [];

  eventNames = [
    'before-routing-event',
    'routing-event',
    'app-change-event',
    'no-app-change-event',
    'before-first-mount',
    'first-mount'
  ];

  constructor() {
  }

  register(apps: IApp[]) {
    // this.apps = apps;
    // const appNames = singleSpa.getAppNames();
    // appNames.forEach(appName => {
    //   const status = singleSpa.getAppStatus(appName);
    //   console.log(`${ this.fn }#register: appName='${ appName }', status='${ status }'`);
    //   if (status === 'MOUNTED') {
    //     singleSpa.unloadApplication(appName).then(() => console.log(`${ this.fn }#register(): appName='${ appName }' => unloaded`));
    //   }
    // });
    // apps.forEach((app: IApp) => {
    //   if (appNames.indexOf(app.name) === -1) {
    //     const loadingFunction = () => import(app.module);
    //     const activityFunction = location => location.pathname.startsWith(app.link);
    //     singleSpa.registerApplication(app.name, loadingFunction, activityFunction);
    //     console.log(`${ this.fn }#register: appName='${ app.name }' => registered`);
    //   } else {
    //     console.log(`${ this.fn }#register: appName='${ app.name }' => skip (already registered)`);
    //   }
    // });
    // singleSpa.start();
  }

  getApps(): ISingleSpaApp[] {
    const apps: ISingleSpaApp[] = [];
    // this.apps.forEach(app => {
    //   const name = app.name;
    //   const status = 'UNKNOWN';
    //   apps.push({ name, status });
    // });
    singleSpa.getAppNames().forEach(name => {
      const status = singleSpa.getAppStatus(name);
      apps.push({ name, status});
    });
    return apps;
  }

  navigateToUrl(url: string) {
    singleSpa.navigateToUrl(url);
  }

}
