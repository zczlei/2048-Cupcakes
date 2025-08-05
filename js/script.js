

// 初始化应用
function initializeApp() {
    //setupLanguageSelector();
}


// 设置语言选择器
function setupLanguageSelector() {
    const languageSelector = document.getElementById('languageSelector');
    const languageModal = document.getElementById('languageModal');
    const closeLanguageModal = document.getElementById('closeLanguageModal');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // 点击🌐图标显示语言选择弹窗
    if (languageSelector) {
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            showLanguageModal();
        });
    }
    
    // 点击关闭按钮
    if (closeLanguageModal) {
        closeLanguageModal.addEventListener('click', function() {
            hideLanguageModal();
        });
    }
    
    // 点击遮罩层关闭弹窗
    if (languageModal) {
        languageModal.addEventListener('click', function(e) {
            if (e.target === languageModal) {
                hideLanguageModal();
            }
        });
    }
    
    // 处理语言选项点击
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            selectLanguage(this);
        });
    });
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && languageModal.classList.contains('show')) {
            hideLanguageModal();
        }
    });
}

// 显示语言选择弹窗
function showLanguageModal() {
    const languageModal = document.getElementById('languageModal');
    if (languageModal) {
        languageModal.style.display = 'flex';
        // 强制重绘
        languageModal.offsetHeight;
        languageModal.classList.add('show');
        
        // 防止页面滚动
        document.body.style.overflow = 'hidden';
        
        console.log('Language selection modal opened');
    }
}

// 隐藏语言选择弹窗
function hideLanguageModal() {
    const languageModal = document.getElementById('languageModal');
    if (languageModal) {
        languageModal.classList.remove('show');
        
        // 恢复页面滚动
        document.body.style.overflow = '';
        
        // 动画结束后隐藏弹窗
        setTimeout(() => {
            languageModal.style.display = 'none';
        }, 300);
        
        console.log('Language selection modal closed');
    }
}

// 选择语言
function selectLanguage(selectedOption) {
    console.log("selectLanguage")
    const languageOptions = document.querySelectorAll('.language-option');
    const languageName = selectedOption.querySelector('.language-name').textContent;
    const languageCode = selectedOption.getAttribute('data-lang');
    let type = selectedOption.getAttribute('data-type');
    //debugger;
    if(!type){
        type = getUrlParam("type");
    }
    console.log("selectLanguage.type",type)
    const cty = selectedOption.getAttribute('data-cty');
    
    // 移除所有选中状态
    languageOptions.forEach(option => {
        option.classList.remove('selected');
        const checkmark = option.querySelector('.language-check');
        if (checkmark) {
            checkmark.remove();
        }
    });
    
    // 添加选中状态到新选项
    selectedOption.classList.add('selected');
    const checkmark = document.createElement('span');
    checkmark.className = 'language-check';
    checkmark.textContent = '✓';
    selectedOption.appendChild(checkmark);
    
    // 显示选择提示
    //showToast(`Language changed to ${languageName}`, 'success');
    
    // 关闭弹窗
    hideLanguageModal();
    
    // 这里可以添加实际的语言切换逻辑
    //console.log('Selected language:', languageCode, languageName);
     console.log('Selected languageCode:', languageCode);
    // 模拟语言切换（实际项目中这里会重新加载页面内容）
    // changePageLanguage(languageCode);
     if('en' === languageCode){
        window.location.href="index.html"
     }else{
        window.location.href="lang.html?language="+languageCode+"&type="+type+"&cty="+cty
     }
    
}

function gotoLang(type){
    var lang = getUrlParam("language");
    var cty = getUrlParam("cty");
    window.location.href="lang.html?language="+lang+"&type="+type+"&cty="+cty
}
