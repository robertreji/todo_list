const btn_add=document.querySelector("#add")
const tasks=document.querySelector("#tasks")
let rmv_btns;
let todo=document.querySelector("#inpu_task")

btn_add.addEventListener("click",(evnt)=>
{

   
    let todo_task=todo.value
    if(todo_task==="")
    {
        alert("add something")
    }
    else{
  tasks.innerHTML+=    ` <div class=" bg-gray-100 rounded-3xl  h-[55px] pl-[16px] mt-[30px] ml-[30px] max-w-[80%] w-auto border-0 font-serif font-bold mb-10 flex  items-center">
  <div class="bg-white h-[25px] w-[25px] rounded-full border-s border-black"></div>
 <div class=" h-full w-3/4 whitespace-normal pl-[10px] flex items-center">
  <p>${todo.value}</p>
 </div>
 <div class="h-full  w-1/4">
  <button class=" bg-orange-500 w-32 h-14 rounded-3xl text-white font-serif font-bold hover:bg-red-500">remove</button>
 </div>
</div>`
todo.value=""
                tasks.addEventListener("click", (event) => {
                    if (event.target.tagName === "BUTTON" && event.target.textContent.trim() === "remove") {
                      event.target.parentElement.parentElement.remove();
                    }
                    else if(event.target.tagName==="DIV" && event.target.textContent.trim()==="")
                    {
                        event.target.parentElement.classList.add("bg-gradient-to-l", "from-green-100" ,"to-green-400")
                    }
                  });}
                  

})



