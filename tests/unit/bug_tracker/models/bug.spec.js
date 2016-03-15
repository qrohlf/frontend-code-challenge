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

    // @TODO write tests to match the implementation :)

  });
});
