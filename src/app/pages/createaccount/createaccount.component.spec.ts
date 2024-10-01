import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountComponent } from './createaccount.component';

describe('CreateaccountComponent', () => {
  let component: CreateaccountComponent;
  let fixture: ComponentFixture<CreateaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
