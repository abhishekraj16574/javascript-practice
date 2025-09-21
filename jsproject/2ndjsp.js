const name = document.getElementById("name");

const tagscontainer= document.querySelector(".tags");
const addname = () =>{

  if(name.value==="")
    {
      return null;
    }
  

  const tag = document.createElement("div");
  tag.setAttribute("class","tag");

  tag.innerText = `hey, i am ${name.value}`;
  tagscontainer.append(tag);
}