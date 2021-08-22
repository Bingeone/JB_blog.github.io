//load issue data completely execute
function loadPjax() {
    if (typeof Pjax === "function") {
        var pjax = new Pjax({
            elements: "a",//代表点击链接就更新
            selectors: [  //代表要更新的节点
                ".section",
                "title"
            ],
            cache: true,
            cacheBust: false
        })
        document.addEventListener('pjax:complete', function () {
        });
    }
}
