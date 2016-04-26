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

    describe('#editBug', function () {
      it('should set the editing attribute on the model', function () {
        expect(view.model.attributes.editing).toBeFalsy()
        view.editBug()
        expect(view.model.attributes.editing).toBeTruthy()
      })
    });

    describe('#saveBug', function () {
      it('should update the attributes of the bug', function (done) {
        function mock (val) {
          return {
            val: function () {return val},
          }
        };
        view.ui = {
          summary: mock('foobar'),
          description: mock('baz'),
        };
        // this is non-optimal, but since I don't have
        // jasmine-ajax at hand in the project and don't
        // really want to spend the time to add it right now
        // I'm going to just dirty-mock the save function
        // instead of properly mocking the whole flow with
        // an AJAX mocking library
        view.model.save = function (attributes, options) {
          view.model.set(attributes, options);
          verifySave();
        };
        view.saveBug();

        function verifySave () {
          expect(view.model.attributes.summary).toEqual('foobar');
          expect(view.model.attributes.description).toEqual('baz');
          expect(view.model.attributes.editing).toBeFalsy();
          done();
        };
      })
    });

    describe('#removeBug', function () {
      it('calls destroy on the model', function () {
        view.model.destroy = function () {}
        spyOn(view.model, 'destroy')
        view.removeBug()
        expect(view.model.destroy).toHaveBeenCalled()
      })
    });

    describe('#showError', function () {
      it('triggers a re-render', function () {
        spyOn(view, 'render')
        view.showError()
        expect(view.render).toHaveBeenCalled()
      })
    });
  });
});
