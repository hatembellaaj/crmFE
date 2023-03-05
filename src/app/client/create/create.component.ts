import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from '../client';
import { ClientService } from "../client.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

    clientForm: Client = {
      id: 0,
      nameClient: '',
      email:''

    };
  
    constructor(private clientService:ClientService,
      private router:Router) {}
   
    ngOnInit(): void {
  
    }

   
    create(): void{
      this.clientService.create(this.clientForm)
      .subscribe({
        next:(data: any) => {
          this.router.navigate(["/client/home"])
        },
        error:(err: any) => {
          console.log(err);
        }
      });
    }
  }
