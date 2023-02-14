let ulPallete = document.querySelector(".ulPallete");
let ulSpan = document.querySelector(".ulSpan");
let ulBtn = document.querySelector(".btn");
    let x = 10;

const refreshColors = () => {
    ulPallete.innerHTML = "";
    for (let i = 0; i < x; i++){
         let hexColor = Math.floor(Math.random() * 0xffffff).toString(16);
        hexColor = `#${hexColor.padStart(6, "0")}`;
        let color = document.createElement("li");
        color.classList.add("liPallete");
        color.innerHTML = `
          <div class="liDiv" style=" background-color:${hexColor}"></div>
        <span class="liSpan">${hexColor}</span>
        `;
        color.addEventListener("click" ,() => copyColor(color , hexColor))
        ulPallete.appendChild(color);
    }
   
}
refreshColors();

const copyColor = (ele , val) => {
    const liSpan = ele.querySelector(".liSpan");
    navigator.clipboard.writeText(val).then(() => {
        liSpan.innerHTML = "COPIED";
        setTimeout(() => liSpan.innerHTML = val, 1000)
    }).catch(() => alert("Failed To Copy This Color , Try Again"));
    }

ulBtn.addEventListener("click", refreshColors);
