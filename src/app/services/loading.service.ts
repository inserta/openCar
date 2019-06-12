import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    isLoading = false;

    constructor(
        public loadingController: LoadingController,
    ) { }

    async present() {
        let translation2: string = 'Abriendo puerta...';
        this.isLoading = true;
        return await this.loadingController.create({
            message: translation2,
            showBackdrop: true,
            duration: 5000,
        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss().then();
                }
            });
        });
    }

    async dismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then();
    }
}