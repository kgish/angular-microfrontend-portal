import { Component, OnInit } from '@angular/core';

import { ISingleSpaApp, SingleSpaService } from '../../services';

@Component({
  selector: 'app-single-spa',
  templateUrl: './single-spa.component.html',
  styleUrls: ['./single-spa.component.scss']
})
export class SingleSpaComponent implements OnInit {

  apps: ISingleSpaApp[];

  constructor(private singleSpa: SingleSpaService) {
  }

  ngOnInit() {
    this.apps = this.singleSpa.getApps();
  }

}
