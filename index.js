let superagent = require('superagent');
// let Tohr_opt = require('./tohr');

let params = {
    classify_type: 'cate_all',
    sort_type: 0,
    price_type: 0,
    support_online_pay: 0,
    support_invoice: 0,
    support_logistic: 0,
    page_offset: 21,
    page_size: 20,
    uuid: '3aFAkLdBRnyuNNTIumN4AGNJgutSP2H0FjH0rHzxeKGjrFcH_eGGHBwrLcRqeCde',
    platform: 1,
    partner :4,
    originUrl: 'http%3A%2F%2Fwaimai.meituan.com%2Fhome%2Fws07ntm3vd8z',
};

superagent
    .post('http://waimai.meituan.com/ajax/poilist?' + getToken(params))
    .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36')
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Referer', 'http://waimai.meituan.com/home/ws07ntm3vd8z')
    .set('Cookie', `w_uuid=3aFAkLdBRnyuNNTIumN4AGNJgutSP2H0FjH0rHzxeKGjrFcH_eGGHBwrLcRqeCde; _ga=GA1.3.1764442111.1508042042; _gid=GA1.3.1477051409.1508042042; __mta=151295494.1508042042366.1508042056810.1508042749580.3; w_visitid=aa9d716c-785f-4d5b-a478-cbde26b8e623; w_cid=440605; w_cpy_cn="%E5%8D%97%E6%B5%B7%E5%8C%BA"; w_cpy=nanhaiqu; waddrname="%E4%B8%BD%E9%9B%85%E8%8B%91"; w_geoid=ws07ntm3vd8z; w_ah="23.05649785324931,113.14465384930372,%E4%B8%BD%E9%9B%85%E8%8B%91"; JSESSIONID=nogs8690zj1crj25lhbthoh5; w_utmz="utm_campaign=(direct)&utm_source=(direct)&utm_medium=(none)&utm_content=(none)&utm_term=(none)"`)
    .send(params)
    .then(function(resDta) {
        console.log(resDta.text);
    }, function(error) {
        console.log(error);
    });

function getToken(params) {
    let pstr = Object.keys(params).map(k => k + '=' + params[k]).join('&');
    
    return '_token=' + 'eJx90NFumzAUBuB34TaoGAwYR6omMkpL06SEEJJ06oUDZLiEQMGBhGnvPqBbrPZivvGnc479S eXUDqRMJZBd5AosKqzBgyg6khVDMMQhfBTDWNFFYVdGVjC IeMFSDqELz2Fa8rfFTkbvZV/Getc/dGUfsppxsSEsaKsSQ1hGaE3mQxZSdyvAnzTEryLJaaCqAjy2AdGa0g/meahGFcVU80o xb12bLOMyPUXWrCF1U5vdRWIeijGTc/YN17TMVwCkP1DkRp/GFykB8JZJ7woEKJ RUOfUvVAciToMTX2mAntpAmVPhhJxDmj5wiEADESe Eg//GgMVTsipfrBbaNovtLvJdbEQAtFygr7J/jYr vMojIX48Tx/C VpA8yVx0YHernsZkuQN/RMHC TJ9NMf8h3j/6mLCXr0BatrcV0ZuuxipLG3S TU3BXE7/4npqyWpjTbDZ9gLaJz ncPd/bZ SEdvBuk4Y5610m43JrxIv6kM0pdtBJi0zc3kULE9QRNk9PAfRWfluZJUvNdKLZNVXMFfY1UicLbx5c6vWLbRTuKFpIiRVNYunR2t PzDs/32keTA7AcZ6JXaRtdLy86Qxu8qjawxd/h08zTYEEEfy cSIXrS/Bdu9tK1qnD5uCteXTegEsj7oGsdwjslZNXG6k9vBCm1vh9x/ppO2n';
}