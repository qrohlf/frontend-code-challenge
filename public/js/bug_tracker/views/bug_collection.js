define([
  'marionette',
  'bug_tracker/models/bug',
  'bug_tracker/views/bug_item',
  'bug_tracker/views/templates/bug_collection.tpl',
  'socket',
], function (Marionette, BugModel, BugItemView, BugCollectionTpl, io) {
  'use strict';

  var socket = io();

  var BugCollectionView = Marionette.CompositeView.extend({
    childView: BugItemView,
    childViewContainer: '#bug_items',

    template: BugCollectionTpl,

    initialize: function () {
      if (!this.collection) {
        throw new Error('BugCollectionView requires a collection');
      }
      socket.on('change', this.refresh.bind(this))
    },

    events: {
      'click .js_add': 'addBug',
      'click .js_refresh': 'refresh',
    },

    addBug: function () {
      var bug = new BugModel();
      this.collection.push(bug);
    },

    refresh: function () {
      this.collection.fetch();
    },
  });

  return BugCollectionView;
});
