# ._subtract(TDD)

### 參考資料:[BDD/TDD](https://tw.alphacamp.co/blog/bdd-tdd-cucumber-behaviour-driven-development)

### TDD:先寫測試在寫程式

1. 寫測試: 
    1. 參考[lodash](https://lodash.com/docs/4.17.15#subtract)
        ```
        Subtract two numbers.
        _.subtract(minuend, subtrahend)

        minuend (number): The first number in a subtraction.
        subtrahend (number): The second number in a subtraction.
        ```
    
    2. 測試
        ```
        from _sub import sub

        print("subtract(minuend, subtrahend) = ",sub(6,4))

        ```

2. 寫程式
    ```
    def sub(minuend,subtrahend):    
        return minuend-subtrahend
    ```

3. 測試

    ```
    [Running] python -u "d:\Vscode\sa110\sa110a\note\W2\HW(2021_09_22)\._subtract\_subtest.py"
    subtract(minuend, subtrahend) =  2

    [Done] exited with code=0 in 0.109 seconds
    ```

