const UserNameInput = document.getElementById("UserNameInput");
const UserDisplayName = document.getElementById("UserDisplayName");
const btn = document.getElementById("btn");
const address = document.getElementById("address");
const discription = document.getElementById("discription");
const PostTextDisplay = document.getElementById("PostTextDisplay");
const PostText = document.getElementById("PostText");
const Count = document.getElementById("Count");
const LikeCount = document.getElementById("LikeCount");
const CommentCount = document.getElementById("CommentCount");
const CommentCountDisplay = document.getElementById("CommentCountDisplay");

UserNameInput.addEventListener("input", function () {
  UserDisplayName.textContent = UserNameInput.value || "Manish Zala";
});
UserDisplayName.textContent = UserNameInput.value;

discription.addEventListener("input", function () {
  address.textContent = discription.value || "New York, USA";
});
address.textContent = discription.value;

PostText.addEventListener("input", function () {
  PostTextDisplay.textContent =
    PostText.value ||
    "This is a sample post text. @mentions, #hashtags, https://links.com are all automatically converted.";
});
PostTextDisplay.textContent =
  PostText.value ||
  "This is a sample post text. @mentions, #hashtags, https://links.com are all automatically converted.";

// Likes Count

LikeCount.addEventListener("input", function () {
  let value = LikeCount.value;
  Count.textContent = like(value);
});

function like(Count) {
  if (Count > 1000000000) {
    return Count / 1000000000 + "B";
  } else if (Count > 1000000) {
    return Count / 1000000 + "M";
  } else if (Count > 1000) {
    return Count / 1000 + "k";
  }
  return Count;
}
Count.textContent = like(18);

//Comment Count Display

CommentCount.addEventListener("input", function () {
  let value = CommentCount.value;
  CommentCountDisplay.textContent = commentLike(value);
});

function commentLike(comment) {
  if (comment > 1000000000) {
    return comment / 1000000000 + "B";
  } else if (comment > 1000000) {
    return comment / 1000000 + "M";
  } else if (comment > 1000) {
    return comment / 1000 + "K";
  }
  return comment;
}

CommentCountDisplay.textContent = commentLike(17);

likeChecked.onchange = () => {
  if (likeChecked.checked) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
    heart.style.color = "red";
  } else {
    heart.classList.remove("fa-solid");
    heart.classList.add("fa-regular");
    heart.style.color = "black";
  }
};
// images show the display

const imgInput = document.getElementById("imgInput");
const imgDisplay = document.getElementById("imgDisplay");

imgInput.onchange = function () {
  imgDisplay.src = URL.createObjectURL(imgInput.files[0]);
};

const AvatarDisplay = document.getElementById("AvatarDisplay");
const AvatarUpload = document.getElementById("AvatarUpload");

AvatarUpload.onchange = function () {
  AvatarDisplay.src = URL.createObjectURL(AvatarUpload.files[0]);
};

storyChecked.onchange = () => {
  if (storyChecked.checked) {
    AvatarDisplay.style.border = "2px solid red";
  } else {
    AvatarDisplay.style.border = "none";
  }
};

tagged.onchange = () => {
  if (tagged.checked) {
    tageIcon.classList.add("fa-regular", "fa-user");
    tageIcon.style.display = "block";
  } else {
    tageIcon.classList.remove("fa-regular", "fa-user");

    tageIcon.style.display = "none";
  }
};

commentsDisplayed.onchange = () => {
  if (commentsDisplayed.checked) {
    FirstRowComment.style.display = "Block";
  } else {
    FirstRowComment.style.display = "none";
  }
};
FirstRowComment.style.display = "none";

const comment_Show = document.getElementById("comment_Show");
const firstComment = document.getElementById("firstComment");
const firstCommentText = document.getElementById("firstCommentText");
const CommentText = document.getElementById("CommentText");

firstComment.addEventListener("input", function () {
  comment_Show.textContent = firstComment.value;
});

firstCommentText.addEventListener("input", function () {
  CommentText.textContent = firstCommentText.value;
});

const secondComment = document.getElementById("secondComment");
const secondCommentText = document.getElementById("secondCommentText");
const nextComment = document.getElementById("nextComment");
const nextCommentText = document.getElementById("nextCommentText");

secondComment.addEventListener("input", function () {
  nextComment.textContent = secondComment.value;
});

secondCommentText.addEventListener("input", function () {
  nextCommentText.textContent = secondCommentText.value;
});

const themeCard = document.getElementById("themeCard");
const selectTheme = document.getElementById("selectTheme");

selectTheme.addEventListener("change", function () {
  if (selectTheme.value === "light") {
    themeCard.style.backgroundColor = "white";
    themeCard.style.color = "black";
  } else if (selectTheme.value === "dark") {
    themeCard.style.backgroundColor = "black";
    themeCard.style.color = "white";
  }
});

const imagesCount = document.getElementById("imagesCount");
const dot = document.getElementById("dot");
const rightAerrow = document.getElementById("rightAerrow");

imagesCount.addEventListener("change", function () {
  rightAerrow.classList.add("fa-solid", "fa-circle-chevron-right");
});

imagesCount.addEventListener("change", function () {
  dot.innerHTML = "";
  if (imagesCount.value === "1") {
    dot.innerHTML = `  <i class="fa-solid fa-circle"></i>`;
  } else if (imagesCount.value === "2") {
    dot.innerHTML = `  <i class="fa-solid fa-circle"></i>  
                        <i class="fa-solid fa-circle"></i>`;
  } else if (imagesCount.value === "3") {
    dot.innerHTML = `  <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>  
                        <i class="fa-solid fa-circle"></i>`;
  } else if (imagesCount.value === "4") {
    dot.innerHTML = `  <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>   
                        <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i>`;
  } else if (imagesCount.value === "5") {
    dot.innerHTML = `  <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i>   
                        <i class="fa-solid fa-circle"></i>`;
  } else if (imagesCount.value === "6") {
    dot.innerHTML = `  <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i> 
                        <i class="fa-solid fa-circle"></i>`;
  }
});
