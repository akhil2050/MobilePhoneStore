import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../phone';
import { PhoneServiceService } from '../phone-service.service';

@Component({
  selector: 'app-phoneslist',
  templateUrl: './phoneslist.component.html',
  styleUrls: ['./phoneslist.component.css'],
  providers: [PhoneServiceService]
})
export class PhoneslistComponent implements OnInit {

  phones: Phone[] | undefined;

  constructor(private phoneService: PhoneServiceService,
    private router: Router ) { }


    // list all the phones
  ngOnInit(): void {
    this.phoneService
    .getPhones()
    .subscribe((phones: Phone[]) => {
      this.phones = phones.map ( phone => {
        return phone;
      });
      //console.log(this.phones);
    });
  }
 
// title header for listing page
  pageContent = {
    header: {
      title:'Welcome to MyE-Store',        
      body: 'Find the Right Cell Phone for You'
    }
  };

}
