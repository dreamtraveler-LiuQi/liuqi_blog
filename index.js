(function () {
    var map = {};
    //采用递归调用的方法
    function fds(node) {
        if (node.nodeType === 1) {
            //用nodeName属性，直接获取节点的节点名称
            var tagName = node.nodeName;
            //判断对象中存在不存在同类的节点，若存在则添加，不存在则添加并赋值为1
            map[tagName] = map[tagName] ? map[tagName] + 1 : 1;
        }
        //获取该元素节点的所有子节点
        var children = node.childNodes;
        for (var i = 0; i < children.length; i++) {
            //递归调用
            fds(children[i])
        }
    }
    fds(document);
    console.log(map)
})();