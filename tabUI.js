
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabUI = $$('.Tab-UI');
const tabPane = $$('.tab-pane');
tabUI.forEach((tab,index)=>{
    const pane = tabPane[index];
    tab.onclick = function(){
        const getI = tab.getElementsByTagName('i');
        console.log(tab);
        $('.Tab-UI.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
        getI[0].classList.toggle('active-child');
        console.log(getI[0]);
        getI[0].onclick = function(e){
            e.stopPropagation();
        }
    }
})
