nameofstudentarray = [];

function submit()
{
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var name4 = document.getElementById("name4").value;

    nameofstudentarray.push(name1);
    nameofstudentarray.push(name2);
    nameofstudentarray.push(name3);
    nameofstudentarray.push(name4);

    console.log(nameofstudentarray);

    document.getElementById("displayname").innerHTML = nameofstudentarray;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sort()
{
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    document.getElementById("displayname").innerHTML = nameofstudentarray;
}