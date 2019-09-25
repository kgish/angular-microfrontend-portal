import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService, ILanguage, LanguageService } from '../../services';
import { IUser } from '../../services/users/interfaces';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Input() title: string;

  currentUser: IUser;
  currentLanguage: ILanguage;

  private subs: Subscription[] = [];

  constructor(private authService: AuthService,
              private languageService: LanguageService) {
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    this.currentLanguage = this.languageService.currentLanguage;
    this.subs.push(this.authService.changedToken.subscribe(user => this.currentUser = this.authService.currentUser));
    this.subs.push(this.languageService.changedLanguage.subscribe(language => this.currentLanguage = this.languageService.currentLanguage));
  }

  ngOnDestroy(): void {
    this.currentUser = null;
    this.currentLanguage = null;
    this.subs.forEach(sub => sub.unsubscribe());
  }

  changeLanguage(lang) {
    this.languageService.set(lang);
  }

  logout() {
    this.authService.logout();
  }
}
