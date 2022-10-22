'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class karyawan_tb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  karyawan_tb.init({
    namaLengkap: DataTypes.STRING,
    email: DataTypes.STRING,
    noHandphone: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    photoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'karyawan_tb',
  });
  return karyawan_tb;
};