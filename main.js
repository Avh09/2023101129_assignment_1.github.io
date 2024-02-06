function toggleTheme() { 
    var theme = document.getElementById('lnk'); 
 
    if (theme.getAttribute('href') == 'dark.css') { 
        theme.setAttribute('href', 'light.css'); 
    } else { 
        theme.setAttribute('href', 'dark.css'); 
    } 
}


