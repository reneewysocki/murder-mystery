module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    firstname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    lastname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    ending1: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending2: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending3: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending4: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending5: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending6: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending7: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending8: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending9: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    ending10: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    last_login: {
      type: Sequelize.DATE,
    },

    // story_step: {
    //   type: Sequelize.INTEGER,
    //   defaultValue: 1,
    // },

    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  });

  return User;
};
