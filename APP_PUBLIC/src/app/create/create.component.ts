import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone, Seller } from '../phone';
import { PhoneServiceService } from '../phone-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PhoneServiceService]
})
export class CreateComponent implements OnInit {

  public Sellers : Seller = {
    sellerName: '',
    email: '',
    phoneNumber: 0,    
    _id: ''    
  };

  public newPhone : Phone = {
    sellers: this.Sellers,
    brand: '',
    model: '',
    price: 0,
    storage: '',
    color: '',
    _id: ''
  };
 

  constructor(private PhoneServiceService : PhoneServiceService, 
    private router: Router) { }

   

  ngOnInit(): void {
  }
  //create phone
  public createNewPhone(newPhone: Phone):void{
    this.PhoneServiceService.createNewPhone(newPhone);
    alert('Success');
    this.router.navigate(['/phones']);    
  }
}
