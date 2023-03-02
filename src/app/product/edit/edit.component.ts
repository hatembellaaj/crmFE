import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  allsales: Sale[]=[];
  productForm: Product = {
    id: 0,
    name: '',
    price: 0,
    sale: {id:0, quantity:0}
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private fruitService: ProductService,
    private Saleservice:SaleService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
    this.get();
  }
  get()
  {
    this.Saleservice.get().subscribe((data)=>{this.allsales=data;
    });
  }
 
  getById(id: number) {
    this.fruitService.getById(id).subscribe((data) => {
      this.productForm = data;
    });
  }
 
  update() {
    this.fruitService.update(this.productForm)
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