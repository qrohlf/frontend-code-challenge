define([
  'backbone',
], function (Backbone) {
  'use strict';

  var BugModel = Backbone.Model.extend({
    urlRoot: '/api/bug',
    defaults: function () {
      return {
        summary: '',
        description: '',
        editing: this.isNew(),
      };
    },

    validate: function (attrs) {
      if (!attrs.summary.length > 0) {
        return 'Please provide a summary.';
      }
    },
  });

  return BugModel;
});
