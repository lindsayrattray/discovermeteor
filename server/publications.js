Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('commments', function() {
  return Comments.find();
});