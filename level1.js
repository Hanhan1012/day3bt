//1
const firstName='han',lastName='do',country ='VN',city='TPHCM',age= 20,isMarried= false,year=2023;
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
//2
console.log(typeof "10"===10)
console.log(typeof "10"== 10)
//3
console.log(parseInt('9.8') ===10)
console.log(parseInt('9.8') == 10)
//4
    //i
    const value= 4>3
    const israining = true
    const isbook = true
    console.log(value)
    console.log(israining)
    console.log(isbook)
    //ii
    const value1= null
    const israining1 = ""
    const isbook1 = 0
    console.log(value1)
    console.log(israining1)
    console.log(isbook1)
//5
    const a = 4 >  3
    console.log(4 >  3)

    const b = 4 >= 3
    console.log(4 >= 3)

    const c= 4<3
    console.log(4 <  3)

    const c1= 4<=3
    console.log(4 <= 3)
    const c2 = 4==3
    console.log(4 == 4)
    const c3= (4 === 4)
    console.log(4 === 4)
    const c4= (4 != 4)
    console.log(4 != 4)
    const c5= (4 !== 4)
    console.log(4 !== 4)
    const c6= (4!= '4')
    console.log(4 != '4')
    const c7 = (4 == '4')
    console.log(4 == '4')
    const c8= (4 === '4')
    console.log(4 === '4')
    const c9 ='python';two='jargor'
    console.log('python'.length != 'jargor'.length)

//6
const check = 4 > 3 && 10 < 12         
console.log(4 > 3 && 10 < 12)

const check1 = 4 > 3 && 10 > 12 
console.log(4 > 3 && 10 > 12 )

const check2 = 4 > 3 || 10 < 12  
console.log(4 > 3 || 10 < 12)

const check3 = 4 > 3 || 10 > 12 
console.log(4 > 3 || 10 > 12 )

const check4 = (!(4>3))
console.log(!(4 > 3))

const check5 = (!(4>3))
console.log(!(4 < 3))

const check6 = (!(false))
console.log(!(false))

const check7 = (!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 < 12))

const check8 = (!(4 > 3 && 10 > 12))
console.log(!(4 > 3 && 10 > 12)
)
const check9 = (!(4 === '4'))
console.log(!(4 === '4'))

const one ='python';two='jargor'
console.log(!(/on/g.test(one) === /on/g.test(two)));
//7
const now = new Date()
console.log(now.getFullYear()) 
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())