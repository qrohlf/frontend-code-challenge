define([
  'marionette',
  'bug_tracker/views/templates/bug_item.tpl'
], function (Marionette, BugItemTpl) {
  'use strict';

  var BugItemView = Marionette.ItemView.extend({
    template: BugItemTpl,

    ui: {
      summary: 'input.summary',
      description: 'textarea.description',
    },

    events: {
      'click .js_bug_edit': 'editBug',
      'click .js_bug_save': 'saveBug',
      'click .bug_remove': 'removeBug',
    },

    templateHelpers: function () {
      return {
        error: this.model.validationError,
      };
    },

    initialize: function () {
      if (!this.model) {
        throw new Error('BugItemView requires a model');
      }
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'invalid', this.showError);
    },

    editBug: function () {
      this.model.set({editing: true});
    },

    saveBug: function () {
      this.model.save({
        summary: this.ui.summary.val(),
        description: this.ui.description.val(),
        editing: false,
      });
    },

    removeBug: function () {
      this.model.destroy();
    },

    showError: function () {
      this.render();
    },
  });

  return BugItemView;
});
