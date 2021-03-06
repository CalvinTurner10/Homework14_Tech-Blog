const User = require('./User');
const Blogs = require('./Blogs');
const Comment = require('./Comment');

User.hasMany(Blogs, {

  onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {

});
Blogs.hasMany(Comment, {
  // foreignKey:'postID',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blogs, {
  // foreignKey:'userID',
});

Blogs.belongsTo(User, {
 
});
User.hasMany(Comment, {
 
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
});

module.exports = { User, Blogs, Comment };