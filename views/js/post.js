// ! TIP1:该写死的地方就写死
// ! TIP2：所有数据库来的数据都是要做特殊处理的

// DOM:1.获取触发的元素对象
//     2.绑定事件处理函数
var showData = function(data){
    // 3.获取需要修改的元素对象
    // 尝试用data-自定义属性，取代id
    var ul = document.querySelector('[data-id]');
    // 4.按照业务需求对元素对象进行修改
    // 4.2 用dom操作的方法
        // 4.2.1创建父级元素对象
        for (let item of data){
            var li = document.createElement('li');
            li.className = 'post-item';
            // 设置对象保护，不让id被遍历出来
            Object.defineProperty(item,'p_id',{
                writable: false,
                enumerable: false,
                configurable: false
            });
            // 第二层循环，遍历对象中的属性和属性值，并给到标签中
            for (let key in item){
                var div = document.createElement('div');
                if ('p_titles'== key){
                    // 创建a标签，将key值插入a标签中,并设置一个初始值
                    var a = document.createElement('a');
                    a.href = 'javascript:;'
                    a.innerHTML = item[key];
                    div.className = key;
                    div.appendChild(a);
                    li.appendChild(div);
                    continue;
                }
                div.innerHTML = item[key];
                div.className = key;

                li.appendChild(div);
            }
            ul.appendChild(li);
        }
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
