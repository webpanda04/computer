// main_ul点击事件
const getMainUl = document.querySelector('main ul');
const getArticle = document.querySelectorAll('article');

getMainUl.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        const n = +ev.target.dataset.id; // 获取点击的li的data-id值
        // 切换选中状态
        document.querySelector('main ul .bacolor').classList.remove('bacolor');
        ev.target.classList.add('bacolor');
        // 切换显示对应的article
        for (let i = 0; i < getArticle.length; i++) {
            getArticle[i].classList.remove('open');
        }
        getArticle[n - 1].classList.add('open');
        //获取下标切换
    }
});