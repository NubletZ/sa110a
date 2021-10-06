# ._difference(傳統模式)

## 先寫程式，在測試
* 首先先了解要求甚麼 : 此程式主要是比較前後兩個陣列的差異
* 傳統模式是要寫完程式，看結果是否符合期待

### 從 [lodash](https://lodash.com/docs/4.17.15#difference) 中得知所需功能

    ```
    Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
    //此程式主要是比較前後兩個陣列的差異，也就是交集
    ```
### 程式部分

    ```
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
    ```

### 觀察執行結果

* 然後確認執行結果與預期結果符合

    ```
    PS D:\Vscode\sa110\sa110a\note\W2\HW(2021_09_22)\_.difference> deno run difference.js  
    difference([4, 1], [2, 3]) =  [ 1 ]
    ```




