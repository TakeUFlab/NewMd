import fetch from 'node-fetch';
import axios from 'axios';
import iconv from 'iconv-lite';
import cheerio from 'cheerio';

export async function loginpage() {
    let data = new Object();

    data = await axios.get(`http://www.mingdao.edu.tw/homeX/Web/?stu`
    ).then(response => {
        if (response.status == 200) {
            let data;
            let $ = cheerio.load(response.data);
            let a = $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(3) > a.style11");
            let b = $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(7) > div > a:nth-child(4)");
            let c = $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > div > span.style44 > a");
            let d = $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(5) > td > div > a.style44");
            let e = $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(5) > td > div > span:nth-child(5) > a:nth-child(1)");

            data = {
                1: {
                    text: a.text(),
                    link: a.attr('href')
                },
                2: {
                    text: b.text(),
                    link: b.attr('href')
                },
                3: {
                    text: c.text(),
                    link: c.attr('href')
                },
                4: {
                    text: d.text(),
                    link: d.attr('href')
                },
                5: {
                    text: `大學繁星推薦校內志願預選系統`,
                    link: e.attr('href')
                }
            };
            return data;
        }
        else {
            return {
                error: "network error"
            };
        };
    })
    return data;
}

loginpage().then(data => {
    if (!data.error) {
        console.log(data);
    }
    else {
        console.log(data.error);
    };
});