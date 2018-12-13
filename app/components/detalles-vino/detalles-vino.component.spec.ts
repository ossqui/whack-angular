import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVinoComponent } from './detalles-vino.component';

describe('DetallesVinoComponent', () => {
  let component: DetallesVinoComponent;
  let fixture: ComponentFixture<DetallesVinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesVinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
