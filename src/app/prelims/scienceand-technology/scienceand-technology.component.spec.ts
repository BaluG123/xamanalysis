import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceandTechnologyComponent } from './scienceand-technology.component';

describe('ScienceandTechnologyComponent', () => {
  let component: ScienceandTechnologyComponent;
  let fixture: ComponentFixture<ScienceandTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceandTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceandTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
