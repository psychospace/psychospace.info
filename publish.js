document.body.addClass('t-d');

//https://discord.com/channels/947626014136221767/947626014136221770/1218026619243860071
if(Math.random() * 16 == 0){
    let footer = document.getElementsByClassName("site-footer")[0];
    let span = document.createElement("span");
    span.className = "horus";
    span.innerHTML = "I WAS HERE"
    footer.appendChild(span);
}