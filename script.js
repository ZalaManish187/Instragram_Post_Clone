const UserNameInput = document.getElementById('UserNameInput');
const UserDisplayName = document.getElementById('UserDisplayName');
const btn = document.getElementById('btn');
const address = document.getElementById('address');
const discription = document.getElementById('discription');
const PostTextDisplay = document.getElementById('PostTextDisplay');
const PostText = document.getElementById("PostText");
const Count = document.getElementById("Count");
const LikeCount = document.getElementById("LikeCount");
const CommentCount = document.getElementById("CommentCount");
const CommentCountDisplay =document.getElementById("CommentCountDisplay");


UserNameInput.addEventListener("input", function(){
    UserDisplayName.textContent = UserNameInput.value || "Manish Zala";
})
    UserDisplayName.textContent = UserNameInput.value;



discription.addEventListener("input", function () {
    
    address.textContent = discription.value || "New York, USA";
});
    address.textContent = discription.value;


PostText.addEventListener("input" , function(){
    PostTextDisplay.textContent = PostText.value || "This is a sample post text. @mentions, #hashtags, https://links.com are all automatically converted.";
});
    PostTextDisplay.textContent = PostText.value ||"This is a sample post text. @mentions, #hashtags, https://links.com are all automatically converted.";


    // Likes Count

LikeCount.addEventListener("input",function(){
    let value = LikeCount.value;
    Count.textContent = like(value);
    
});

function like(Count){
    if(Count > 1000000000){
        return (Count / 1000000000)  + "B";

    }
   else if(Count > 1000000){
        return (Count / 1000000)  + "M";
    }
    else if(Count > 1000){
        return (Count / 1000) + "k";
    }
    return Count;
}
    Count.textContent = like(18);

//Comment Count Display

CommentCount.addEventListener("input",function(){
    let value = CommentCount.value;
    CommentCountDisplay.textContent = commentLike(value);
});

function commentLike(comment){
    if (comment > 1000000000){
        return (comment/1000000000) + "B";
    }
    else if(comment > 1000000){
        return (comment / 1000000) + "M";
    }
    else if(comment > 1000){
        return (comment / 1000) + "K";
    }
    return comment;
}
    
CommentCountDisplay.textContent = commentLike(17);

likeChecked.onchange = ()=>{
    if(likeChecked.checked){
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
        heart.style.color = "red";
    }
    else{
         heart.classList.remove("fa-solid");
        heart.classList.add("fa-regular");
        heart.style.color = "black";
    }
}
 // images show the display

 const imgInput = document.getElementById("imgInput");
 const imgDisplay = document.getElementById("imgDisplay");
 
 imgInput.onchange = function(){
    imgDisplay.src = URL.createObjectURL(imgInput.files[0]);
 }
 



 const AvatarDisplay = document.getElementById("AvatarDisplay");
 const AvatarUpload = document.getElementById("AvatarUpload");

 AvatarUpload.onchange = function(){
    AvatarDisplay.src = URL.createObjectURL(AvatarUpload.files[0]);
 }

 storyChecked.onchange = ()=>{
    if(storyChecked.checked){
       
       
        AvatarDisplay.style.border = "2px solid red";
    }
    else{
        AvatarDisplay.style.border = "none";

    }
 }

 tagged.onchange = () =>{
    if(tagged.checked){
        tageIcon.classList.add("fa-regular", "fa-user");
        tageIcon.style.display = "block";
    }
    else{
        tageIcon.classList.remove("fa-regular" , "fa-user");

        tageIcon.style.display = "none";

    }
 }