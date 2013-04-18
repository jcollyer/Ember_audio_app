App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
  // adapter: DS.RESTAdapter.extend({
  //   url: 'http://localhost:3000'
  // })
});

App.Router.map(function() {
  this.resource('about');
  this.resource('teaching');
  this.resource('writing');
  this.resource('video');
  this.resource('posts');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});


