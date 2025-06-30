
module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define(
    'Data',
    {
      firstName: {
        type:      DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },
      age: {
        type:      DataTypes.INTEGER,
        allowNull: false,
        validate: { isInt: true, min: 0 }
      },
      email: {
        type:      DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
      }
    },
    {
      tableName:  'data',    
      timestamps: false    
    }
  );

  return Data;
};
