import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuterComponent } from './futer.component';

describe('FuterComponent', () => {
  let component: FuterComponent;
  let fixture: ComponentFixture<FuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
