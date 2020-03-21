const phonebook = document.getElementById('phBook');
fetch('https://mock-io.herokuapp.com/users')//fetch function
.then(function(response){
  return response.json();//promise return
//   console.log(response.json());
})

.then(function(data){
    data.forEach(function(user){
        const wrapper = document.createElement('div');//div inside user div
        wrapper.style.display="flex";
        wrapper.style.width="50%";
        wrapper.style.flexWrap="wrap";
        wrapper.style.margin=" 5px";
        wrapper.style.padding="10px";
        wrapper.style.boxShadow="0 3px 5px #bec5d1";

       
        


        let userImage = document.createElement('img'); //profile img
        userImage.src = user.profileImage;
        userImage.style.width="50px";
        userImage.style.height="50px";
        userImage.style.borderRadius="50%";
        userImage.style.padding="10px";

        
       
        
        const fName= document.createElement('h4');
         fName.innerHTML = user.firstName +' '+ user.lastName;

         const box=document.createElement('div');
       
         let phoneNum= document.createElement('h4');
         phoneNum.innerHTML= user.phone;

         
         phBook.appendChild(wrapper);
         wrapper.appendChild(userImage);//img in wrapper div
         wrapper.appendChild(box);
         box.appendChild(fName);
         box.appendChild(phoneNum);
         
         
        
        
           
        // console.log(user);
  

    });
});