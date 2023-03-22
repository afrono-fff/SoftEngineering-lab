window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    });

    document.getElementById('input-text').addEventListener('keydown',enterSearch);

    var labels = document.getElementById('top-left').children;
    for(var i=0;i<document.getElementById('top-left').children.length;i++){
        if(labels[i].href[4]==':'){
            labels[i].classList.add("http");
        }
    }
}

function search() {
    // TODO: 搜索触发后的行为
    var text = document.getElementById("input-text");
    // alert(text.value);
    if(text.value==''){
        window.alert("请输入搜索内容");
    }else{
        window.alert(text.value);
    }
    console.log('1');
}

function enterSearch(event){
    if(event.keyCode == 13){
        var text = document.getElementById("input-text").value;
        window.location.href = "https://www.baidu.com/s?wd="+text;
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug

    let username = Kernal.getUserName();
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"> </span>
                    </div>`;
    document.getElementById('top-right').innerHTML = content;
    document.getElementById('name').textContent = `${username}`;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}