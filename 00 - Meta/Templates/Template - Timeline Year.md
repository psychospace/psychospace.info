<%* 
//REQUIRES THE PLUGIN "TEMPLATER"
bpt = tp.file.title.split(" ")[0] == "BPT"
pt = tp.file.title.split(" ")[1] == "PT"
needsRft = (!bpt && !pt)

if(needsRft){
    year = (await tp.system.prompt("Year not detected. Enter the year (negative for BPT):"))
} else { //no reformatting needed
    if(bpt) year = "-" + tp.file.title.split(" ")[1]
    else year = tp.file.title.split(" ")[0]
}
bpt = (year <= 0)
if(bpt) {
    century = "BPT"
    cPath = "✼ Timeline/BPT/"
    filename = "BPT " + year.substring(1)
}
else {
    cFile = (await tp.system.suggester((item) => item.basename, app.vault.getMarkdownFiles().filter(i => i.name.includes("century"))))
    //write a simpler way to do this
    century = cFile.basename
    cPath = cFile.path.replace(cFile.name,"")
    filename = year + " PT"
}
await tp.file.move(cPath + filename)
-%>
---
tags: timeline/year 
yr: <% year %>
century: "[[<% century  %>]]"
permalink: timeline/<% year %>
description:  <% filename %> was a year in Pinwheel Tempo.
contributors: credit yourself here
---
>[!column | no-title txt-c]
>>[!recite|no-i] [[<% year - 1 %> PT]] ←
>
>> [!recite|no-i] → [[<% year - (-1) %> PT]]

---
**<% filename %>** is a [[Year (unit)|year]] in [[Pinwheel Tempo]]. <%* if(!bpt) {%>It took place in the [[<% century %>]]. <%*}%>

# Events

