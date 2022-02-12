const { Vote } = require('../models');

const votedata = [
    {
        user_id: 9,
        blog_id: 3
    },
    {
        user_id: 1,
        blog_id: 3
    },
    {
        user_id: 8,
        blog_id: 2
    },
    {
        user_id: 8,
        blog_id: 2
    },
    {
        user_id: 9,
        blog_id: 3
    },
    {
        user_id: 3,
        blog_id: 2
    },
    {
        user_id: 4,
        blog_id: 3
    },
    {
        user_id: 10,
        blog_id: 2
    },
    {
        user_id: 3,
        blog_id: 3
    },
    {
        user_id: 9,
        blog_id: 2
    },
    {
        user_id: 3,
        blog_id: 3
    },
    {
        user_id: 10,
        blog_id: 2
    },
    {
        user_id: 6,
        blog_id: 1
    },
    {
        user_id: 5,
        blog_id: 1
    },
    {
        user_id: 6,
        blog_id: 1
    },
    {
        user_id: 9,
        blog_id: 8
    },
    {
        user_id: 6,
        blog_id: 5
    },
    {
        user_id: 6,
        blog_id: 7
    },
    {
        user_id: 6,
        blog_id: 1
    },
    {
        user_id: 1,
        blog_id: 2
    },
    {
        user_id: 10,
        blog_id: 3
    },
    {
        user_id: 4,
        blog_id: 1
    },
    {
        user_id: 10,
        blog_id: 2
    },
    {
        user_id: 5,
        blog_id: 2
    },
    {
        user_id: 6,
        blog_id: 2
    },
    {
        user_id: 1,
        blog_id: 2
    },
    {
        user_id: 7,
        blog_id: 3
    },
    {
        user_id: 6,
        blog_id: 3
    },
    {
        user_id: 6,
        blog_id: 3
    },
    {
        user_id: 7,
        blog_id: 1
    },
    {
        user_id: 4,
        blog_id: 5
    },
    {
        user_id: 2,
        blog_id: 8
    },
    {
        user_id: 9,
        blog_id: 0
    },
    {
        user_id: 10,
        blog_id: 5
    },
    {
        user_id: 8,
        blog_id: 1
    },
    {
        user_id: 10,
        blog_id: 3
    },
    {
        user_id: 2,
        blog_id: 3
    },
    {
        user_id: 9,
        blog_id: 2
    },
    {
        user_id: 1,
        blog_id: 1
    },
    {
        user_id: 10,
        blog_id: 2
    },
    {
        user_id: 10,
        blog_id: 3
    },
    {
        user_id: 5,
        blog_id: 3
    },
    {
        user_id: 6,
        blog_id: 2
    },
    {
        user_id: 5,
        blog_id: 2
    },
    {
        user_id: 6,
        blog_id: 3
    },
    {
        user_id: 2,
        blog_id: 3
    },
    {
        user_id: 4,
        blog_id: 2
    }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;