const { Blog } = require('../models');

const blogdata = [
    {
        title: 'Cooking is Fun',
        blog_content: 'I love to cook. But I dont always have time.'
    },
    {
        title: 'Potpie',
        blog_content: 'This week I am going to cook potpie. But Ill probably only eat one serving. I have to figure out if I can freeze the ingrediants... Can celeary be frozen? Maybe once it is cooked'
    },
    {
        title: 'Lookin for a Church',
        blog_content: 'This week I am going to go back to church. Im not sure which church but I will find one.'
    },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;