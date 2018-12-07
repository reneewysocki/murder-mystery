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
