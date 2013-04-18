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
  this.resource('writing');
  this.resource('video');
  this.resource('posts', function(){
  	this.resource('post', { path: ':post_id' })
  });
  this.resource('teachings', function(){
		this.resource('teaching', { path: ':teaching_id' })
	});
});

App.PostsRoute = Ember.Route.extend({
	model: function(){
		return App.Post.find();
	}
});

App.TeachingsRoute = Ember.Route.extend({
	model: function(){
		return App.Teaching.find();
	}
})

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.Post = DS.Model.extend({
	title: DS.attr('string'),
	intro: DS.attr('string'),
	extended: DS.attr('string'),
	poblishedAt: DS.attr('date')
});

App.Teaching = DS.Model.extend({
	title: DS.attr('string'),
	intro: DS.attr('string'),
	extended: DS.attr('string'),
	poblishedAt: DS.attr('date'),
	audio: DS.attr('string'),
	thumb: DS.attr('string'),
	bigimage: DS.attr('string')
});

App.Post.FIXTURES = [{
	id: 1,
	title: "First Post",
	publishedAt: new Date('12-22-2012'),
	intro: "this is the very first post",
	extended: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
},{
	id: 2,
	title: "Second Post",
	publishedAt: new Date('12-22-2012'),
	intro: "Yah number 2",
	extended: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},{
	id: 3,
	title: "Third Post",
	publishedAt: new Date('12-22-2012'),
	intro: "3 strikes!",
	extended: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
}];

App.Teaching.FIXTURES = [{
	id: 1,
	title: "first teaching",
	intro: "my first teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching1.jpg",
	bigimage: "img/teachingbig1.jpg"
},{
	id: 2,
	title: "Second teaching",
	intro: "my second teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching2.jpg",
	bigimage: "img/teachingbig2.jpg"
},{
	id: 3,
	title: "third teaching",
	intro: "my third teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching3.jpg",
	bigimage: "img/teachingbig3.jpg"
},{
	id: 4,
	title: "Fourth teaching",
	intro: "my forth teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching4.jpg",
	bigimage: "img/teachingbig4.jpg"
},{
	id: 5,
	title: "fith teaching",
	intro: "my first teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching5.jpg",
	bigimage: "img/teachingbig5.jpg"
},{
	id: 6,
	title: "sixth teaching",
	intro: "my sixth teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching6.jpg",
	bigimage: "img/teachingbig6.jpg"
},{
	id: 7,
	title: "seventh teaching",
	intro: "my seventh teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching7.jpg",
	bigimage: "img/teachingbig7.jpg"
},{
	id: 8,
	title: "eight teaching",
	intro: "my eight teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching8.jpg",
	bigimage: "img/teachingbig8.jpg"
},{
	id: 9,
	title: "ninth teaching",
	intro: "my ninth teaching",
	extended: "this is the info about this teaching",
	poblishedAt: new Date('12-22-2012'),
	audio: "audio file goes here",
	thumb: "img/teaching9.jpg",
	bigimage: "img/teachingbig9.jpg"
}];

