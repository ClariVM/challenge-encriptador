


function encriptarTexto() {
  const textoEncriptar = document.getElementById("textoEncriptar").value;
    const textoEncriptado = textoEncriptar.replace( /a|e|i|o|u/g,
    function (match) {
      if (match === "a") {
        return "ai";
      } else if (match === "e") {
        return "enter";
      } else if (match === "i") {
        return "imes";
      } else if (match === "o") {
        return "ober";
      } else if (match === "u") {
        return "ufat";
      }
    }
    
  );
  return textoEncriptado;
}


function desencriptarTexto() {
    const textoEncriptar = document.getElementById("textoEncriptar").value;
      const textoDesencriptado = textoEncriptar.replace( /ai|enter|imes|ober|ufat/g,
      function (match) {
        if (match === "ai") {
          return "a";
        } else if (match === "enter") {
          return "e";
        } else if (match === "imes") {
          return "i";
        } else if (match === "ober") {
          return "o";
        } else if (match === "ufat") {
          return "u";
        }
      }
      
    );
    return textoDesencriptado;
  }
  


function mostrarTexto(accion) {
    const textoEncriptar = document.getElementById("textoEncriptar").value;

    if (!textoEncriptar) {
        return;
      }
    let texto;

    if (accion === 'encriptar') {
        texto = encriptarTexto();
      } else if (accion === 'desencriptar') {
        texto = desencriptarTexto();
      }

    const mostrarTexto = document.getElementById("mostrar");
    mostrarTexto.innerHTML = "";


    const container = document.createElement("div")
    container.classList.add("container")


    const parrafo = document.createElement('p');
    parrafo.classList.add("p-encriptado")
    parrafo.textContent = texto;


    const btnCopiar = document.createElement('button');
    btnCopiar.textContent = "Copiar";
    btnCopiar.classList.add("btn-copiar");

    btnCopiar.addEventListener('click', function () {
        copiarTexto(parrafo.textContent);
        btnCopiar.textContent = "Copiado!";
      });

    
    container.appendChild(parrafo)
    container.appendChild(btnCopiar);
    

    mostrarTexto.appendChild(container);
    
}
function copiarTexto(texto) {
    
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    document.body.appendChild(textArea);
  
 
    textArea.select();
    document.execCommand('copy');
  

    document.body.removeChild(textArea);
  
  }