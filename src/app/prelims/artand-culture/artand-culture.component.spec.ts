import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtandCultureComponent } from './artand-culture.component';

describe('ArtandCultureComponent', () => {
  let component: ArtandCultureComponent;
  let fixture: ComponentFixture<ArtandCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtandCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtandCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
