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