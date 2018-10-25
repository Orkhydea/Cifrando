//alert('holaaa'); se verifica que este enlazado js
// document.getElementById('yes').addEventListener('click', cesar);

function cesar(){

    document.getElementById('yes').addEventListener('click', cesar);

    var texto=prompt("Ingrese ABC");
  
    var cifrado ="";
  
       for(var i=0; i<texto.length; i++) { //el for recorrera las letras del texto a cifrar//
  
          if (parseInt(texto[i])%1 === 0) //condicionar para no ingresar numeros//
             texto = prompt("Por favor ingrese un texto sin numeros ni espacios");
  
          var ubicacionCesar=(texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;
  
          var palabraCifrada= String.fromCharCode(ubicacionCesar);
  
      cifrado+= palabraCifrada; //acumular las letras cifradas//

      //return cifrado;
    document.getElementById('text').innerHTML = cifrado;
  
      }
      //Crear una funcion llamada decipher que descifre el texto ingresado //

  function decipher(){
    //var cifrado = document.getElementById('text').value;
        document.getElementById('no').addEventListener('click', decipher);
      
        //alert ("SORPRENDENTE: " + cifrado);
      
        var descifrado ="";
      
          for(var j=0; j<cifrado.length; j++) { //el for recorrera las letras del texto a descifrar//
      
             var ubicacionDescifrado = (cifrado.charCodeAt(j) + 65 - 33) % 26 + 65;
             var palabraDescifrada= String.fromCharCode(ubicacionDescifrado);
      
         descifrado+=palabraDescifrada; //acumular las letras descifradas//
      }
      
      //return descifrado;
      document.getElementById('text2').innerHTML = descifrado;
      
      }
      
    }
    
  
  
//   alert (decipher(cesar()));
