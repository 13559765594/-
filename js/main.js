let search = ()=>{
    let header = document.querySelector('.jd-header .jd-header-box');
    let banner = document.querySelector('.jd-banner');

    let height = banner.offsetHeight;

    let opacity = 0;

    window.onscroll = ()=>{
        let ttop = document.body.scrollTop || document.documentElement.scrollTop;
        if (ttop > height) {
            opacity = 0.85;
        }else{
            opacity = (ttop / height) * 0.85;
        }
        header.style.backgroundColor =  `rgba(201,21,35,${opacity})`;
    }
}