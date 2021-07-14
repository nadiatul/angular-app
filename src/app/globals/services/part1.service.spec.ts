import { TestBed } from '@angular/core/testing';

import { Part1Service } from './part1.service';

describe('Part1Service', () => {
  let service: Part1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Part1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
