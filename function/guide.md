# Function

## Import 方法

```js
import * as func from "./function/func.js";
```

### 目錄

* [login](#login)

---

## login

用法 :

```js
func.login("id", "password").then(data => {
    if (!data.error) {
        /*\
        格式:
        data.資料
        \*/
        console.log(data.status);
        console.log(data.cookie);
    }
    else {
        console.error(data.error);
    };
});
```

> `data` 為 Object
>
> `data` 中所有的資料型態均為 string

當過程正常時，輸出將包含 2 個內容 :

- data
    - status
        - 0 (正常登入)
        - 1 (帳號錯誤)
        - 2 (密碼錯誤)
    - cookie

當過程發生錯誤時，輸出為 error :

- data
    - error
        - network error 1 (初步獲取 Cookie 失敗)
        - network error 2 (登入時發生錯誤)

---

# Page

## Import 方法

```js
import * as page from "./function/page.js";
```

### 目錄

* [indexpage](#indexpage)
* [loginpage](#loginpage)

---

## indexpage

用法 :
- 需要搭配 login 使用

```js
page.indexpage(data.cookie).then(data => {
    if (!data.error) {
        /*\
        格式:
        data[id].資料
        \*/
        console.log(data[1].text);
    }
    else {
        console.error(data.error);
    };
});
```

> `data` 為 Object
>
> `data` 中所有的資料型態均為 string

當過程正常時，輸出將包含 15 個內容 :

- data
    - 1
        - text (名字)
    - 2
        - text (學號)
    - 3
        - imgurl (頭像 URL)
    - 4
        - text (學生即時資訊)
        - url
    - 5
        - text (缺曠、成績、獎懲、校車)
    - 6
        - text (即時課表)
        - url
    - 7
        - text (學期記錄查詢)
        - url
    - 8
        - text (學期成績、在校健檢資料)
    - 9
        - text (教室日誌)
        - url
    - 10
        - text (學生線上請假)
        - url
    - 11
        - text (訊息通知)
    - 12
        - text (未繳費項目)
        - url
    - 13
        - text (雲端列印2.0)
        - url
    - 14
        - text (明道雲城(EStore))
        - url
    - 15
        - text (國中生涯輔導紀錄)
        - url

當過程發生錯誤時，輸出為 error :

- data
    - error
        - network error 1 (取得資訊時發生錯誤)

---

## loginpage

> ***未完成***

用法 :
- 需要搭配 login 使用

```js
page.loginpage().then(data => {
    if (!data.error) {
        /*\
        格式:
        \*/
        console.log();
    }
    else {
        console.error(data.error);
    };
});
```

> `data` 為 Object
>
> `data` 中所有的資料型態均為 string