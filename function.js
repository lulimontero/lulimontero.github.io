


//document.getElementById('boton1').onclick = function (){
  //  console.log("Capturamos el evento click");
    //reemplazar el contenido del html que estaba dentro del elemento p, como sabia como llegar al elemento p? con el id demo
    //document.getElementById("demo").innerHTML = "Estamos probando nuestro 1er evento en JS";
//}
//cuando se ejecute un click sobre este boton

// funcionalidad de desplazar hacia arriba

document.getElementById("boton_ocultar").addEventListener('click',function () {
document.getElementById("contacto").style.display = "none";

}
);


document.getElementById("boton_show").addEventListener('click',function () {
    document.getElementById("contacto").style.display = "unset";
    
    }
    );