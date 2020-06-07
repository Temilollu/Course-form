const appendUser = document.getElementById('user')
let user = prompt('Welcome to our free course, what should we call you?')
if(user.length == ''  || typeof user == Number ){
  appendUser.textContent = 'Sad we didn\'t get your name' 
}
else{
    const userDetails = document.createElement('h2')
    userDetails.innerHTML = `
    <h2>Hello, ${user.toUpperCase()}</h2>
    `
appendUser.append(userDetails)
  
}

class GetNodes{
constructor(){
    this.userNames  = document.getElementById('name');
    this.courseNames = document.getElementById('course');
    this.authorName =  document.getElementById('author')  ;
this.submitForm = document.querySelector('.btn')
}

render(){
 this.submitForm.addEventListener('click',this.submitHandler.bind(this))
}
 
submitHandler(){
   let loaderHandler  = new Loader()
   loaderHandler.render()

  let userValidation =   new validateUserInput()
   userValidation.render()
;
   this.userNames.value= ''
  this.courseNames.value = ''
   this.authorName.value = ''
}
 

}

class validateUserInput{
render(){
let inputs = new GetNodes()
const showHandler = new Loader()
if(inputs.userNames.value == '' ||
inputs.courseNames.value == '' ||
inputs.authorName.value == ''){
    showHandler.hide() 
    alert('All Input Fields must be filled')
     return
}

else{
    let random = Math.floor(Math.random()*5+1);

    const courseList = document.querySelector('.customer-list')
 
    const prodEl =   new GetNodes()
   const userCourses = document.createElement('div')
   userCourses.className = 'col-11 mx-auto col-md-6 col-lg-4 my-3'
   userCourses.innerHTML = `
   <div class="card text-left">
     <img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
       <div class="card-body">
        <h6 class="text-capitalize "><span class="badge badge-warning mr-2">
        name :</span><span id="customer-name">
        ${prodEl.userNames.value}</span></h6>
        <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">
        course :</span><span id="customer-course">
         ${prodEl.courseNames.value}
         </span></h6>
        <h6 class="text-capitalize"><span class="badge badge-danger mr-2">
        author :</span><span id="course-author">${prodEl.authorName.value}</span></h6>
     
       </div>
   `
    
    
    setTimeout(() => {
    courseList.append(userCourses)
        showHandler.hide() 
    }, 3000);  
   
    }
  }
 
}


class Loader{
    
    render(){
        const loadGif = document.querySelector('.loading')
        const feedBack = document.querySelector('.feedback')
            loadGif.style.display = 'block'
            feedBack.style.display = 'block'
    }

    hide(){
        const loadGif = document.querySelector('.loading')
        const feedBack = document.querySelector('.feedback')
        loadGif.style.display = 'none'
        feedBack.style.display = 'none'
    }
}

new GetNodes().render()
