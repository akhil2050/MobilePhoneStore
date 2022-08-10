import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../phone';
import { PhoneServiceService } from '../phone-service.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  phones: Phone[] | undefined;

  constructor(private phoneService: PhoneServiceService,
    private router: Router ) { }

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

}
