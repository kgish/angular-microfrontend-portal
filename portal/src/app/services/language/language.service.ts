import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

export type ILanguage = 'en' | 'nl';

const CURRENT_LANGUAGE = '_lang';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  changedLanguage = new Subject<ILanguage>();

  constructor(private snackbar: MatSnackBar) {
  }

  set(language: ILanguage) {
    localStorage.setItem(CURRENT_LANGUAGE, language);
    this.changedLanguage.next(language);
    this.snackbar.open(`You have changed the language to ${ language.toLocaleUpperCase() }`, 'X', {
      duration: 5000
    });
  }

  get currentLanguage(): ILanguage {
    const language = localStorage.getItem(CURRENT_LANGUAGE) as ILanguage;
    return language || 'en';
  }
}
