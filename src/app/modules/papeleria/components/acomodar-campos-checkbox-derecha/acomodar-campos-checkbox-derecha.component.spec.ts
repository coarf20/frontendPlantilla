import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcomodarCamposCheckboxDerechaComponent } from './acomodar-campos-checkbox-derecha.component';

describe('AcomodarCamposCheckboxDerechaComponent', () => {
  let component: AcomodarCamposCheckboxDerechaComponent;
  let fixture: ComponentFixture<AcomodarCamposCheckboxDerechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcomodarCamposCheckboxDerechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcomodarCamposCheckboxDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
