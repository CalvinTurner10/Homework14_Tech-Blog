const User = require('./User');
const blog = require('./blog');
const Comment = require('./Comment');

User.hasMany(blog, {
  // foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

blog.belongsTo(User, {

});
blog.hasMany(Comment, {
 
  onDelete: 'CASCADE'
});

Comment.belongsTo(blog, {
  
});

blog.belongsTo(User, {
 
});
User.hasMany(Comment, {
 
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
});

module.exports = { User, blog, Comment };