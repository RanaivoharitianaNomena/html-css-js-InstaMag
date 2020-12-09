const reply = (rep) => {
    var res = document.getElementById(rep);
    if (res.className == "replies") {
        res.className = "hide";
        res.style.WebkitTransition = 'all 0.3s ease';
    } else if (res.className == 'hide') {
        console.log('hide');
        res.className = "replies";
    }
}

// button = document.querySelector('input');
//         button.addEventListener('click',updateButton);
//         function updateButton() {
//             if (button.value === 'Like') {
//             button.value = '✓ Liked';
//              } else {
//         button.value = "Like";
       
//     }
// }
function updateButton() {
                if (this.value === 'Like') {
                this.value = '✓ Liked';
                 } else {
            this.value = "Like";
  }
}
var button = document.getElementsByClassName("like_buton");
for(var i = 0; i<button.length;i++){
    button[i].onclick = updateButton;
} 