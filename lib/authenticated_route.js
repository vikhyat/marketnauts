Ember.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function() {
    if (! this.get('currentUser.isSignedIn')) {
      this.transitionTo('index');
    }
  }
});
