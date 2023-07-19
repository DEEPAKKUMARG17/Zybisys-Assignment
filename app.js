
let btn=document.getElementById("submit");
let list=document.getElementById("listcontent")
let updatebtn=document.getElementById("updated")
var arr=[]
function additems(title,content)
{
    let obj={
        title,
        content,
    }
    arr.push(obj)
}
btn.addEventListener("click",(event)=>
{
    console.log("hello")
    event.preventDefault();
    let title=document.getElementById("title").value;
    let content=document.getElementById("content").value;
    additems(title,content)
    addcards(title)
    document.getElementById("title").value=""
    document.getElementById("content").value=""
})
function addcards(title)
{
    console.log(title)
    let maincont=document.createElement("div");
    maincont.setAttribute("class","maincont");
    let subcontainer=document.createElement("div");
    subcontainer.setAttribute("class","subcont");
    subcontainer.setAttribute("onclick","showcard(this)");
    let para=document.createElement("p");
    para.setAttribute("id","subpara")
    let element=arr.find((val)=>
    {
       return val.title===title
    })
    console.log(element);
    para.innerHTML=element.title
    let updatebutton =document.createElement("button");
    updatebutton.setAttribute("onclick","fun(this)");
    updatebutton.innerHTML="delete"
    subcontainer.appendChild(para);
    maincont.appendChild(subcontainer);
    maincont.appendChild(updatebutton);
    list.appendChild(maincont)
    console.log(maincont)

}
function fun(rem)
{
    console.log(rem.parentNode.firstElementChild)
// rem.parentNode.remove();
}
function showcard(pan)
{
    let marker=pan.firstElementChild.innerHTML;
    let showelement=arr.find((val)=>{
        return val.title===marker
    })
    let showtitle=document.getElementById("titlepopup");
    let showcontent=document.getElementById("description");
    showtitle.value=showelement.title;
    showcontent.value=showelement.content;
    popup.style.display="block"
    popupbg.style.display="block"
}
// window.addEventListener("click",(event) => {
//     if(event.target == popupbg){
//         closePopup()
//     }
// })
// function closePopup()
// {
//     popup.style.display="none"
//     popupbg.style.display="none"
// }
 function update(clr)
 {
    console.log(clr)
 }