import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataManagement } from '../services/dataManagement';
import { Router } from '@angular/router';

@Injectable()
export class GlobalService {

  //Variables

  constructor(
    private cookieService: CookieService,
    private dm: DataManagement,
    private router: Router
  ) {
    this.initialize();
  }

  private initialize() {

    //Inicializamos variables

  }
}