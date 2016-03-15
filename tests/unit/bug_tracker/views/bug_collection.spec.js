define([
  'backbone',
  'bug_tracker/views/bug_collection'
], function (Backbone, BugCollectionView) {
  'use strict';

  describe('BugCollectionView', function () {
    var view;
    beforeEach(function () {
      view = new BugCollectionView({
        collection: new Backbone.Collection(),
      });
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

    // @TODO write tests to match the implementation :)

  });
});
