const score = [10, 23, 26, 30, 33]

//let sum: number = 0

//for(let i = 0; i < score.length; i++) {

//    sum = sum + score[i]
//}

//let avg = sum / score.length

//console.log("total:",sum)
//console.log("avg: ", avg)




const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"


const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray[5])



const  FullName: string = 'สุดสวย สวยสุด'


console.log(FullName.split('')[0])

console.log(FullName.slice(0,FullName.indexOf('')))




const  aniMals: string = "แมว*ช้าง*เสือ*สิงโต*นกอินทรี"

const aniMalsArray: string[] = aniMals.split('*')

console.log("ตั้งต้น: ",aniMalsArray)

aniMalsArray.pop() // เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก:", aniMalsArray)

aniMalsArray.push('ช้าง') //ใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ", aniMalsArray)

aniMalsArray.shift() // เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", aniMalsArray)

aniMalsArray.unshift('สิงโต') // ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", aniMalsArray)



const  fruits  = ["Banana" , "Orange", "apple", "Mango"]

fruits.sort() // เรียง A - Z

console.log("เรียง A-Z: ", fruits)

fruits.reverse( ) // เรียง Z - A

console.log("เรียง Z-A: ", fruits)

const FruitsSlice = fruits.slice(0,2)

console.log("ตัด: ", FruitsSlice)





const  NameL: string = "แสน , แสบ, สิน, สิง"

const NameLArray: string [] = NameL.split(',')

NameLArray.sort() //เรียง ก - ฮ

console.log ("เรียง ก-ฮ: ", NameLArray)

NameLArray.reverse( ) // เรียง ฮ - ก

console.log("เรียง ฮ-ก: ", NameLArray)

const NameLSlice = NameLArray.slice(0,2)

console.log("ตัด: ", NameLSlice)


const me = {

    firstName: 'Kiorn',
    LastName: 'Runan',
    age: 20 ,
    phone: '0630000000',
    Nationality: 'Thailand'
    
    
    }
    
    // ประวัติส่วนตัว
    // ชื่อ: คนดี
    // นามสกุล :รุ่งดาว
    // อายุ: 20
    //เบอร์โทร : 063000000
