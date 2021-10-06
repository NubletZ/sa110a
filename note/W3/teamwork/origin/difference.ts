let array1 = [2,1]
let array2 = [2,3]

// Set() : 可以讓你儲存任何類型的唯一值
let array = new Set(array1)
let values = new Set(array2)

// filter() : 由該程式檢驗篩選後形成的新函數
let result = array1.filter((e)=>{
  return !values.has(e)    //has() : 在 Set() 物件中的存在與否回傳一個布林值
})

console.log("difference([4, 1], [2, 3]) = ",result)