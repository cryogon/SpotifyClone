document.querySelector('#listButton').addEventListener('click', () => {
    document.querySelector('.mobileContainer').setAttribute('aria-disabled', true);
    document.getElementById('cross').style.display = 'inline';
    document.getElementById('listButton').style.display = 'none';
    let ol = document.createElement('ol');
    document.getElementById('mobile').appendChild(ol);
});

document.querySelector('#cross').addEventListener('click', () => {
    document.getElementById('cross').style.display = 'none';
    document.getElementById('listButton').style.display = 'inline';
    document.querySelector('.mobileContainer').setAttribute('aria-disabled', false);
})

//Add Song Button
// let check = true;
// document.getElementById('addSong').addEventListener('click', () => {
//     check = check !== true;
//     if (!check) {

//     }
// })
document.onclick = (e) => {
    if (e.target.className === 'songWindowItem' || e.target.className === 'addSongWindow' || e.target.id === 'addSong' || e.target.id === 'submit')
        document.querySelector('.addSongWindow').style.display = "block";
    else
        document.querySelector('.addSongWindow').style.display = "none";

    if (e.target.tagName === 'iframe') {

    }
}


document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
        e.preventDefault();
        document.querySelector('iframe').style.display = 'none';
        audioSource.play();
    }
})

document.querySelector('.youtube').onclick = function() {
    document.querySelector('iframe').style.display = 'block';
    // document.body.style.filter = 'blur(8px)';
    // document.querySelector('iframe').style.filter = 'none';

}