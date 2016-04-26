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

    describe('#addBug', function () {
      it('should add a bug to the collection', function () {
        expect(view.collection.length).toEqual(0);
        view.addBug();
        expect(view.collection.length).toEqual(1);
      })
    })

    describe('#refresh', function () {
      it('should refresh the list of bugs from the server', function () {
        spyOn(view.collection, 'fetch');
        view.refresh(); // not sure if the actual XHR is properly mocked here
        expect(view.collection.fetch).toHaveBeenCalled();
      })
    })
  });
});
