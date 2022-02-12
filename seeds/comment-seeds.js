const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Yes!! Cooking is the Best! But I have to cook mostly on the weekends. I dont have time durring the week.',
        user_id: 3,
        blog_id: 1
    },
    {
        comment_text: 'Ooo, PotPie! Yum! Once cooked the the filling should be good to freeze.',
        user_id: 4,
        blog_id: 2
    },
    {
        comment_text: 'I am learning to cook hopefylly I can learn some stuff from yall',
        user_id: 2,
        blog_id: 1
    },
    {
        comment_text: 'I love the curch I attend. But it is big, I know not everyone likes big churches',
        user_id: 1,
        blog_id: 3
    },
    {
        comment_text: 'On sundays after church my mom used to make a big family meal!',
        user_id: 2,
        blog_id: 3
    }

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;