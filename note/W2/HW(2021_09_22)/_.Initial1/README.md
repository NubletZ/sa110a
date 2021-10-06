# _.Initial (BDD)

### 參考資料:[BDD/TDD](https://tw.alphacamp.co/blog/bdd-tdd-cucumber-behaviour-driven-development)

### [Initial](https://lodash.com/docs/4.17.15#initial)網站

### 需求: 需要安裝behave，使用 `pip install behave`

### BDD : 先寫規格，在寫測試，最後寫程式

1. 規格 : 從[lodash](https://lodash.com/docs/4.17.15#difference)找出所需

    ```
    //Initial.feature

    Feature: Pop the last number

    Scenario: Pop the last number in list
    Given we have a list of values
    When we pop the last value
    Then we will get the new list 
    ```

2. 測試 
    ```
    // test.py

    from behave import *
    from Initial import Initial
    use_step_matcher('re')

    @given(u'we have a list of values')
    def step_impl(context):
        context.array = [4, 2, 8, 6]

    @when(u'we pop the last value')
    def step_impl(context):
        context.array = Initial(context.array)

    @then(u'we will get the new list')
    def step_impl(context):
        assert(context.array)
    ```

3. 寫程式

    ```
    // Initial.py

    #array = [1,2,3]
    def Initial(array):
    array.pop()
    return array
    ```

4. 執行(結果)
    ```
    PS D:\Vscode\sa110\sa110a\note\W2\HW(2021_09_22)\_.Initial1\features> behave  ./Initial.feature
    Feature: Pop the last number # Initial.feature:1

    Scenario: Pop the last number in list  # Initial.feature:3
        Given we have a list of values       # steps/test.py:5
        When we pop the last value           # steps/test.py:9
        Then we will get the new list        # steps/test.py:13

    1 feature passed, 0 failed, 0 skipped
    1 scenario passed, 0 failed, 0 skipped
    3 steps passed, 0 failed, 0 skipped, 0 undefined
    Took 0m0.000s
    ```



