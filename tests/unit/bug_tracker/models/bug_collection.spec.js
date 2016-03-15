define([
  'bug_tracker/models/bug_collection'
], function (BugCollection) {
  'use strict';

  describe('BugCollection', function () {
    var collection;
    beforeEach(function () {
      collection = new BugCollection();
    });

    it('should exist', function () {
      expect(collection).toBeDefined();
    });
  });
});
