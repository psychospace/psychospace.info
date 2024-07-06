<%* 
//REQUIRES THE PLUGIN "TEMPLATER"
bpt = tp.file.title.split(" ")[0] == "BPT"
pt = tp.file.title.split(" ")[1] == "PT"
ept = tp.file.title.split(" ")[1] == "E-PT"
needsRft = ((!bpt && !pt) && !ept)

if(needsRft){ //no support for elseyears
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
    if(pt)
        filename = year + " PT"
    else
        filename = year + " E-PT"
}
await tp.file.move(cPath + filename)
-%>
---
tags: timeline/year
yr: <% year %>
century: "[[<% century  %>]]"
permalink: timeline/<% year %><%* if(ept) {%>/else<%*}%>
description:  <% filename %> was a year in Pinwheel Tempo.
contributors: credit yourself here
---
 >[!important| bg-gray c-gray] This concerns the year as it happened in the <%* if(ept){%>[[Elseworld|elseworld]]. For the primary worldline, see [[<% year %> PT]].<%*} else {%> primary worldline. For the [[elseworld]], see [[<% year %> E-PT]].<%*}%>

>[!column | no-title txt-c]
>>[!recite|no-i] [[<% year - 1 %> PT]] ←
>
>> [!recite|no-i] → [[<% year - (-1) %> PT]]

---
**<% filename %>** is a [[Year (unit)|year]] in [[Pinwheel Tempo]]<%* if(ept){%> in the [[elseworld]] <%*}%>. <%* if(!bpt) {%>It took place in the [[<% century %>]]. <%*}%>

# Events

