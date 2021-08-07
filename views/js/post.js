// 1.创建ajax函数，以便于可以向后台请求数据
var ajax = () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(4 == xhr.readyState){
            let result = JSON.parse(xhr.responseText);
            // test
            console.log(result);
        }
    }

    xhr.open('GET', '/users/post', true);
    xhr.send();
}

// 当窗口加载完成后，自动从后台获取数据库数据，并生成岗位列表
// 1.获取触发的元素对象
// 2.绑定事件处理函数
window.onload = function(){
    // 3.获取需要修改的元素对象
    var ul = document.getElementById('post-item');
    // 4.按照业务需求对元素对象进行修改
    // 将从数据库中获得的data对应给到li

}