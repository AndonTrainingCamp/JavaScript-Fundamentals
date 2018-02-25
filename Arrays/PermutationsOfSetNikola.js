function perm (arr) {//array to permutate
    if (arr.length === 1) return [arr];

    let head = arr.shift();//removes first element of array and saves it in head
    let res = [];

    perm(arr).forEach(function(line){
        for (let i = 0; i <= line.length; i++) {
            let lineArr = line.slice();//to prevent mutation to line
            lineArr.splice(i, 0, head);
            res.push(lineArr);
        }
    })

    return res;
}

function solve(n) {
    const input = Array(n).fill(1).map((e, i) => i + 1);
    const permutationsOfN = perm(input);

    permutationsOfN.forEach(function(permutation){
        console.log(`{ ${permutation.join(', ')} }`);
    })
    return n;
}
