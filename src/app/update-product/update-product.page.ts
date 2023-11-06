import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage {
  public productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastController: ToastController,
    private router: Router,
    private alertController: AlertController
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: [''],
      photo: ['', Validators.required],
      type: ['', Validators.required],
    });
    const storedValue = localStorage.getItem('indexValue');
  }

  public async updateProduct() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de continuar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
        {
          text: 'Sí',
          handler: () => {
            const storedValue = localStorage.getItem('indexValue');
            var index: number = 0;
            if (storedValue) {
              index = parseInt(storedValue);
            }
            const product = this.productForm.value;
            this.productService.updateProduct(index, product);
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });

    const toast = await this.toastController.create({
      message: 'Producto',
      duration: 200,
      position: 'top',
    });
    toast.present();

    await alert.present();
  }
}
