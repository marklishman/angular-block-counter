import { TestBed, async } from '@angular/core/testing';
import {BlockCounterComponent} from './block-counter.component';

describe('BlockCounterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlockCounterComponent
      ],
    }).compileComponents();
  }));

  it(`should have a count of 4`, async(() => {
    const fixture = TestBed.createComponent(BlockCounterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.count).toEqual(4);
  }));

});
