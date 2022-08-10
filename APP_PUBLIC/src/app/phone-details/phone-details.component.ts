import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Phone } from '../phone';
import { PhoneServiceService } from '../phone-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css'],
  providers: [PhoneServiceService]         
})
export class PhoneDetailsComponent implements OnInit {


  constructor(
    private PhoneServiceService : PhoneServiceService,
    private route : ActivatedRoute,
    private router: Router
  ) { }
  
  //get single product
  newPhone!: Phone;
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params)=>{
        return this.PhoneServiceService.getSinglePhone(params['phoneid'])
      })      
    ).subscribe((newPhone : Phone)=>{
      this.newPhone = newPhone;
      this.pageContent.header.title = newPhone.model;     

    });
  }

  //delete product
  deletePhone(phoneid: string) {
    this.PhoneServiceService.deletePhone(phoneid).subscribe(res => {     
        alert('Success');
        this.router.navigate(['/phones']); 
      //console.log('Deleted');
    });
  }

  pageContent = {
    header: {
      title:'Details for selected phone',
      body: ''
    }
  };
}
