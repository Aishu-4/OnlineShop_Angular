import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProductsComponentComponent } from './pending-products-component.component';

describe('PendingProductsComponentComponent', () => {
  let component: PendingProductsComponentComponent;
  let fixture: ComponentFixture<PendingProductsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingProductsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
