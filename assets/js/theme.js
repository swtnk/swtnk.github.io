let isSidebarClosed = false;
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

isSidebarClosed = window.localStorage.getItem('isSidebarClosed');

if (isSidebarClosed == '1') {
    sidebar.classList.add('close');
} else {
    sidebar.classList.remove('close');
}

if (toggle) {
    toggle.addEventListener("click" , () =>{
        if (sidebar.classList.contains("close")) {
            sidebar.classList.remove("close");
            window.localStorage.setItem('isSidebarClosed', '0');
        } else {
            sidebar.classList.add("close");
            window.localStorage.setItem('isSidebarClosed', '1');
        }
    })
}

if (searchBtn) {
    searchBtn.addEventListener("click" , () =>{
        sidebar.classList.remove("close");
    })
}

if (modeSwitch) {
    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
            
        }
    });
}
