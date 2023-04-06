import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDASHBOARDComponent } from './user-dashboard.component';

describe('UserDASHBOARDComponent', () => {
  let component: UserDASHBOARDComponent;
  let fixture: ComponentFixture<UserDASHBOARDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDASHBOARDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDASHBOARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
