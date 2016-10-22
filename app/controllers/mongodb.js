var MongoClient = require('mongodb').MongoClient;
var url =   "mongodb://nirav:One1992@ds063856.mlab.com:63856/eyeapp";

var find = function (collectionName, obj, callback) {
	MongoClient.connect(url, function (err, db) {
		var collection = db.collection(collectionName);
		collection.find(obj).toArray( function (err, result){
			db.close();
			if(err) callback(true, err);
			else callback(false, result);
		})
	})

}

module.exports.find = find;