import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotenbalkComponent} from './notenbalk.component';

describe('NotenbalkComponent', () => {
  let component: NotenbalkComponent;
  let fixture: ComponentFixture<NotenbalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotenbalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotenbalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
