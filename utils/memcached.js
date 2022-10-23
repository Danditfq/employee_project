var memjs = require('memjs');

var mc = memjs.Client.create('127.0.0.1:11211');

var resultArr = []

function setMemcached(keys, values){
    valuesString = JSON.stringify(values)
    mc.set(keys, valuesString)
}

function getMemcached(keys){
    mc.get(keys, function (err, value, key){
        values = value.toString()
        values = values.replace('[','')
        values = values.replace(']','')
        values = values.split(',{')
        values[0] = values[0].replace('{','')
        for (let i = 0; i < values.length; i++) {
            values[i] = values[i].replace(`"namaLengkap":`, '')
            values[i] = values[i].replace(`"jabatan":`, '')
            values[i] = values[i].replace(`}`,'')
            values[i] = values[i].replaceAll(`"`,'')
            valuez = values[i]
            valuez = valuez.split(',')
            resultObj = {
                'Nama': valuez[0],
                'Jabatan': valuez[1]
            }
            resultArr.push(resultObj)
        }
    })
}

module.exports = {
    setMc: setMemcached,
    getMc: getMemcached
}