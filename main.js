// console.log("this is asynchronous assignment");

// -------  part - 1
// function logOne(){
//     console.log("first");
// }
// function logTwo(){
//     console.log("afterward");   
// }

// var logOne = setTimeout(logOne(),Math.random()*1000)
// var logTwo = setTimeout(logTwo(),Math.random()*1000)

// var logOne = setTimeout(function(){
//     console.log("first");
// },Math.random()*1000)

// var logTwo = setTimeout(function(){
//     console.log("afterwards");
// },Math.random()*1000)

// function inOrder(one, two){
//     one();
//     two();
// }

// inOrder (logOne, logTwo);


// -------  part - 2
function countryData(){
    var countryName = document.getElementById("countryName").value;
    var countryDetails = document.getElementById("countryDetails");
    // console.log(countryName.length);
    if (countryName.length != 0) {
        
        const fetchPromise = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        
        fetchPromise.then((response)=>{
            const jsonPromise = response.json();
            jsonPromise.then((data)=>{
                console.log(data[0].name);
                console.log(data[0].name.nativeName.urd.official);
                // console.log(data[0].name.nativeName.urd);
                // console.log(data[0].flags.png);
                

                // native.innerHTML = `<p>${data[0].name.nativeName.urd.official}</p>`
                // var languages = data[0].languages;
                //  for (const key in languages) {
                //         const element = languages[key];
                //         console.log(element);
                // }


                countryDetails.innerHTML = `
                <div style="background-color:darkseagreen;padding:10px; margin:10px;">
                    <ul>
                        <li><strong>Country Name : </strong> ${data[0].name.official}</li>
                        <li><strong>Name in Native : </strong>${data[0].name.nativeName.urd.official}</li>
                        <li><strong>Languages : </strong>${Object.values(data[0].languages)}</li>
                        <li><img src=${data[0].flags.png} /></li>
                    </ul>
                <div/>`
            })
        })
        // fetchPromise.catch((error)=>{
            //     console.log(error);
            // })

    } else {
        countryDetails.innerHTML = `<p style="color:red;">Please enter Country name</p>`
    }
}

// -------  part - 3
