const campoTexto=document.querySelector(".input-text");
const campoMensaje=document.querySelector(".mensaje");


// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`






function btnEncriptar(){
    const textoEncriptado=encriptar(campoTexto.value);
    campoMensaje.value=textoEncriptado;
    campoMensaje.style.backgroundImage="none";
    campoTexto.value="";

}

function btnDesEncriptar(){
    const textoEncriptado=desEncriptar(campoTexto.value);
    campoMensaje.value=textoEncriptado;
    campoTexto.value="";

}






function encriptar(stringEncriptado){

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }

    }
    return stringEncriptado;


}


function desEncriptar(stringDesEncriptado){

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesEncriptado=stringDesEncriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesEncriptado.includes(matrizCodigo[i][1])){
            stringDesEncriptado=stringDesEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }

    }
    return stringDesEncriptado;


}


function copiar(){
    campoMensaje.select();
    navigator.clipboard.writeText(campoMensaje.value);
    campoMensaje.value="";
    
}
