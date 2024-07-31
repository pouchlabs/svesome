import { nanoid } from 'nanoid';
import jq from "jquery";


let drawers = jq(".btn")
drawers.each(el=>{
   let drawer =  jq(el);
   drawer.on("click",(ev)=>{
       ev.target.classList.add('xl')
    })
})

function toggleDrawer(id){
    let drawer =  jq(id);
 if(drawer.hasClass('show')){
    drawer.removeClass('show')
    drawer.parent().fadeOut();
 }else{
    drawer.parent().fadeIn();
    drawer.addClass('show')
    drawer.on('click',false);
    drawer.parent().on('click',(ev)=>{
       ev.stopPropagation()
        drawer.removeClass('show')
        drawer.parent().fadeOut();
    })
 }
}
function toggleModal(id){
    let modal =  jq(id);
 if(modal.hasClass('show')){

    modal.removeClass('show')
 }else{
    modal.addClass('show')
    modal.find('.modal-wrap').on('click',false);
    modal.on('click',(ev)=>{
       ev.stopPropagation()
        modal.removeClass('show')
    })
 }
}
function toggleDropdown(id){
    let modal =  jq(id);

    if(modal.hasClass('show')){
        modal.removeClass('show')
        console.log('yes')
    }else{
    modal.show()
    modal.addClass('show')
    modal.on('click',false);
    jq('body').on('click',(ev)=>{
       ev.stopPropagation()
        modal.removeClass('show')
    })
 }
 
}
export {
    toggleDrawer,
    toggleModal,
    toggleDropdown
}
