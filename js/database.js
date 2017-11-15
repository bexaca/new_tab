//Test for browser compatibility
if (window.openDatabase) {
    //Create the database the parameters are 1. the database name 2.version number 3. a description 4. the size of the database (in bytes) 1024 x 1024 = 1MB
    var mydb = openDatabase("tabs_db", "0.1", "A Database of Cars I Like", 1024 * 2048);

    //create the cars table using SQL for the database using a transaction
    mydb.transaction(function (t) {

        // OBRISI KAD BUDE KRAJ!
        //                        t.executeSql("DROP TABLE IF EXISTS newWorkTab");
        //                        t.executeSql("DROP TABLE IF EXISTS newFunTab");


        t.executeSql("CREATE TABLE newWorkTab (id INTEGER PRIMARY KEY ASC, nameWork TEXT, imageWork TEXT, localWork TEXT, devWork TEXT, liveWork TEXT)");
        t.executeSql("CREATE TABLE newFunTab (id INTEGER PRIMARY KEY ASC, nameFun TEXT, imageFun TEXT, URLFun TEXT)");
    });


} else {
    alert("WebSQL is not supported by your browser!");
}


//function to get the list of cars from the database

function outputWork() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //Get all the cars from the database with a select statement, set outputCarList as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("SELECT * FROM newWorkTab", [], updateWorkList);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}

//function to output the list of cars in the database

function updateWorkList(transaction, results) {
    //initialise the listitems variable
    var listitems = "";
    //get the car list holder ul
    var listholder = document.getElementById("carlist");

    //clear cars list ul
    listholder.innerHTML = "";

    var i;
    //Iterate through the results
    var sitesWork = [];
    var imagesWork = [];
    var localWork = [];
    var devWork = [];
    var liveWork = [];
    var IDWork = [];
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);
        var span__loc = document.getElementsByClassName("local__link span")

        //        listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";

        span__loc.innerHTML += " + row.nameWork + ";
        sitesWork.push(row.nameWork);

        span__loc.innerHTML += " + row.imageWork + ";
        imagesWork.push(row.imageWork);

        span__loc.innerHTML += " + row.localWork + ";
        localWork.push(row.localWork);

        span__loc.innerHTML += " + row.devWork + ";
        devWork.push(row.devWork);

        span__loc.innerHTML += " + row.liveWork + ";
        liveWork.push(row.liveWork);

        span__loc.innerHTML += " + row.id + ";
        IDWork.push(row.id);

        var numberOfWork = IDWork.length;
    }

    k = 0;
    var cardRow = document.getElementsByClassName("work__card");
    for (k = 0; k < numberOfWork; k++) {

        var work__block = document.createElement('div');
        work__block.innerHTML = '<div class="single__card"><div class="shop-card"><div class="slider"><figure data-color="#E24938, #A30F22"><div class="image__div" style="background-image:url(' + imagesWork[k] + ')"></div></figure></div><div class="title">' + sitesWork[k] + '</div><div class="cta"><a href="#/" class="btn del" onclick="deleteWork(' + IDWork[k] + ')">x<span class="bg"></span></a></div></div><div class="links__card"><a class="local__link" href="' + localWork[k] + '" target="_blank"><div class="link__card"><span><i class="fa fa-map-marker" aria-hidden="true"></i></span></div></a><a target="_blank" href="' + devWork[k] + '"><div class="link__card"><span><i class="fa fa-cog" aria-hidden="true"></i></span></div></a><a target="_blank" href="' + liveWork[k] + '"><div class="link__card"><span><i class="fa fa-globe" aria-hidden="true"></i></span></div></a></div></div>'
        work__block.setAttribute('class', 'col-md-3 work__block');
        document.getElementsByClassName('work__card')[0].appendChild(work__block);
    }
}

function outputFun() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //Get all the cars from the database with a select statement, set outputCarList as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("SELECT * FROM newFunTab", [], updateFunList);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}

//function to output the list of cars in the database

