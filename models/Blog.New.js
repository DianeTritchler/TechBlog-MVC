const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Blog model
class Blog extends Model {
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            blog_id: body.blog_id
        }).then(() => {
            return Blog.findOne({
                where: {
                    id: body.blog_id
                },
                attributes: [
                    'id',
                    'title',
                    'blog_content',
                    'created_at',
                    [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE blog.id = vote.blog_id)'), 'vote_count']
                ],
                include: [
                    {
                        model: models.Comment,
                        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
                        include: {
                            model: models.User,
                            attributes: ['username']
                        }
                    }
                ]
            });
        });
    }
}

// create fields/columns for Blog model
Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blog_content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },


        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog'
    }
);

module.exports = Blog;