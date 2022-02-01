import axios from "axios";

export async function getIndex(cookie:string) {
    try{
        const res = axios.get(`https://md-apps.herokuapp.com/mdcloud/stdData/${cookie}`);
        return (await res).data
    }catch(err) {
        console.log('getIndex wrong');
        console.error(err);
    }
}

/**
 * {
  '1': { text: '葉柏辰' },
  '2': { text: '81Y603' },
  '3': {
    imgurl: 'https://asp.mingdao.edu.tw/php/std/stu_photo/31935263.jpg'
  },
  '4': {
    text: '學生即時資訊',
    url: 'http://crm.mingdao.edu.tw/crm/search_setup1.asp?stu_id=B123793073&md_sess=487003107'
  },
  '5': { text: '缺曠、成績、獎懲、校車' },
  '6': {
    text: '即時課表',
    url: 'http://libauto.mingdao.edu.tw/AACourses/Web/wLogin.php?session=2BJE5YUPB16O3O9&wRole=STD'
  },
  '7': {
    text: '學期記錄查詢',
    url: 'http://crm.mingdao.edu.tw/crm/search_setup2.asp?stu_id=B123793073&md_sess=487003107'
  },
  '8': { text: '學期成績、在校健檢資料' },
  '9': {
    text: '教室日誌',
    url: 'http://crm.mingdao.edu.tw/crm/class_diary.asp?org_code=B123793073'
  },
  '10': {
    text: '學生線上請假',
    url: 'http://crm.mingdao.edu.tw/crm/S2.asp?stu_id=B123793073&kind=2'
  },
  '11': { text: '訊息通知' },
  '12': {
    text: '有 1 項未繳費項目',
    url: 'http://crm.mingdao.edu.tw/crm/search_stu_acc.asp?stu_id=B123793073'
  },
  '13': {
    text: '雲端列印2.0',
    url: 'http://crm.mingdao.edu.tw/crm/print_check.asp'
  },
  '14': {
    text: '明道雲城(EStore)',
    url: 'http://crm.mingdao.edu.tw/crm/../EStore_new/index.asp'
  },
  '15': {
    text: '國中生涯輔導紀錄',
    url: 'http://crm.mingdao.edu.tw/crm/ju.asp?stu_id=B123793073&po=0'
  }
}
 */