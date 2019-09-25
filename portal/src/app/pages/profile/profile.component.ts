import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService, ILanguage, IUser, LanguageService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

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
}
