define([
  'bug_tracker/models/bug'
], function (BugModel) {
  'use strict';

  describe('BugModel', function () {
    var model;
    beforeEach(function () {
      model = new BugModel();
    });

    it('should exist', function () {
      expect(model).toBeDefined();
    });

    it('should validate summary', function () {
      expect(model.isValid()).toBeFalsy();
      expect(model.validationError).toEqual('Please provide a summary.');
      model.set({summary: 'foobar'});
      expect(model.isValid()).toBeTruthy();
    })
  });
});
