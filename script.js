function main() {
    var num1 = paraseInt(readLine(),10);
    var num2 = parseInt(readLine(), 10);
    var num3 = parseInt(readLine(), 10);
    var average = avg(num1,num2,num3);
    console.log(average)
}
function avg(x,y,z){
    return(x+y+z)/3
}