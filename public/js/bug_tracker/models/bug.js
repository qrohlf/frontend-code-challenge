define([
  'backbone',
], function (Backbone) {
  'use strict';

  var BugModel = Backbone.Model.extend({
    defaults: function () {
      return {
        summary: '',
        description: '',
        editing: this.isNew(),
      };
    },

    // @TODO Validate that this model's summary is set
  });

  return BugModel;
});
