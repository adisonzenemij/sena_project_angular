import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SyIconComponent } from './sy-icon.component';

describe('SyIconComponent', () => {
  let component: SyIconComponent;
  let fixture: ComponentFixture<SyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyIconComponent ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
