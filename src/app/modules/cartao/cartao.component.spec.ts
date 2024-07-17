import { CartaoComponent } from './cartao.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('CartaoComponent', () => {
  let component: CartaoComponent;
  let fixture: ComponentFixture<CartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
