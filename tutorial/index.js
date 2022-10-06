 let count1 =11
let count2 = 20
 let count11 = document.getElementById("count1")
 let count22 = document.getElementById("count1")
 let count33 = document.getElementById("count1")
let count3D = document.getElementById("count2")
let count4D = document.getElementById("count2")
let count5D = document.getElementById("count2")

 document.getElementById("count1").innerHTML = 11
document.getElementById("count2").innerHTML = 20

function add1(){
   count1 +=1
   console.log(count1)
   count11.innerText = count1

}
function add2() {
    count1 += 2
    console.log(count1)
    count22.innerText = count1

}
function add3() {
    count1 += 3
    console.log(count1)
    count22.innerText = count1

}


function addDD() {
    count2 +=1
    console.log(count2)
    count3D.innerText = count2
}
 
function addDD1() {
    count2 += 2
    console.log(count2)
    count4D.innerText = count2
}
function addDD2() {
    count2 += 3
    console.log(count2)
    count5D.innerText = count2
}
