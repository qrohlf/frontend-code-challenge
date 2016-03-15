define([
  'backbone',
  'bug_tracker/views/bug_item'
], function (Backbone, BugItemView) {
  'use strict';

  describe('BugItemView', function () {
    var view;
    beforeEach(function () {
      view = new BugItemView({
        model: new Backbone.Model(),
      });
    });

    it('should exist', function () {
      expect(view).toBeDefined();
    });

    // @TODO write tests to match the implementation :)

  });
});
