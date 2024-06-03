const sequelize = require('../DB');

const Todo = require('./todo');

// User.belongsToMany(Post, {through: 'UserPost'});
// Post.belongsToMany(User, {through: 'UserPost'});

const init = async () => {
    // await sequelize.sync({alter: true});
    await Todo.sync({alter: true});
}

module.exports = { init, Todo };