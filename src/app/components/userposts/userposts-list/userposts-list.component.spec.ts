import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostsListComponent } from './userposts-list.component';

describe('UserpostsListComponent', () => {
  let component: UserpostsListComponent;
  let fixture: ComponentFixture<UserpostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpostsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
