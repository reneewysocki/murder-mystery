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

    last_login: {
      type: Sequelize.DATE,
    },

    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },

    // TODO create a psuedo array here with true/false as to whether endings are complete. Generate on new account then SET
    // endings: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    //   get() {
    //     return this.getDataValue('endings').split(';');
    //   },
    //   set(val) {
    //     this.setDataValue('endings', val.join(';'));
    //   },
    // },
  });

  return User;
};
