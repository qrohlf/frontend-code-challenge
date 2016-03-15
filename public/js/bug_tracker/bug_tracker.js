define([
  'bug_tracker/models/bug_collection',
  'bug_tracker/views/bug_collection'
], function (BugCollection, BugCollectionView) {
  'use strict';

  var app = Marionette.Application.extend({
    initialize: function () {
      this.addRegions({
        bugTrackerRegion: "#bug_tracker_region",
      });

      var collection = new BugCollection();
      collection.fetch().then(function (response) {
        this.bugTrackerRegion.show(new BugCollectionView({
          collection: collection,
        }));
      }.bind(this), function (reason) {
        console.log('Error: could not fetch bug collection');
      });
    }
  });

  return app;
});
