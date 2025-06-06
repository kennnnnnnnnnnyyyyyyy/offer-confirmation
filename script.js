// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const detailsButton = document.querySelector('.details-button');
    
    // 添加点击事件监听器
    detailsButton.addEventListener('click', function() {
        // 按钮点击效果
        this.classList.add('button-clicked');
        
        // 300毫秒后跳转到第二个Offer页面
        setTimeout(() => {
            window.open('http://www.offerdetail.bytedence.cn', '_blank');
        }, 300);
    });
});

