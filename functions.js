function Menu(){
    let navMenu = document.querySelector(".header nav")
    let btnMenu = document.querySelector(".btnMenuBar")

    btnMenu.addEventListener("click", ()=>{
        navMenu.classList.toggle("menuActived")
        btnMenu.classList.toggle("btnMenuActive")
    })

}
function TurnMode(){
    switchFocusButton()
    function switchFocusButton(){
        let btn = document.querySelectorAll(".colorOption")
        let btnAtivo = document.querySelector(".selectedOpition")
        btn[0].addEventListener("click", ()=>{
            let exist = !undefined
            if(btnAtivo == exist){
                return
            }else{
                btn[0].classList.add("selectedOpition")
                btn[1].classList.remove("selectedOpition")
                ligthMode()
            }
        })
        btn[1].addEventListener("click", ()=>{
            let exist = !undefined
            if(btnAtivo == exist){
                return
            }else{
                btn[0].classList.remove("selectedOpition")
                btn[1].classList.add("selectedOpition")
                darkMode()
            }
        })
        
    }

    function ligthMode(){
        let body = document.querySelector("body")
        let darkModeActived = document.querySelector(".bodyDarkMode")
        let controlePreto = document.getElementById("imgControl") 
        if(darkModeActived === body){
            body.classList.remove("bodyDarkMode")
            body.classList.add("bodyLightMode")
            controlePreto.src = "controleBranco.png"
            switchLogoLight()
        }else{
            return
        }
    }

    function darkMode(){
        let body = document.querySelector("body")
        let lightModeActived = document.querySelector(".bodyLightMode")
        let controleBranco = document.getElementById("imgControl") 
        if(lightModeActived === body){
            body.classList.remove("bodyLightMode")
            body.classList.add("bodyDarkMode")
            controleBranco.src = "controlePreto.png"
            switchLogoDark()
        }else{
            return
        }
    }

    function switchLogoLight(){
        let logo = document.querySelector(".logo")
        let containerDaLogo = document.querySelector(".containerLogo")
        logo.style.display = "none"

        let logoPreta = `<svg class="logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="64" height="64" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_1544_2" transform="scale(0.00666667)"/>
        </pattern>
        <image id="image0_1544_2" width="150" height="150" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDOTAxM0IxNkQ3RjExRUNBQkM4QTYxMUUzOTUyMUI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDOTAxM0IyNkQ3RjExRUNBQkM4QTYxMUUzOTUyMUI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEM5MDEzQUY2RDdGMTFFQ0FCQzhBNjExRTM5NTIxQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEM5MDEzQjA2RDdGMTFFQ0FCQzhBNjExRTM5NTIxQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7J9h76AAALVUlEQVR42uydD5CV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"/>
        </defs>
        </svg>
        `;
        
        containerDaLogo.innerHTML = logoPreta
    }
    function switchLogoDark(){
        let logo = document.querySelector(".logo")
        let containerDaLogo = document.querySelector(".containerLogo")
        logo.style.display = "none"

        let logoBranca = `<svg class="logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="64" height="64" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_1544_3" transform="scale(0.00666667)"/>
        </pattern>
        <image id="image0_1544_3" width="150" height="150" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4QjEyMTA0NkQ3RjExRUNBNUM3RDExMUFENTU3MENFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4QjEyMTA1NkQ3RjExRUNBNUM3RDExMUFENTU3MENFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MThCMTIxMDI2RDdGMTFFQ0E1QzdEMTExQUQ1NTcwQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MThCMTIxMDM2RDdGMTFFQ0E1QzdEMTExQUQ1NTcwQ0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5XDI9jAAALAElEQVR42uydDZDV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"/>
        </defs>
        </svg>
        
        `;
        
        containerDaLogo.innerHTML = logoBranca
    }
}