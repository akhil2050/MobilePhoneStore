import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { HttpClient, HttpClientModule  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  private phonesUrl = 'http://localhost:3000/api/phones'
  private createphoneUrl = 'http://localhost:3000/api/createPhone'
  private deletephoneUrl = 'http://localhost:3000/api/deletePhone'
  private updatephoneUrl = 'http://localhost:3000/api/updatePhone'

  constructor(private http: HttpClient) { }

  //retrive all the products
  getPhones() {    
    return this.http.get<Phone[]>(this.phonesUrl);   
   } 

   // get single product
   getSinglePhone(phoneid: string) {
     return this.http.get<Phone>(this.phonesUrl + '/' + phoneid);
   }  
   
   //add new phone
   createNewPhone(newPhone: Phone) {     
     return this.http.post<Phone>(this.createphoneUrl, newPhone)       
     .subscribe((newPhone : Phone)=>{         
       console.log(newPhone);         
     })  
    }

    //delete phone
   deletePhone(phoneid: string) {
      return this.http.delete<Phone>(this.deletephoneUrl + '/' + phoneid);
    }

    //edit phone
    editPhone(phoneid: string) {
      return this.http.get<Phone>(this.phonesUrl + '/' + phoneid);
    }  

    //update phone
    updatePhone(editPhone: Phone) {     
      return this.http.put<Phone>(this.updatephoneUrl + '/' + editPhone._id, editPhone)       
      .subscribe((editPhone : Phone)=>{         
        console.log(editPhone);         
      })  
     }


  private handleError(error: any)
  {
    console.log("error");
  }
}
