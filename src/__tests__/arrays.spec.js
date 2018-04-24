import {expect} from 'chai';

import {arrays} from '../index';


describe('arrays.js', () => {
  describe('sumByKey(items, key) method - calculate sum of elements in array of objects by key', () => {
    const items = [
      {
        id: 0,
        label: 'some shit',
        value: 42,
        value2: '11',
      },
      {
        id: 2,
        label: 'some another shit',
        value: 11,
        value2: 'Not Set',
      },
      {
        id: 3,
        label: 'some shit',
        value: 27,
        value2: 5,
      },
      {
        id: 4,
        label: 'some super shit',
        value: 20,
        value2: {},
      },
    ];
    it('should return valid result of calculation', () => {
      expect(arrays.sumByKey(items, 'value')).to.be.equal(100);
    });
    it('should return zero if key value is missing', () => {
      expect(arrays.sumByKey(items, 'superValue')).to.be.equal(0);
    });
    it('should return valid result if key value have different types', () => {
      expect(arrays.sumByKey(items, 'value2')).to.be.equal(16);
    });
  });

  describe('remove(items, forDeletion) method - remove one or couple of items from array', () => {
    it('should return array without item that selected to be deleted', () => {
      expect(arrays.remove([1, 2, 3], 2)).to.deep.equal([1, 3])
    });
    it('should remove only items with right type', () => {
      expect(arrays.remove([1, 2, 3], '2')).to.deep.equal([1, 2, 3])
    });
    it('should remove multiple items if forDeletion is array', () => {
      expect(arrays.remove([1, 2, 3, 4, 5], [2, 4])).to.deep.equal([1, 3, 5])
    });
  });

  describe('newArray(length) method - create new iterable array', () => {
    it('should create new array with length that passed as argument', () => {
      const length = 10;
      const result = arrays.newArray(length);
      expect(result.length).to.be.equal(length)
    });
    it('created array should be iterable', () => {
      const length = 10;
      const result = arrays.newArray(length);
      expect(result.reduce(acc=> ++acc, 0)).to.be.equal(length)
    });
    it('created array with predefined values', () => {
      const length = 10;
      const initialItemValue = 'test value';
      const result = arrays.newArray(length, initialItemValue);
      expect(result.every(item => item === initialItemValue)).to.be.equal(true)
    });
  })
});
