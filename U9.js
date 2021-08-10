



  function myFunc(start, end) {
    for (let i = start; i <= end; i++) {
        if (i%3 === 0 & i%4 === 0)
        console.log('bishbosh') 
        else if (i%3 === 0)
        console.log('bish')
        else if (i%4 === 0)
        console.log('bosh')
        else
        console.log(i)
    }
  }

  myFunc(1, 100);

  

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

