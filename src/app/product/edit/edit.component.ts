import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm: Product = {
    id: 0,
    name: '',
    price: 0,
    tax: 0

  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productService: ProductService,

  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });

  }

 
  getById(id: number) {
    this.productService.getById(id).subscribe((data) => {
      this.productForm = data;
    });
  }
 
  update() {
    this.productService.update(this.productForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/product/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}