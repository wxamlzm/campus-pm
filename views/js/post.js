// DOM:1.获取触发的元素对象
//     2.绑定事件处理函数
var showData = function(data){
    // 3.获取需要修改的元素对象
    // 尝试用data-自定义属性，取代id
    var ul = document.querySelector('[data-id]');

    // 4.按照业务需求对元素对象进行修改
    // 4.1用innerHTML的方法
    // 将从数据库中获得的data对应给到li
    var strLi = ''
    for (let item of data){
        strLi += `
        <li class="post-item">
            <div class="post-title"><a href="#">${item.p_titles}</a></div>
            <div class="post-type">
                <span>${item.p_types}</span>
            </div>
            <div class="post-location">
                <span>${item.p_localtion}</span>
            </div>
        </li>
        `;
    }
    ul.innerHTML = strLi;

}

// AJAX:1.创建ajax函数，以便于可以向后台请求数据
var ajax = () => {
    var xhr = new XMLHttpRequest();
    // 4.监听
    xhr.onreadystatechange = () => {
        if(4 == xhr.readyState){
            var result = JSON.parse(xhr.responseText);
            var data = result.data;
            console.log(data);
            showData(data);
        }
    }
    // 创建请求
    xhr.open('GET', '/users/post', true);
    // 发送请求
    xhr.send();
}

ajax();
