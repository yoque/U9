






  function myFunc2(bish,bosh,start, end) {
    for (let i = start; i <= end; i++) {
        if (i%bish === 0 & i%bosh === 0)
        console.log('bishbosh') 
        else if (i%bish === 0)
        console.log('bish')
        else if (i%bosh === 0)
        console.log('bosh')
        else
        console.log(i)
    }
  }

  function myFunc3(bish,bosh,start, end) {
    for (let i = start; i <= end; i++) {
        if (i%bish === 0 & i%bosh === 0)
        text += 'bishbosh' + "<br>";
        else if (i%bish === 0)
        text += 'bish' + "<br>";
        else if (i%bosh === 0)
        text += 'bosh' + "<br>";
        else
        text += i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }


//   const start = document.querySelector('#start').value;
//   const end = document.querySelector('#end').value;
//   const bish = document.querySelector('#bish').value;
//   const bosh = document.querySelector('#bosh').value;

//   const form = document.querySelector('#form');
  
//   const btn = document.querySelector('#btn');
//   const element = document.getElementById("start");


  form.addEventListener('submit', e=> {
    e.preventDefault();
    const bish = document.querySelector('#bish').value;
    const bosh = document.querySelector('#bosh').value;
    const start = document.querySelector('#start').value;
    const end = document.querySelector('#end').value;
    
    myFunc3(bish,bosh,start, end)

})



const x = document.forms["form"];
let text = "";
for (let i = 0; i < x.length ;i++) {
text += x.elements[i].value + "<br>";
}
console.log(x)
console.log(text)
document.getElementById("demo").innerHTML = text;


//alert(bish.textContent);
//console.log(start.baseURI.match)
//console.log(end.baseURI.toString)
//console.log(bish.nodeValue)
console.log(btn)

let input = document.querySelector("input");
console.log(input)




    // function(bish,bosh,start, end) {
    //     for (let i = start; i <= end; i++) {
    //             if (i%bish === 0 & i%bosh === 0)
    //             console.log('bishbosh') 
    //             else if (i%bish === 0)
    //             console.log('bish')
    //             else if (i%bosh === 0)
    //             console.log('bosh')
    //             else
    //             console.log(i)
    //     }
    // }
   // btn.addEventListener('click', (event) => {myFunc2(bish,bosh,start,end)})

   
   form.addEventListener('submit', e => {
    e.preventDefault();

    })

    const x = document.forms["form"];
    let text = "";
    for (let i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
    }
    console.log(x)
    console.log(text)
    document.getElementById("demo").innerHTML = text;