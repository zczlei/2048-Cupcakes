function getLanguage(){
	var language = navigator.language || navigator.userLanguage || "en-US"; //常规浏览器语言和IE浏览器
	var cty = 'CN'//language.split("-")[1]; //获取地区 如US
	var lang = language.split("-")[0]; //获取语言 如en
    //console.log("tool.language",language)
	if(language == 'zh-CN' || language == 'zh' || language == 'zh-TW'){
		lang = 'en';
	}
	if(lang == undefined){
		lang = 'en';
	}
	return {
		lang,
		cty
	}
}

function translateTime(n) {
	let now = new Date(n),
		y = now.getFullYear(),
		m = now.getMonth() + 1,
		d = now.getDate();
	return (
		y +
		"-" +
		(m < 10 ? "0" + m : m) +
		"-" +
		(d < 10 ? "0" + d : d) +
		" " +
		now.toTimeString().substr(0, 8)
	);
}
function toBase64( _str ){
	//字符串转base64，转为二级制（补全8位），然后按照6位（最高64）分割，然后补充后导0，添加=
	let code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
		str = _str,
		res = '',
		binaryStr = '';
	for(let i=0,max = str.length;i<max;i++){
		let temp = str.charCodeAt(i).toString(2);
		binaryStr += new Array(9 - temp.length).join('0') + temp;
	}
	let tail = binaryStr.length % 6,
		left = binaryStr.substr(0,binaryStr.length - tail),
		right = binaryStr.substr(binaryStr.length - tail,binaryStr.length);
	//left first
	for(let i=0,max=left.length;i<max;i+=6){
		let temp = left.substr(i,6);
		let index = parseInt(temp,2);
		res += code[index];
	}
	//right after
	if(tail){
		right = right + new Array(7-right.length).join('0');
		res += code[parseInt(right,2)];
		//根据题目要求，去掉=
		res += new Array((6 - tail)/2 + 1 ).join('=');
	}
	return res;
  }
function timestampToDate(timestamp) {
    //timestamp = 1736327349000;
    var date = new Date(timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = date.getFullYear();
    var month = date.getMonth(); // 月份是从0开始的，所以需要加1
    var day = date.getDate();
    //console.log("month",month)
    return months[month] + ' ' + day + ' ' + year;
}
function getAuth(item){
    //console.log("getAuth item",item)
    var auth = '';
    if(item != null){
        if(item.type == 'boseai-news'){
            if(item.additional.author == "Ai.Boser"){
                auth = "Boser"
                return auth
            }else{
                auth = item.additional.author;
                return auth
            }
        }else if(item.additional.contentSourceDisplay != ""){
            auth = item.additional.contentSourceDisplay
            return auth
        }else{
            auth = item.type
            return auth
        }
    }else{
        return auth;
    }
}

function getDetailAuth(item){
    var auth = '';
    if(item.author == 'News.AI'){
        auth = "Boser"
        return auth
    }else{
        auth = item.author
        return auth
    }
}

function getSource(source){
    if(source == 'News.AI'){
        return "Boser"
    }else{
        return source
    }
}

function gotoDetail2(id,language,type){
    // 设置跳转标志
    window.isNavigating = true;
    
    // 立即移除滚动事件监听器
    $(window).off('scroll');
    
    // 清除任何待处理的超时
    if (window.scrollLoadTimeout) {
        clearTimeout(window.scrollLoadTimeout);
    }
    
    // 直接跳转，不进行任何其他操作
    window.location.href = 'detail2.html?id='+id+'&language='+language+'&type='+type;
}

function gotoDetail3(id,language,type){
    // 设置跳转标志
    window.isNavigating = true;
    
    // 立即移除滚动事件监听器
    $(window).off('scroll');
    
    // 清除任何待处理的超时
    if (window.scrollLoadTimeout) {
        clearTimeout(window.scrollLoadTimeout);
    }
    
    // 直接跳转，不进行任何其他操作
    window.location.href = 'detail3.html?id='+id+'&language='+language+'&type='+type;
}

function gotoDetail(id,language,type){
    console.log("gotoDetail.id",id)
    console.log("gotoDetail.language",language)
    console.log("gotoDetail.type",type)
    
    // 设置跳转标志
    window.isNavigating = true;
    
    // 立即移除滚动事件监听器
    $(window).off('scroll');
    
    // 清除任何待处理的超时
    if (window.scrollLoadTimeout) {
        clearTimeout(window.scrollLoadTimeout);
    }
    
    // 直接跳转，不进行任何其他操作
    window.location.href = 'detail.html?id='+id+'&language='+language+'&type='+type;
}

function gotoHome(){
    window.location.href= './'
}

function gotoDetailLatest(id,language){
    window.location.href= 'latest_detail.html?id='+id+'&language='+language
}

function gotoDetailLink(url){
    // 设置跳转标志
    window.isNavigating = true;
    
    // 立即移除滚动事件监听器
    $(window).off('scroll');
    
    // 清除任何待处理的超时
    if (window.scrollLoadTimeout) {
        clearTimeout(window.scrollLoadTimeout);
    }
    
    // 直接跳转，不进行任何其他操作
    window.location.href = url;
}

function getDetail(id,itemType){
    if(id && id != "" && id != undefined && itemType=='boseai-news'){
        return 2;
    }else if(id && id != "" && id != undefined && itemType !='boseai-news'){
        return 1
    }else{
        return 0;
    }
}

function goto(type){
    if(type == 1){
        window.location.href="about_us.html"
    }
    if(type == 2){
        window.location.href="contact_us.html"
    }
    if(type == 3){
        window.location.href="privacy_disclaimer.html"
    }
    if(type == 4){
        window.location.href="term_condition.html"
    }
    if(type == 5){
        window.location.href="user_agreement.html"
    }
    if(type == 6){
        window.location.href="privacy_policy.html"
    }
}

function onSearch(val) {
    window.open(
        'https://www.google.com/search?q='+val,'_blank'
    );
}

function gotoLatest(){
    window.location.href="latest.html"
}

function gotoChannel(channel,cty){
    var ch = encodeURIComponent(channel);
    window.location.href="channel.html?cty="+cty+"&channel="+ch
}

function getCategories(cateArr){
    var typeValue = "";
    for(var j=0;j<cateArr.length;j++){
        if(cateArr[j] != 'home1'){
            typeValue = cateArr[j];
            break;
        }
    }
    
    return typeValue;
}


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

// 主题颜色切换功能
function uch(element, theme) {
    // 移除所有span的active类
    const allSpans = document.querySelectorAll('#csbtns span');
    allSpans.forEach(span => {
        span.classList.remove('active');
    });
    
    // 给当前点击的span添加active类
    element.classList.add('active');
    
    // 根据主题修改游戏容器的背景色
    const gameContainer = document.querySelector('.game-container');
     const themeColors = {
        'default': '#bbada0',
        'pink2': '#c44569',
        'red': '#c0392b',
        'yellow': '#f39c12',
        'blue': '#2980b9',
        'blue2': '#574b90',
        'violet': '#8e44ad',
        'green': '#16a085',
        'green2': '#27ae60',
        'black': '#2c3e50'
    };
    
    if (themeColors[theme]) {
        gameContainer.style.background = themeColors[theme];
    }
    
    console.log('主题已切换到:', theme);
}
