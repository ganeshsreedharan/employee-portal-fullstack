import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterMessageComponent } from './toaster-message.component';

describe('ToasterMessageComponent', () => {
  let component: ToasterMessageComponent;
  let fixture: ComponentFixture<ToasterMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
