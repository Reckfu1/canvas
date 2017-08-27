var btn=document.getElementById('toggle-btn')
var control=document.getElementById('control')
var flag=true;

btn.addEventListener('click',function(){
    if(flag){
        control.style.left='0'
        flag=!flag
    }
    else{
        control.style.left='-230px'
        flag=!flag
    }
})

// 粒子选择
var circleBtn=document.querySelector('.circle')
var blockBtn=document.querySelector('.block')

function pick(shapeName){
    // console.log(shapeName)
    shapeName.addEventListener('click',function(){
        this.style.backgroundColor = '#F96D00'
        this.style.color= '#000';
        (shapeName==circleBtn?blockBtn:circleBtn).style.backgroundColor= 'rgba(0, 0, 0, 0)';
        (shapeName==circleBtn?blockBtn:circleBtn).style.color= 'gray';
        type = (type === "ball" ? "rect" : "ball");
        change();
    })
}

pick(circleBtn)
pick(blockBtn)