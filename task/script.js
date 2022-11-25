// // // =================  TASK 1  ===================
var obj1 ={
    name:'person1',
    age:5
}

var obj2 ={
    name:'person1',
    age:5
}

var per1 = JSON.stringify(obj1);
var per2 = JSON.stringify(obj2);

if (per1== per2){
    console.log("The above objects are same")
} else{
    console.log("The above objects are not same")

}
// OUTPUT
// // The above objects are same


// // ====================  TASK 2 (Country FLag) =======================
var url = "https://restcountries.com/v3.1/all"
var request = new XMLHttpRequest();
request.open("GET", url)
request.send()
request.onload= function(){
    var data = request.response
    var result= JSON.parse(data)

    for ( var i=0; i<result.length; i++){
        // console.log(result[i].flags)
    }

}

// OUTPUT
//  {png: 'https://flagcdn.com/w320/ar.png', svg: 'https://flagcdn.com/ar.svg'}
//  {png: 'https://flagcdn.com/w320/se.png', svg: 'https://flagcdn.com/se.svg'}
//  {png: 'https://flagcdn.com/w320/mv.png', svg: 'https://flagcdn.com/mv.svg'}
//  {png: 'https://flagcdn.com/w320/mx.png', svg: 'https://flagcdn.com/mx.svg'}
//  {png: 'https://flagcdn.com/w320/nz.png', svg: 'https://flagcdn.com/nz.svg'}
//  {png: 'https://flagcdn.com/w320/ec.png', svg: 'https://flagcdn.com/ec.svg'}
//  {png: 'https://flagcdn.com/w320/aw.png', svg: 'https://flagcdn.com/aw.svg'}
//  {png: 'https://flagcdn.com/w320/wf.png', svg: 'https://flagcdn.com/wf.svg'}
//  {png: 'https://flagcdn.com/w320/ax.png', svg: 'https://flagcdn.com/ax.svg'}

//================= TASK 3 ====================

var req =new XMLHttpRequest();
req.open("GET",url)
req.send()
req.onload =function(){
    var data = req.response
    var result = JSON.parse(data)
    for( var i=0; i<result.length; i++){
        var apidata = result[i];
        console.log(apidata.name.common + ' '+ apidata.region + ' '+ apidata.subregion)
    }
}
// OUTPUT
// Mauritania Africa Western Africa
// script.js:61 Aruba Americas Caribbean
// script.js:61 Argentina Americas South America
// script.js:61 Sweden Europe Northern Europe
// script.js:61 Maldives Asia Southern Asia
// script.js:61 Mexico Americas North America

