import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneslistComponent } from './phoneslist.component';

describe('PhoneslistComponent', () => {
  let component: PhoneslistComponent;
  let fixture: ComponentFixture<PhoneslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneslistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
