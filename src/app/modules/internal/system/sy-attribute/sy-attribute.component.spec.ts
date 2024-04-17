import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SyAttributeComponent } from './sy-attribute.component';

describe('SyAttributeComponent', () => {
  let component: SyAttributeComponent;
  let fixture: ComponentFixture<SyAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyAttributeComponent ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
