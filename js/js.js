window.addEventListener("load",iniciar);
function iniciar(){
    document.getElementById("btn_home").addEventListener("click",rolar);
    document.getElementById("btn_empresa").addEventListener("click",rolar);
    document.getElementById("btn_servicos").addEventListener("click",rolar);
    document.getElementById("btn_area-cliente").addEventListener("click",rolar);
    document.getElementById("btn_fale-conosco").addEventListener("click",rolar);

}

function rolar(){
    var obj=event.target.dataset.nome;
    document.getElementById(obj).scrollIntoView()
}