import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { FrameworkComponent } from './framework/framework.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PhoneslistComponent } from './phoneslist/phoneslist.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    HeaderComponent,
    HomepageComponent,
    MainHomeComponent,
    AboutpageComponent,
    PhoneslistComponent,
    PhoneDetailsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutpageComponent
      },
      {
        path: 'phones',
        component: PhoneslistComponent
      },
      {
        path: 'phones/:phoneid',
        component: PhoneDetailsComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit/:phoneid',
        component: EditComponent
      }
     
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
