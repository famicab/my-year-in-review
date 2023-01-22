import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DailyFormTabPage } from './daily-form-tab.page';

describe('Tab1Page', () => {
  let component: DailyFormTabPage;
  let fixture: ComponentFixture<DailyFormTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyFormTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyFormTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
