var oSection=document.querySelector(".section"),aPanel=Array.from(oSection.children),iPanelW=aPanel[0].offsetWidth,iWinW=document.documentElement.clientWidth-280,iMaxCol=Math.floor(iWinW/iPanelW);oSection.style.width=iMaxCol*iPanelW+"px";var aColH=[];aPanel.forEach(function(o,e){console.log(e),e<iMaxCol&&(o.style.top=0,o.style.left=e*iPanelW+"px",aColH.push(o.offsetHeight))}),console.log(aColH);