import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorProductoComponent } from './visor-producto.component';

describe('VisorProductoComponent', () => {
  let component: VisorProductoComponent;
  let fixture: ComponentFixture<VisorProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisorProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
