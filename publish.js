document.body.addClass('t-d');

//https://discord.com/channels/947626014136221767/947626014136221770/1218026619243860071
if(Math.floor(Math.random() * 16) == 0){
    let footer = document.getElementsByClassName("site-footer")[0];
    let span = document.createElement("span");
    span.className = "horus";
    span.innerHTML = "I WAS HERE"
    footer.appendChild(span);
}

//https://discord.com/channels/947626014136221767/1223409538099576832/1261432039811448842
//Button creation
let button = document.createElement("button")
button.className = "sidebar-toggle-button"; //using an existing classname to hopefully get CSS for the button
button.setAttribute("name", "github-button")
button.setAttribute("onclick", "gitHubButtonClick()");
button.innerHTML = "View page on GitHub";
let buttonContainer = document.getElementsByClassName("graph-view-outer")[0];
buttonContainer.appendChild(button);

function gitHubButtonClick(){
    window.open(`https://github.com/psychospace/psychospace.info/blob/main${getScrubbedPath()}.md`, '_blank').focus();
}

function getScrubbedPath(){
    let path = window.location.pathname.split('+').join(' ');
    return path;
}