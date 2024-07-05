const parent = document.querySelector('#parent')

parent.addEventListener('click',(event)=>{
   if(event.target.innerText == "Laptops"){
    window.location.href = 'https://www.google.com/search?q=laptops&oq=laptops&gs_lcrp=EgZjaHJvbWUyEggAEEUYORiDARixAxjJAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDINCAYQABiSAxiABBiKBTIHCAcQABiABDIHCAgQABiABDIHCAkQABiPAtIBCDIxNjNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
   }
   else if(event.target.innerText == "Cameras"){
    window.location.href = 'https://www.google.com/search?q=cameras&oq=cameras&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDINCAUQABiDARixAxiABDIJCAYQABgKGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGI8CqAIAsAIA&sourceid=chrome&ie=UTF-8'
   }
   else if(event.target.innerText == "Mobiles"){
    window.location.href ='https://www.google.com/search?q=mobile+phone&oq=mobile&gs_lcrp=EgZjaHJvbWUqDQgBEAAYgwEYsQMYgAQyDAgAEEUYORixAxiABDINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDINCAMQLhjHARjRAxiABDINCAQQABiDARixAxiABDINCAUQLhjHARjRAxiABDINCAYQABiDARixAxiABDINCAcQABiDARixAxiABDIHCAgQABiABDIHCAkQABiABNIBCDQ4OTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
   }
   else if(event.target.innerText == "Shoes"){
    window.location.href = 'https://www.google.com/search?q=shoes&oq=shoes&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORixAxjJAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIQCAUQABiDARixAxiABBiKBTIHCAYQABiABDIQCAcQLhjHARixAxjRAxiABDIKCAgQABixAxiABDINCAkQABiSAxiABBiKBdIBCDQ0ODRqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8'
   }
})