function solve(args) {
    let num = +(args[0]);
    if (num % 2) {
        //console.log('odd', num);
        return 'odd ' + num;
    } else {
        //console.log('even', num);
        return 'even ' + num;
    }
}
