function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let cusName = customers.length
  for (let i = 0; i < cusName - 1; i++) {
    for (let j = 0; j < cusName - i - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let result = customers[j]
        customers[j] = customers[j + 1]
        customers[j + 1] = result
      }
    }
  }
  return customers
}
let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
// ตอบคำถามตรงนี้จ้า

// Big O คือ o(n**2) เพราะมรการสลับตำแหน่งกันของรายชื่อโดยใช่ 2 loop เหมือนการทำงานแบบ 2 ต่อ คือ ทั้งวนหาชื่อ และ วนจัดตำแหน่ง ใน 1 function 