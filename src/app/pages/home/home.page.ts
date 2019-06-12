import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cuenta: Number;
  puertaCerrada: boolean = false;
  isLoading: boolean = false;
  abriendo: boolean = false;

  constructor(
    public loading: LoadingService,
    public alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.cuenta = 6;
  }

  abrirPuerta() {
    this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
      this.contador();
    }, 2000);
  }

  contador() {
    this.abriendo = true;
    let contador = 6;
    this.cuenta = contador;
    let intervalo = setInterval(() => {
      if (this.cuenta > 0) {
        contador--;
        this.cuenta = contador;
      } else {
        this.abriendo = false;
        this.alertCtrl
          .create({
            header: "Puerta cerrada",
            message: "Si desea abrir de nuevo, vuelva a pulsar el botón",
            buttons: [
              {
                text: 'Ok',
                role: 'ok'
              }
            ]
          })
          .then(alertEl => {
            alertEl.present();
          });
        clearInterval(intervalo);
        this.puertaCerrada = true;
      }
    }, 1000);
  }

  volverPrincipal() {
    this.puertaCerrada = false;

  }
}
