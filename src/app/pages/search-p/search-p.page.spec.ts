import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPPage } from './search-p.page';

describe('SearchPPage', () => {
  let component: SearchPPage;
  let fixture: ComponentFixture<SearchPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
