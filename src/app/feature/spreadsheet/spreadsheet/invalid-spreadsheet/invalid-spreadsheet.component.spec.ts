import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidSpreadsheetComponent } from './invalid-spreadsheet.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FileState} from '../../../file-picker/state/file.reducer';

describe('InvalidSpreadsheetComponent', () => {
  let component: InvalidSpreadsheetComponent;
  let fixture: ComponentFixture<InvalidSpreadsheetComponent>;

  const mockFileState: FileState = {
    id: 'someId',
    name: 'someFile',
    webViewLink: 'www',
    modifiedTime: new Date(),
    validationError: {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidSpreadsheetComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidSpreadsheetComponent);
    component = fixture.componentInstance;
    component.file = mockFileState;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
