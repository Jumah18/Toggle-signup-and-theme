document.getElementById("login-span").addEventListener('click', function(){
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
})

document.getElementById("signup-span").addEventListener('click', function(){
     document.getElementById('signup').style.display ='block'
    document.getElementById('login').style.display = 'none' 
    darkMode();
})

// darkmode settings
document.getElementById("dark-mode").addEventListener('click', function(){
    document.getElementById('dark-mode').style.display = 'none';
    document.getElementById('light-mode').style.display = 'block';
    document.getElementById('body').style.backgroundColor = 'black';
    document.getElementById('body').style.color = 'white';
})

// lightmode setting 
document.getElementById("light-mode").addEventListener('click', function(){
    document.getElementById('light-mode').style.display = 'none';
    document.getElementById('dark-mode').style.display = 'block';
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('body').style.color = 'black';
})

const darkMode = function (){
    document.getElementById('body').style.backgroundColor = 'black';
}