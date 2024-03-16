const data = [
  {
    id: "d1",

    name: "PHP",

    parentId: null,

    controlId: "PHP",
  },

  {
    id: "d2",

    name: "HR",

    parentId: null,

    controlId: "HR",
  },

  {
    id: "d3",

    name: "Account",

    parentId: null,

    controlId: "Account",
  },

  {
    id: "d4",

    name: "Document",

    parentId: null,

    controlId: "Document",
  },

  {
    id: "E1",

    name: "Mihir",

    parentId: "d1",

    controlId: "Mihir",
  },

  {
    id: "E2",

    name: "Rutul",

    parentId: "d2",

    controlId: "Rutul",
  },

  {
    id: "E3",

    name: "Rahul",

    parentId: "d1",

    controlId: "Rahul",
  },

  {
    id: "E4",

    name: "Sachin",

    parentId: "d1",

    controlId: "Sachin",
  },

  {
    id: "E5",

    name: "Mahesh",

    parentId: "d2",

    controlId: "Mahesh",
  },

  {
    id: "E6",

    name: "Akash",

    parentId: "d3",

    controlId: "Akash",
  },

  {
    id: "E7",

    name: "Sunil",

    parentId: "d4",

    controlId: "Sunil",
  },

  {
    id: "E8",

    name: "Rakesh",

    parentId: "d1",

    controlId: "Rakesh",
  },

  {
    id: "E9",

    name: "Karan",

    parentId: "d4",

    controlId: "Karan",
  },
];

let obj = [];

const table = document.getElementById("tbody");
const body = document.getElementById("body");
const btn = document.getElementById("submit");
function viewData(){
  data.forEach(element => {
    const hardCircle = document.createElement("ul");

    const circle = document.createElement("ul");
    const chekbox = document.createElement("input");
    const li = document.createElement("li");
    const lable = document.createElement("label");
    
   
    if(element.id.includes("d")){


    circle.setAttribute("type","");
    hardCircle.setAttribute("type","circle");
    chekbox.setAttribute("type","checkbox")
    chekbox.setAttribute("value",`${element.name}`)
    chekbox.setAttribute("id",`${element.id}`);
    chekbox.setAttribute("name","department");
    chekbox.setAttribute("onchange",`setChildSelect(${element.id})`);
    lable.setAttribute("for","department");
    lable.append(`${element.name}`);
    // chekbox.append(`${element.name}`)
    li.append(chekbox);
    li.append(lable);
    circle.append(li);
    data.forEach(element1 => {
      const checkbox1 = document.createElement("input");
      const label1 = document.createElement("label");
      const li1 = document.createElement("li");
  
      // const input = document.getElementById(`${element1.id}`);
      if(element.id == element1.parentId){
      
        checkbox1.setAttribute("type","checkbox");
        checkbox1.setAttribute("value",`${element1.name}`);
        checkbox1.setAttribute("id",`${element1.id}`);
        checkbox1.setAttribute("name","Employee");
        checkbox1.setAttribute("onchange",`add(${element1.id})`)
        
        label1.setAttribute("for","Employee");
        label1.append(`${element1.name}`)
          console.log("HELLO")  
  
          li1.append(checkbox1);
          li1.append(label1);
          hardCircle.append(li1);
            circle.appendChild(hardCircle);
      }
    })
  }
  body.appendChild(circle);
  })
}


viewData();


btn.addEventListener('click',retriveData);


function retriveData(){
  table.innerHTML = ''
  let data 
  obj.forEach(element =>{
    data = `<tr>
      <td>${element.name}</td>
      <td>${element.dept}</td>
    </tr>`
    table.innerHTML += data;
  })
  console.log(obj)

}
parent

function setChildSelect(parent_elm) {
  tmp = document.getElementById(parent_elm.id)
  dep_ids = data.filter((childelm) => parent_elm.id == childelm.parentId)
  if (tmp.checked) {
    dep_ids.forEach((child_id) => {
      child_box = document.getElementById(child_id.id)
      child_box.checked = true;
      data.forEach(element => {
        if(child_id.id == element.id){
          selected = {
            "name":element.name,
            "dept":getParentNameById(element.parentId)
          }
          obj.push(selected);
        }
      })
    })
  } else {
    dep_ids.forEach((child_id) => {
      child_box = document.getElementById(child_id.id);
      child_box.checked = false;
      const removeIndex = obj.findIndex(item => item.id === child_id.id);
       obj.splice(removeIndex,1);
        console.log(obj)
      
   
    })
  }
}


function getParentNameById(id) {
  return data.filter(elm => elm.id == id)[0].name;
}

          
function add(id){

  tmp = document.getElementById(id.id);
  if(tmp.checked){
    var selected = {}
    data.forEach(element => {
        if(id.id == element.id){
          selected = {
            "name":element.name,
            "dept":getParentNameById(element.parentId)
          }
          
          obj.push(selected);
        }
      })
  }else{
    const removeIndex = obj.findIndex(item => item.id === id.id);
    obj.splice(removeIndex,1);
    console.log(obj)
  }
}


