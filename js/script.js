var gretingText = "Hello World!"
console.log('ini text greting card:',gretingText)
//document.writeln(gretingText)

var myIdNumber =3671130702850004
console.log('My ID Number:', myIdNumber)


var myBoolean = true //false
console.log(myBoolean)

var a = 500
var b = 25
var resultKali = a * b
var resultBagi = a / b
var resultTambah = a + b
var resultKurang = a - b
var resultSisaBagi = a % b

console.log(resultKali)
console.log(resultBagi)
console.log(resultTambah)
console.log(resultKurang)
console.log(resultSisaBagi)


var resultKurangDari = 5 < 3
console.log(resultKurangDari)

var resultLebihDari = 5 > 3
console.log(resultLebihDari)

var resultTipeData = 5 === "5"
console.log(resultTipeData)

var resultTidakCekTipeData = 5 == "5"
console.log(resultTidakCekTipeData)

//OPERATOR LOGIKA
const nilaiUjian = 75
const nilaiAbsen = 75

const lulusUjian = nilaiUjian >= 75
const lulusAbsen = nilaiAbsen >= 75

const lulusSempurna = lulusUjian && lulusAbsen
const lulusBiasa = lulusUjian || lulusAbsen

console.log('Lulus Sempurna:', lulusSempurna)
console.log('Lulus Biasa:', lulusBiasa)


//CONDITIONAL
if(nilaiUjian >= 75){
    console.log('LULUS')
}else{
    console.log('TIDAK LULUS')
}


if(nilaiUjian >=75 && nilaiAbsen >= 75)[{
    console.log('LULUS SEMPURNA')
}else if(nilaiUjian >= 75 && nilaiAbsen <= 75){
    console.log('LULUS BIASA')
}else if(nilaiUjian <= 75 && nilaiAbsen >= 75){
    console.log('LULUS BIASA')
}else{
    console.log('TIDAK LULUS')
}


//TERNERY OPERATOR CORDITIONAL
const hasilUjian = nilaiUjian >= 75 && nilaiAbsen >= 75 ? 'LULUS SEMPURNA' : (nilai >= 75 && nilaiAbsen <= 75) ? 'LULUS BIASA' :'TIDAK LULUS'
console.log ('HASIL TERNERY OPERATOR :', hasilUjian)


//ARRAY
constcas = [
    'Cayla'
    'AGya'
    'Avanza'
    'Brio'
    'BRV'
    'Mobilio'
    'CRV'
    'BYD'
    'Tesla'
]

console.log("Car Brand: " , cars)