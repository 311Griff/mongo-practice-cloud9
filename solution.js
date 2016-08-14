 var url = 'mongodb://localhost:27017/learnyoumongo';
 //var url = 'mongodb://localhost:27017/'+process.argv[2];
 var mongo = require('mongodb').MongoClient;

    /*var age = process.argv[2];
    var firstName = process.argv[2];
    var lastName = process.argv[3];
    var doc = {
        firstName: firstName,
        lastName: lastName
        };*/

    mongo.connect(url, function(err, db) {
        if(err) throw err;
        
      /*var parrots = db.collection('parrots'); 
      parrots.find({  //query find
          age: {
             $gt: +age 
          }
      }).toArray(function(err, docs){
          if(err){
              throw err;
          }
          console.log(docs);
          db.close();
      });
      parrots.find({ //query search with limit on return values
          age: {
              $gt: +age
         }},{
          name:1, 
          age: 1, 
          _id:0
          
      }).toArray(function(err, docs){
          if(err) throw err;
          console.log(docs);
          db.close();
      });
      
      var documents = db.collection('docs'); 
      documents.insert(doc, function(err, data){ //insert into a table
        if(err) throw err;    
        console.log(JSON.stringify(doc));
        db.close();
      });*/
      /*var collection = db.collection('users');
      collection.update({ //update a field in a table
          username: 'tinatime'
          },
          {
            $set:{
                age: 40
            }
        },function(err) {
              if(err) throw err;
              db.close();
      });*/
     /*var collection = db.collection(process.argv[3]);
     var id = process.argv[4];
      collection.remove({ //removes an entry from the db
          _id: id }, function(err) {
              if(err) throw err;
              db.close();
      });
      
      parrots.count({ //return the count of items that match the query
          age: {
              $gt: +age
          }
          
      },function(err, count) {
              if(err) throw err;
              console.log(count)
              db.close();
      })*/
     //the below code will aggregate the averages of prices in the prices collection of the learnyoumongo db, and return it as a string with 2 decimal places.
      var $size = process.argv[2];
      var collection = db.collection('prices');
       collection.aggregate([
           { $match: {size: $size}},
           { $group: { _id: "prices",
                        average:{$avg: "$price"}
                    }
           }]).toArray(function(err, results){
               var avg = Number(results[0].average).toFixed(2);
               if(err) throw err;
               console.log(avg);
               db.close();
           });
      
       
    });
   