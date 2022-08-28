import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitRevisionsComponent } from './commit-revisions.component';

describe('CommitRevisionsComponent', () => {
  let component: CommitRevisionsComponent;
  let fixture: ComponentFixture<CommitRevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitRevisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitRevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
