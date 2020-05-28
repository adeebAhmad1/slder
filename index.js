let i = 0;
const array = [{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero ratione consequuntur blanditiis deserunt necessitatibus praesentium possimus, quo at repellendus quam, officia labore optio tempora minima commodi vero esse corporis?"
},{
  title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium fugiat ex rerum modi. Unde, ut commodi quo laborum non repellendus nulla neque facere iste nemo, voluptate aperiam. Eaque, dicta!"
},{
  title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ratione dolorum obcaecati delectus aliquid minima soluta aut vitae quis debitis. Qui enim facere laboriosam iusto laborum exercitationem nam assumenda dolor!"
},{
  title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In id similique labore hic, adipisci consequuntur facere quaerat sit a, minus dignissimos delectus necessitatibus doloremque, amet qui sapiente. Veritatis, enim tempora."
},{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error officiis facilis dolor optio porro nulla molestias ipsum at? Delectus pariatur officiis esse hic, fuga id architecto odit aut voluptates!"
}
];

const setMarkup = ()=>{
  const myDiv = document.querySelector('.slider');
  const dotsDiv = document.querySelector('.dots');
  window.markup = `<div class="slider_item"><div class="slider_text">${array[i].title}  </div></div>`;
  const buttons = array.map((el,index)=>`<span data-index="${index}" class="my_dot ${i === index ? "active" : ""}"></span>`).join("");
  dotsDiv.innerHTML = buttons;
  myDiv.innerHTML = window.markup;
  if(i+1 === array.length){
    i = 0;
  } else{
    i++
  }
}
setMarkup()
const setMyInterval = ()=>{
  window.interval = setInterval(setMarkup, 3000);
}

setMyInterval();
window.addEventListener("click",(e)=>{
  const { target } = e; 
  if(target.classList.contains("my_dot")){
    clearInterval(window.interval);
    i = +target.dataset.index;
    setMarkup()
    setMyInterval()
  }
})