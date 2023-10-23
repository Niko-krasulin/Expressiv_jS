function countBs(count) {
    let i = 0;
    let res = 0
    for (i; i < count.length;i++){
        if (count.charAt(i) === 'B') {
           res+=1 
         }
    }
    return res
}
countBs('BoBiB')

// с 2 parameters

function countBs(count, sim) {
    let i = 0;
    let res = 0
    for (i; i < count.length;i++){
        if (count.charAt(i) === sim) {
           res+=1 
         }
    }
    return res
}
countBs('BoBiB', 'o')
