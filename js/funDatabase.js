// FUN

//Test for browser compatibility
//if (window.openDatabase) {
//    //Create the database the parameters are 1. the database name 2.version number 3. a description 4. the size of the database (in bytes) 1024 x 1024 = 1MB
////    var mydbFun = openDatabase("tabsFun_db", "0.1", "A Database of Cars I Like", 1024 * 2048);
//
//    //create the cars table using SQL for the database using a transaction
//    mydb.transaction(function (t) {
//
//        // OBRISI KAD BUDE KRAJ!
////                t.executeSql("DROP TABLE IF EXISTS newFunTab");
//
//
//        t.executeSql("CREATE TABLE newFunTab (id INTEGER PRIMARY KEY ASC, siteNameFun TEXT, siteImageFun TEXT, URLFun TEXT)");
//    });
//
//
//
//} else {
//    alert("WebSQL is not supported by your browser!");
//}


//function to get the list of cars from the database

//function outputFun() {
//    //check to ensure the mydbFun object has been created
//    if (mydbFun) {
//        //Get all the cars from the database with a select statement, set outputCarList as the callback function for the executeSql command
//        mydbFun.transaction(function (t) {
//            t.executeSql("SELECT * FROM newFunTab", [], updateFunList);
//        });
//    } else {
//        alert("db not found, your browser does not support web sql!");
//    }
//}
//
////function to output the list of cars in the database
//
//function updateFunList(transaction, results) {
//    //initialise the listitems variable
//    var listitems = "";
//    //get the car list holder ul
//    var listholder = document.getElementById("carlist");
//
//    //clear cars list ul
//    listholder.innerHTML = "";
//
//    var i;
//    //Iterate through the results
//    for (i = 0; i < results.rows.length; i++) {
//        //Get the current row
//        var row = results.rows.item(i);
//        var span__loc = document.getElementsByClassName("local__link span")
//        
////        listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";
//        span__loc.innerHTML += " + row.siteName + ";
//        
//        console.log(row.local)
//    }
//
//}



//function to add the car to the database

//function addFunSite() {
//    //check to ensure the mydbFun object has been created
//    if (mydb) {
//        //get the values of the make and model text inputs
//        var siteNameFun = document.getElementById("siteNameFun").value;
//        var siteImageFun = document.getElementById("siteImageFun").value;
//        var URLFun = document.getElementById("URLFun").value;
//
//        //Test to ensure that the user has entered both a make and model
//        if (siteNameFun !== "" && siteImageFun !== "") {
//            //Insert the user entered details into the cars table, note the use of the ? placeholder, these will replaced by the data passed in as an array as the second parameter
//            mydb.transaction(function (t) {
//                t.executeSql("INSERT INTO newFunTab (siteNameFun, siteImageFun, URLFun) VALUES (?, ?, ?)", [siteNameFun, siteImageFun, URLFun]);
//                //                outputCars();
//            });
//        } else {
//            alert("You must enter a make and model!");
//        }
//    } else {
//        alert("db not found, your browser does not support web sql!");
//    }
//}
//
//var rezultati = t.executeSql("SELECT * FROM newTab WHERE siteName = 'das'");
//console.log(rezultati)

//function to remove a car from the database, passed the row id as it's only parameter

//function deleteCar(id) {
//    //check to ensure the mydbFun object has been created
//    if (mydbFun) {
//        //Get all the cars from the database with a select statement, set outputCarList as the callback function for the executeSql command
//        mydbFun.transaction(function (t) {
//            t.executeSql("DELETE FROM newTab WHERE id=?", [id], outputCars);
//        });
//    } else {
//        alert("db not found, your browser does not support web sql!");
//    }
//}
////
//outputFun();