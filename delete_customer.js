con.connect(function(err) {

    if (err) throw err;

    console.log("Connected!");
     var sql = "DELETE FROM Customers WHERE name = 'Jason'"

    con.query(sql, function (err, result) {
          if (err) throw err; 
          console.log("Table Deleted.");
    });

});