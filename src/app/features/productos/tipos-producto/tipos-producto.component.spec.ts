import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposProductoComponent } from './tipos-producto.component';

describe('TiposProductoComponent', () => {
  let component: TiposProductoComponent;
  let fixture: ComponentFixture<TiposProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
