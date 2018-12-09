// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

module.exports = function(sequelize, DataTypes) {
  var murders = sequelize.define('murders', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
  });
  return murders;
};
