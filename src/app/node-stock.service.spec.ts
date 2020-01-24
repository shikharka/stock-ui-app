import { TestBed } from '@angular/core/testing';

import { NodeStockService } from './node-stock.service';

describe('NodeStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodeStockService = TestBed.get(NodeStockService);
    expect(service).toBeTruthy();
  });
});
