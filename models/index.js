// import all models
const Blog = require('./Blog.New');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Blog, {
    through: Vote,
    as: 'voted_blogs',

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Blog.belongsToMany(User, {
    through: Vote,
    as: 'voted_blogs',
    foreignKey: 'blog_id',
    onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Vote.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'SET NULL'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Blog.hasMany(Vote, {
    foreignKey: 'blog_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog, Vote, Comment };