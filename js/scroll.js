document.addEventListener("DOMContentLoaded", function () {
    var nav2 = document.querySelector(".nav-2");

    window.addEventListener("scroll", function () {
        // スクロール位置が一定以上の場合にクラスを追加
        if (window.scrollY > 0) {
            nav2.classList.add("fixed-nav");
        } else {
            nav2.classList.remove("fixed-nav");
        }
    });
});
