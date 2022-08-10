import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Phone } from '../phone';
import { PhoneServiceService } from '../phone-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PhoneServiceService]
})
export class EditComponent implements OnInit {

 
  constructor(private PhoneServiceService : PhoneServiceService, 
    private route : ActivatedRoute,
    private router: Router) { }


    //edit product
  editPhone!: Phone;
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params)=>{
        return this.PhoneServiceService.editPhone(params['phoneid']);
      })      
    ).subscribe((editPhone : Phone)=>{
      this.editPhone = editPhone;

    });
  }

  //update product
  public updatePhone(editPhone: Phone):void{
    this.PhoneServiceService.updatePhone(editPhone);  
    alert('Success');  
    this.router.navigate(['/phones', editPhone._id]);    
  }



}
