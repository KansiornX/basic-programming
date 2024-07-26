function helloWorld () {
  console.log ("สวัดดี")
 
 }
 
 helloWorld ()
 
 function helloName(name:string) {
  console.log(name)
 
 }
 helloName('sorn')
 
 function getPi() {
  return 3.14
 
 }
 
   console.log (getPi())
 
 
 
 
  function st (fname :string,sname:string) {
  
   if(fname ==='mix'&& sname==='zane') {
 
     console.log('เริ่มสอน')
 
   } else { 
     console.log('ไม่สอน')
 
   }
 }
  st ('max','zane')
 
 
 
  function hp (mname: string, zname: string, Pname: string) {
 
     if(mname ==='mix'&& zname === 'zane' || Pname === 'forth' ) {
      console.log ('พร้อมเรียน')  
 
 } else {
 
      console.log('ยังไม่พร้อม')
 }
  } hp('mix','zane','forth')
 
 
 
 
 
 function soldier (gender:string,height:number,weight:number) {
     if(gender ==='man'&& height >170 || weight>50 && weight <= 110){
     console.log('จับใบดำใบแดง')
     
     }else {
     console.log ('ไม่เข้าเกณฑ์')
     
 }
 }
 soldier('man',170,110)
 
 
 
 
 
 
 
 function Wallet  (Age:number,salary:number,Total:number) {
    if(Age >= 16 && salary < 70000 && Total < 500000){
     console.log('รับ10000') 
 
 }else {
     console.log('อด...')
 
 }
 
 }
 
 Wallet (16,70000,500000)
 
 
 
 
 
 
 
  
 
 