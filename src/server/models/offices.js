module.exports = (sequelize, DataTypes) => {
  const Offices = sequelize.define('offices', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // countryId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    name: {
      singular: 'office',
      plural: 'offices'
    }
  })
  return Offices
}
