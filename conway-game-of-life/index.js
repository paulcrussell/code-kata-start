
module.exports.nextIteration = (iteration, y, x) => {
    var nextIteration = iteration.split('')
    walk(iteration, (iteration, i, j) => {
        var accumulator = accumulateFunc(x)
        walk(iteration, accumulator.accumulate, i==0?0:i-1, j==0?0:j-1, i==x?x:i+1, j==y?y:j+1)
        nextIteration[j*x + i] = accumulator.result()
    }, 0, 0, x, y)
    return ((rows, rowLength, arr) => {
        for (var i=0;i<=rows;i++) {
            arr[i*rowLength]=`\n`
        }
        return arr.join('')
    }) (y, x, nextIteration)
}

var walk = (arr, fn, minX, minY, maxX, maxY) => {
    for (var i=minX; i<=maxX; i++) {
        for (var j=minY; j<=maxY; j++) {
            fn(arr, i, j)
        }
    }
}

var accumulateFunc = (rowlength) => {
    var pop = 0
    var rowlength = rowlength
    return {
        accumulate: (arr, i, j) => {
            if (arr.charAt(j*rowlength + i) === '*') 
                pop++
        }, 
        result: () => {
            if (pop > 4 || pop < 3) {
                return '.'
            }
            return '*'
        }
    }
}
