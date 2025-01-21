//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

let element = document.getElementById('lampadina')
let btn = document.getElementById('btnLampadina')

btn.addEventListener('click', function(){
    element.scr('./imgs/yellow_lamp.png')

})