const UserNameInput = document.getElementById('UserNameInput');
const UserDisplayName = document.getElementById('UserDisplayName');
const btn = document.getElementById('btn');
const address = document.getElementById('address');
const discription = document.getElementById('discription');
const commentDisplay = document.getElementById('commentDisplay');
const PostText = document.getElementById("PostText");


UserNameInput.addEventListener("input", function(){
    UserDisplayName.textContent = UserNameInput.value || "Manish Zala";
})
    UserDisplayName.textContent = UserNameInput.value;



discription.addEventListener("input", function () {
    
    address.textContent = discription.value || "New York, USA";
});
    address.textContent = discription.value;


PostText.addEventListener("input" , function(){
    commentDisplay.textContent = PostText.value || "This is a sample post text. @mentions, #hashtags, https://links.com are all automatically converted.";
});
    commentDisplay.textContent = PostText.value || "This is a sample post text. @mentions, #hashtags, https://links.com are all automatically converted.";
