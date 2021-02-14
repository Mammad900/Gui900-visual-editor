/**
 * 
 * @param {JQuery<HTMLElement>} one 
 * @param {JQuery<HTMLElement>} two 
 */
function swapBox(one, two, areDirectSiblings=false) {
    var par=one.parent();
    var i=par.children().index(one);
    one.detach();
    if(i!=0){
        two.after(one);
    }else{
        two.before(one);
    }
    two.detach();
    if(i==0){
        par.prepend(two);
    }else{
        par.append(two);
    }
}