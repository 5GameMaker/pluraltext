
window.pluraltext||setTimeout(setInterval(_=>[...document.body.querySelectorAll(".messageContent-2t3eCI")].filter(a=>![...a.classList].some(a=>a.includes("repliedTextContent"))).filter(a=>a.innerHTML.match("^([0-9a-f][0-9a-f]|\n| )+$")).forEach(el=>{let t=el.innerHTML.replace(/[ \n]/g,"");let a=new Array(t.length/2).fill().map((_,i)=>`${t[i*2]}${t[i*2+1]}`).map(a=>eval(`0x${a}`));a=String.fromCharCode(...a);let s=document.createElement("span");s.innerText=a;el.innerHTML=`${el.innerHTML}<br><br><span style="color:yellow;font-family:monospace">Decoded: ${s.innerHTML}</span>`}),1000),5000,(window.pluraltext=true));

