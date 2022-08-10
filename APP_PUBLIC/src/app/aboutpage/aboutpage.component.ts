import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pageContent = {
    header: {
      title:'About MyE-Store',
      body: ''
    }
  };
}