function updateFunList(transaction, results) {
    //initialise the listitems variable
    var listitems = "";
    //get the car list holder ul
    var listholder = document.getElementById("carlist");

    //clear cars list ul
    listholder.innerHTML = "";

    var i;
    //Iterate through the results
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);
        var span__loc = document.getElementsByClassName("local__link span")

        //        listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";
        span__loc.innerHTML += " + row.siteName + ";

        //        console.log(row)
    }


    //initialise the listitems variable
    var listitems = "";
    //get the car list holder ul
    var listholder = document.getElementById("carlist");

    //clear cars list ul
    listholder.innerHTML = "";

    var i;
    //Iterate through the results
    var sitesFun = [];
    var imagesFun = [];
    var URLFun = [];
    var IDFun = [];

    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);
        var span__loc = document.getElementsByClassName("local__link span")

        //        listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";

        span__loc.innerHTML += " + row.nameFun + ";
        sitesFun.push(row.nameFun);

        span__loc.innerHTML += " + row.imageFun + ";
        imagesFun.push(row.imageFun);

        span__loc.innerHTML += " + row.URLFun + ";
        URLFun.push(row.URLFun);

        span__loc.innerHTML += " + row.id + ";
        IDFun.push(row.id);

        // var numberOf = Math.max(row.id);
        var numberOfFun = IDFun.length;
    }

    k = 0;
    var cardRow = document.getElementsByClassName("fun__card");
    for (k = 0; k < numberOfFun; k++) {

        var fun__block = document.createElement('div');
        fun__block.innerHTML = '<a target="_blank" href="' + URLFun[k] + '"><div class="shop-card"><div class="slider"><figure data-color="#E24938, #A30F22"><div class="image__div" style="background-image:url(' + imagesFun[k] + ')"></div></figure></div><div class="title">' + sitesFun[k] + '</div><div class="cta"><a href="#/" class="btn del" onclick="deleteFun(' + IDFun[k] + ')">x<span class="bg"></span></a></div></div></a>'

        fun__block.setAttribute('class', 'col-md-3 fun__block');

        document.getElementsByClassName('fun__card')[0].appendChild(fun__block);

    }

}


//function to add the car to the database

function addWorkSite() {
    //check to ensure the mydb object has been created
    if (mydb) {
        //get the values of the make and model text inputs
        var nameWork = document.getElementById("nameWork").value;
        var imageWork = document.getElementById("imageWork").value;
        var localWork = document.getElementById("localWork").value;
        var devWork = document.getElementById("devWork").value;
        var liveWork = document.getElementById("liveWork").value;

        //Test to ensure that the user has entered both a make and model
        if (nameWork !== "" && imageWork !== "" && localWork !== "" && devWork !== "" && liveWork !== "") {
            //Insert the user entered details into the cars table, note the use of the ? placeholder, these will replaced by the data passed in as an array as the second parameter
            mydb.transaction(function (t) {
                t.executeSql("INSERT INTO newWorkTab (nameWork, imageWork, localWork, devWork, liveWork) VALUES (?, ?, ?, ?, ?)", [nameWork, imageWork, localWork, devWork, liveWork]);
            });

        } else {
        }
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}


function addFunSite() {
    //check to ensure the mydbFun object has been created
    if (mydb) {
        //get the values of the make and model text inputs
        var nameFun = document.getElementById("nameFun").value;
        var imageFun = document.getElementById("imageFun").value;
        var URLFun = document.getElementById("URLFun").value;

        //Test to ensure that the user has entered both a make and model
        if (nameFun !== "" && imageFun !== "" && URLFun !== "") {
            //Insert the user entered details into the cars table, note the use of the ? placeholder, these will replaced by the data passed in as an array as the second parameter
            mydb.transaction(function (t) {
                t.executeSql("INSERT INTO newFunTab (nameFun, imageFun, URLFun) VALUES (?, ?, ?)", [nameFun, imageFun, URLFun]);
            });
        } else {

        }
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}


//function to remove a car from the database, passed the row id as it's only parameter

function deleteWork(id) {
    //check to ensure the mydb object has been created
        //Get all the cars from the database with a select statement, set outputCarList as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("DELETE FROM newWorkTab WHERE id=?", [id]);
        });
}

function deleteFun(id) {
    //check to ensure the mydb object has been created
        //Get all the cars from the database with a select statement, set outputCarList as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("DELETE FROM newFunTab WHERE id=?", [id]);
        });
}


outputWork();
outputFun();