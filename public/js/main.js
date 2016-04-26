require.config({
  paths: {
    'backbone': 'vendor/backbone',
    'jadeRuntime': 'vendor/jade_runtime',
    'jquery': 'vendor/jquery',
    'marionette': 'vendor/backbone.marionette',
    'underscore': 'vendor/underscore',
    'socket': '/socket.io/socket.io',
  },
});

requirejs([
  'jquery',
  'bug_tracker/bug_tracker'
], function($, BugTracker) {
  'use strict';
  $.ajaxSetup({cache: false});
  new BugTracker();
});
