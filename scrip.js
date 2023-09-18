const wraper = document.querySelector('.wraper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');



 registerlink.addEventListener('click', ()=>{
    wraper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wraper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    wraper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=>{
    wraper.classList.remove('active-popup');
});
/*var quocanh = 'bạn muốn quay lại trở lại home?';//khai báo biến
alert(quocanh);// hiện thông báo khi bấm vào home*/
setTimeout(function(){ /* thông báo hiện lên sau 1s=1000 */
    prompt('Hello');// in thông báo text điền
}, 1000)
