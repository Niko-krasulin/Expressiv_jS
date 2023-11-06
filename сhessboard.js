    let size = 8
    let simvol = ''
    for(y=0; y < size; y++) {
        for(x=0; x < size; x++) {
        if ((x+y) % 2 === 0){
            simvol+=' '
        } else {
          simvol+='#'
        }
    }
        simvol+='\n'
    }
    console.log(simvol)