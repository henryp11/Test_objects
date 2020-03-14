// función que guarda los datos en una tabla desde un formulario
//VALIDACION DE DATOS PARA CONDICIONANTES

var letSave = false;
var validaError = false;

var diccImages = [];
diccImages.push("images/v1.jpg");
diccImages.push("images/v2.jpg");
diccImages.push("images/v3.jpg");
diccImages.push("images/v4.jpg");
diccImages.push("images/v5.jpg");
diccImages.push("images/v6.jpg");
diccImages.push("images/v7.jpg");
diccImages.push("images/v8.jpg");
diccImages.push("images/v9.jpg");
diccImages.push("images/v10.jpg");
diccImages.push("images/v11.jpg");
diccImages.push("images/v12.jpg");
diccImages.push("images/v13.jpg");
diccImages.push("images/v14.jpg");
diccImages.push("images/v15.jpg");
diccImages.push("images/v16.jpg");
diccImages.push("images/v17.jpg");
diccImages.push("images/v18.jpg");
diccImages.push("images/v19.jpg");
diccImages.push("images/v20.jpg");
diccImages.push("images/v21.jpg");
diccImages.push("images/v22.jpg");


//FUNCION "GUARDAR" TRAE LOS VALORES DESDE EL FORMULARIO DE: ID_VENTANA, ANCHO Y ALTURA Y LOS VALIDA 
//CON LAS CONDICIONES ESPECIFICAS POR CADA TIPO DE VENTANA PARA VALIDARLAS Y PERMITIR GUARDARLOS.
function guardar() {

    var id_vent = document.getElementById("ventana").value;

    if (id_vent == "V-01") {
        var a = document.getElementById("anchoA").value;
        var h = document.getElementById("alturaH").value;

        if (a >= 0.2 && a <= 10) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (a) inválido: Debe estar entre 0.2m y 10.0m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && h >= 0.5 && h <= 2) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (h) inválida: Debe estar entre 0.5m y 2.0m");
            letSave = false;
            validaError = false;
        }

    }

    else if (id_vent == "V-02") {
        var b = document.getElementById("anchoB").value;

        var i = document.getElementById("alturaI").value;

        if (b >= 0.2 && b <= 0.60) {
            b;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (b) inválido: Debe estar entre 0.2m y 0.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && i >= 0.5 && i <= 1.6) {
            i;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (i) inválida: Debe estar entre 0.5m y 1.6m");
            letSave = false;
            validaError = false;
        }
    }

    else if (id_vent == "V-03") {
        var b = document.getElementById("anchoB").value;
        var i = document.getElementById("alturaI").value;
        var h = document.getElementById("alturaH").value;

        if (b >= 0.2 && b <= 0.6) {
            b;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (b) inválido: Debe estar entre 0.2m y 0.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && i >= 0.5 && i <= 1.6) {
            i;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (i) inválida: Debe estar entre 0.5m y 1.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && h >= i && h <= 2.4) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (h) inválida: Debe ser mayor a la altura (i) registrada de " +i+ " y menor que 2.4m");
            letSave = false;
            validaError = false;
        }
    }

    else if (id_vent == "V-04") {
        var b = document.getElementById("anchoB").value;
        var i = document.getElementById("alturaI").value;
        var h = document.getElementById("alturaH").value;

        if (b >= 0.2 && b <= 0.6) {
            b;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (b) inválido: Debe estar entre 0.2m y 0.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && i >= 0.5 && i <= 1.5) {
            i;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (i) inválida: Debe estar entre 0.5m y 1.5m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && h >= i && h <= 2.4) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (h) inválida: Debe ser mayor a la altura (i) registrada de" + i +" y menor que 2.4m");
            letSave = false;
            validaError = false;
        }
    }    

    else if (id_vent == "V-05" || id_vent == "V-06") {
        var b = document.getElementById("anchoB").value;
        var a = document.getElementById("anchoA").value;
        var h = document.getElementById("alturaH").value;

        if (b >= 0.2 && b <= 0.6) {
            b;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (b) inválido: Debe estar entre 0.2m y 0.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && a >= b && a <= 6) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (a) inválido: Debe ser mayor al ancho (b) registrado de: "+b+" y menor que 6.0m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && h >= 0.5 && h <= 1.6) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (h) inválida: Debe estar entre 0.5m y 1.6m");
            letSave = false;
            validaError = false;
        }
    }

    else if (id_vent == "V-07") {
        var b = document.getElementById("anchoB").value;
        var a = document.getElementById("anchoA").value;
        var h = document.getElementById("alturaH").value;

        if (b >= 0.2 && b <= 0.6) {
            b;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (b) inválido: Debe estar entre 0.2m y 0.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && a >= 2*b && a <= 6) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (a) inválido:  Debe ser mayor al doble del ancho (b) registrado de: " + 2*b + " y menor que 6.0m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && h >= 0.5 && h <= 1.6) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (h) invalida Debe estar entre 0.5m y 1.6m");
            letSave = false;
            validaError = false;
        }
    }

    else if (id_vent == "V-08" || id_vent == "V-09" || id_vent == "V-11" || id_vent == "V-12" || id_vent == "V-13" || id_vent == "V-14" || id_vent == "V-19" || id_vent == "V-20" || id_vent == "V-21" || id_vent == "V-22") {
        var b = document.getElementById("anchoB").value;
        var a = document.getElementById("anchoA").value;
        var i = document.getElementById("alturaI").value;
        var h = document.getElementById("alturaH").value;

        if (b >= 0.2 && b <= 0.6) {
            b;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (b) inválido: Debe estar entre 0.2m y 0.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && a >= b && a <= 6) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (a) inválido: Debe ser mayor al ancho (b) registrado de: " + b + " y menor que 6.0m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && i >= 0.5 && 1 <= 1.6) {
            i;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (i) inválida: Debe estar entre 0.5m y 1.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && h >= i && h <= 2.4) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (h) inválida: Debe ser mayor a la altura (i) registrado de: " + i + " y menor que 2.4m");
            letSave = false;
            validaError = false;
        }
    }

    else if (id_vent == "V-10" || id_vent == "V-15" || id_vent == "V-16" || id_vent == "V-17" || id_vent == "V-18") {
        var b = document.getElementById("anchoB").value;
        var a = document.getElementById("anchoA").value;
        var i = document.getElementById("alturaI").value;
        var h = document.getElementById("alturaH").value;

        if (b >= 0.2 && b <= 0.6) {
            b;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (b) inválido: Debe estar entre 0.2m y 0.60m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && a >= 2*b && a <= 6) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho (a) inválido: Debe ser mayor al doble del ancho (b) registrado de: " + 2 * b + " y menor que 6.0m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && i >= 0.5 && 1 <= 1.6) {
            i;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (i) inválida: Debe estar entre 0.5m y 1.6m");
            letSave = false;
            validaError = false;
        }

        if (letSave == true && h >= i && h <= 2.4) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura (h) inválida: Debe ser mayor a la altura (i) registrado de: " + i + " y menor que 2.4m");
            letSave = false;
            validaError = false;
        }
    }
    //SI LOS VALORES PASAN LA VALIDACION SE PROCEDER A ALMACENAR LOS VALORES EN LA TABLA
    console.log("valor del guardado " + letSave);

    if (letSave == true) {

        var window = document.getElementById("ventana").value;
        var cant = document.getElementById("cantidad").value;
        var anchoA = document.getElementById("anchoA").value;
        var anchoB = document.getElementById("anchoB").value;
        var alturaH = document.getElementById("alturaH").value;
        var alturaI = document.getElementById("alturaI").value;
        var alturaJ = document.getElementById("alturaJ").value;
        // var numProy = document.getElementById("numProy").value;
        var espVidrio = document.getElementById("espVidrio").value;
        var area = anchoA * alturaH;

        var fila = "<tr><td>" + window + "</td><td>" + cant + "</td><td>" + anchoA + "</td><td>" + anchoB + "</td><td>" + alturaH + "</td><td>" + alturaI + "</td><td>" + alturaJ + "</td><td>" + espVidrio + "</td><td>" + area + "</td></tr>";

        var btn = document.createElement("TR");
        btn.innerHTML = fila;
        document.getElementById("tablita").appendChild(btn);
    }
}
// FIN función guarda datos en tabla desde formulario

//Muestra formulario al dar clic en la ventana o en el texto de la ventana (en realidad se da clic en el span overlay)
//y tambien cierra el formulario al dar clic en cancelar (Formulario es un div al inicio del body en el html)

var fr1 = document.getElementById("for1");
var fr2 = document.getElementById("for2");
var fr3 = document.getElementById("for3");
var fr4 = document.getElementById("for4");
var fr5 = document.getElementById("for5");
var fr6 = document.getElementById("for6");
var fr7 = document.getElementById("for7");
var fr8 = document.getElementById("for8");
var fr9 = document.getElementById("for9");
var fr10 = document.getElementById("for10");
var fr11 = document.getElementById("for11");
var fr12 = document.getElementById("for12");
var fr13 = document.getElementById("for13");
var fr14 = document.getElementById("for14");
var fr15 = document.getElementById("for15");
var fr16 = document.getElementById("for16");
var fr17 = document.getElementById("for17");
var fr18 = document.getElementById("for18");
var fr19 = document.getElementById("for19");
var fr20 = document.getElementById("for20");
var fr21 = document.getElementById("for21");
var fr22 = document.getElementById("for22");

fr1.addEventListener("click", showForm);
fr2.addEventListener("click", showForm);
fr3.addEventListener("click", showForm);
fr4.addEventListener("click", showForm);
fr5.addEventListener("click", showForm);
fr6.addEventListener("click", showForm);
fr7.addEventListener("click", showForm);
fr8.addEventListener("click", showForm);
fr9.addEventListener("click", showForm);
fr10.addEventListener("click", showForm);
fr11.addEventListener("click", showForm);
fr12.addEventListener("click", showForm);
fr13.addEventListener("click", showForm);
fr14.addEventListener("click", showForm);
fr15.addEventListener("click", showForm);
fr16.addEventListener("click", showForm);
fr17.addEventListener("click", showForm);
fr18.addEventListener("click", showForm);
fr19.addEventListener("click", showForm);
fr20.addEventListener("click", showForm);
fr21.addEventListener("click", showForm);
fr22.addEventListener("click", showForm);
fr22.addEventListener("click", showForm);

function showForm(){
    opacity();
    var contenedor = document.getElementById("datos");
    contenedor.style.display = "flex";
}

function opacity() {
    var opacidad = document.getElementById("imagesID");
    opacidad.style.opacity = 0.1;
}

function noOpacity() {
    var opacidad = document.getElementById("imagesID");
    opacidad.style.opacity = 1; 
}

var can = document.getElementById("btn_cancel");
can.addEventListener("click", hideForm);

function hideForm() {
    noOpacity();
    encerar();
    var contenedor = document.getElementById("datos");
     contenedor.style.display = "none";
 }

 function encerar() {
     var cantidad = document.getElementById("cantidad");
     var anchoA = document.getElementById("anchoA");
     var anchoB = document.getElementById("anchoB");
     var altH = document.getElementById("alturaH");
     var altI = document.getElementById("alturaI");
     var altJ = document.getElementById("alturaJ");
     cantidad.value = 1;
     anchoA.value = 0;
     anchoB.value = 0;
     altH.value = 0;
     altI.value = 0;
     altJ.value = 0;
 }

function hideFormSave() {

    if (validaError == true) {
        noOpacity();
        encerar();
        var contenedor = document.getElementById("datos");
        contenedor.style.display = "none";
    }
}
//FIN mostrar formulario de datos donde está agregado que se muestre una imagen fija de la ventana al momento de llamarla a lado del form.

//Copio el parámetro "valor" del input de las ventanas para obtener su nombre por defecto y procedo a copiar
// ese dato dentro del primer input del formulario general para obtener el nombre de la ventana elegida

var copyName1 = document.getElementById("for1");
copyName1.addEventListener("click", copia_nombre1);

var copyName2 = document.getElementById("for2");
copyName2.addEventListener("click", copia_nombre2);

var copyName3 = document.getElementById("for3");
copyName3.addEventListener("click", copia_nombre3);

var copyName4 = document.getElementById("for4");
copyName4.addEventListener("click", copia_nombre4);

var copyName5 = document.getElementById("for5");
copyName5.addEventListener("click", copia_nombre5);

var copyName6 = document.getElementById("for6");
copyName6.addEventListener("click", copia_nombre6);

var copyName7 = document.getElementById("for7");
copyName7.addEventListener("click", copia_nombre7);

var copyName8 = document.getElementById("for8");
copyName8.addEventListener("click", copia_nombre8);

var copyName9 = document.getElementById("for9");
copyName9.addEventListener("click", copia_nombre9);

var copyName10 = document.getElementById("for10");
copyName10.addEventListener("click", copia_nombre10);

var copyName11 = document.getElementById("for11");
copyName11.addEventListener("click", copia_nombre11);

var copyName12 = document.getElementById("for12");
copyName12.addEventListener("click", copia_nombre12);

var copyName13 = document.getElementById("for13");
copyName13.addEventListener("click", copia_nombre13);

var copyName14 = document.getElementById("for14");
copyName14.addEventListener("click", copia_nombre14);

var copyName15 = document.getElementById("for15");
copyName15.addEventListener("click", copia_nombre15);

var copyName16 = document.getElementById("for16");
copyName16.addEventListener("click", copia_nombre16);

var copyName17 = document.getElementById("for17");
copyName17.addEventListener("click", copia_nombre17);

var copyName18 = document.getElementById("for18");
copyName18.addEventListener("click", copia_nombre18);

var copyName19 = document.getElementById("for19");
copyName19.addEventListener("click", copia_nombre19);

var copyName20 = document.getElementById("for20");
copyName20.addEventListener("click", copia_nombre20);

var copyName21 = document.getElementById("for21");
copyName21.addEventListener("click", copia_nombre21);

var copyName22 = document.getElementById("for22");
copyName22.addEventListener("click", copia_nombre22);

//Aquí, a parte de obtener el nombre del input de cada elemento también coloco la ruta de la imagen que aparece a lado
//del formulario. La cual se obtiene al llamar a la función de copiar nombre, y completo la ruta del diccionario de imagenes
//creado al inicio por un arrayList donde ya tengo todas las imagenes direccionadas.  

var ruta = document.getElementById("ImgBig");

function copia_nombre1() {
    var texto1 = document.getElementById("v1").value;
    document.getElementById("ventana").value=texto1;
    ruta.src = diccImages[0];
    // console.log("esto se copiara en formulario de ventana "+texto);
 }

function copia_nombre2() {
    var texto1 = document.getElementById("v2").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[1];
}

function copia_nombre3() {
    var texto1 = document.getElementById("v3").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[2];
}

function copia_nombre4() {
    var texto1 = document.getElementById("v4").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[3];
}

function copia_nombre5() {
    var texto1 = document.getElementById("v5").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[4];
}

function copia_nombre6() {
    var texto1 = document.getElementById("v6").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[5];
}

function copia_nombre7() {
    var texto1 = document.getElementById("v7").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[6];
}

function copia_nombre8() {
    var texto1 = document.getElementById("v8").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[7];
}

function copia_nombre9() {
    var texto1 = document.getElementById("v9").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[8];
}

function copia_nombre10() {
    var texto1 = document.getElementById("v10").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[9];
}

function copia_nombre11() {
    var texto1 = document.getElementById("v11").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[10];
}

function copia_nombre12() {
    var texto1 = document.getElementById("v12").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[11];
}

function copia_nombre13() {
    var texto1 = document.getElementById("v13").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[12];
}

function copia_nombre14() {
    var texto1 = document.getElementById("v14").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[13];
}

function copia_nombre15() {
    var texto1 = document.getElementById("v15").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[14];
}

function copia_nombre16() {
    var texto1 = document.getElementById("v16").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[15];
}

function copia_nombre17() {
    var texto1 = document.getElementById("v17").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[16];
}

function copia_nombre18() {
    var texto1 = document.getElementById("v18").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[17];
}

function copia_nombre19() {
    var texto1 = document.getElementById("v19").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[18];
}

function copia_nombre20() {
    var texto1 = document.getElementById("v20").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[19];
}

function copia_nombre21() {
    var texto1 = document.getElementById("v21").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[20];
}

function copia_nombre22() {
    var texto1 = document.getElementById("v22").value;
    document.getElementById("ventana").value = texto1;
    ruta.src = diccImages[21];
}


//FUNCION QUE ACUMULA LOS VALORES POR VENTANA PARA CALCULAR RECETA DE ALUMINIO

//SE CREA ARRAYS GENERALES QUE ALMACENAN EL TOTAL DEL CALCULO DE LAS FORMULAS DE MARCO, MARCO_HOJA, JUNQ, INTERMEDIO, ANCLA
//DEPENDIENDO EL TIPO DE VENTANA.
//LUEGO CON LOS VALORES ALMACENADOS, RECORRO EL ARRAY PARA CADA TIPO DE VENTANA Y OBTENER SU TOTAL, POR ENDE SE CREARAN DISTINTOS 
//ARRAYS DINAMICOS PARA CADA VENTANA.
// SE AGREGA ARRAYS PARA ACCESORIOS POR VENTANA YA QUE CADA UNA TAMBIEN POSEE FORMULA DISTINTA

//ARRAYS PARA V1
var marcoV1 = [];
var junqV1 = [];
var anclaV1 = [];
//*-------------------*/
var vinilV1 = [];
var tortacV1 = [];
var torMV1 = [];
var silicV1 = [];
var cintaV1 = [];
var cleanV1 = [];

//*-------------------*/
//ARRAYS PARA V2
var marcoV2 = [];
var hojaV2 = [];
var junqV2 = [];
var anclaV2 = [];

//*-------------------*/
var vinilV2 = [];
var tortacV2 = [];
var torMV2 = [];
var torHV2 = [];
var silicV2 = [];
var cintaV2 = [];
var cleanV2 = [];
//*-------------------*/

//ARRAYS PARA V3
var marcoV3 = [];
var hojaV3 = [];
var interV3 = [];
var junqV3 = [];
var anclaV3 = [];

//*-------------------*/
var vinilV3 = [];
var tortacV3 = [];
var torMV3 = [];
var torHV3 = [];
var torIV3 = [];
var torLV3 = [];
var linkV3 = [];
var manijaV3 = [];
var silicV3 = [];
var cintaV3 = [];
var cleanV3 = [];
//*-------------------*/

//ARRAYS PARA V4
var marcoV4 = [];
var hojaV4 = [];
var interV4 = [];
var junqV4 = [];
var anclaV4 = [];
//*-------------------*/
var vinilV4 = [];
var tortacV4 = [];
var torMV4 = [];
var torHV4 = [];
var torIV4 = [];
var torLV4 = [];
var linkV4 = [];
var manijaV4 = [];
var silicV4 = [];
var cintaV4 = [];
var cleanV4 = [];

//*-------------------*/

//ARRAYS PARA V5 y V6
var marcoV5_6 = [];
var hojaV5_6 = [];
var interV5_6 = [];
var junqV5_6 = [];
var anclaV5_6 = [];
//*-------------------*/
var vinilV5_6 = [];
var tortacV5_6 = [];
var torMV5_6 = [];
var torHV5_6 = [];
var torIV5_6 = [];
var torLV5_6 = [];
var linkV5_6 = [];
var manijaV5_6 = [];
var silicV5_6 = [];
var cintaV5_6 = [];
var cleanV5_6 = [];
//*-------------------*/

//ARRAYS PARA V7
var marcoV7 = [];
var hojaV7 = [];
var interV7 = [];
var junqV7 = [];
var anclaV7 = [];
//*-------------------*/
var vinilV7 = [];
var tortacV7 = [];
var torMV7 = [];
var torHV7 = [];
var torIV7 = [];
var torLV7 = [];
var linkV7 = [];
var manijaV7 = [];
var silicV7 = [];
var cintaV7 = [];
var cleanV7 = [];
//*-------------------*/

//ARRAYS PARA V8 y V9
var marcoV8_9 = [];
var hojaV8_9 = [];
var interV8_9 = [];
var junqV8_9 = [];
var anclaV8_9 = [];
//*-------------------*/
var vinilV8_9 = [];
var tortacV8_9 = [];
var torMV8_9 = [];
var torHV8_9 = [];
var torIV8_9 = [];
var torLV8_9 = [];
var linkV8_9 = [];
var manijaV8_9 = [];
var silicV8_9 = [];
var cintaV8_9 = [];
var cleanV8_9 = [];
//*-------------------*/

//ARRAYS PARA V10
var marcoV10 = [];
var hojaV10 = [];
var interV10 = [];
var junqV10 = [];
var anclaV10 = [];
//*-------------------*/
var vinilV10 = [];
var tortacV10 = [];
var torMV10 = [];
var torHV10 = [];
var torIV10 = [];
var torLV10 = [];
var linkV10 = [];
var manijaV10 = [];
var silicV10 = [];
var cintaV10 = [];
var cleanV10 = [];

//*-------------------*/

//ARRAYS PARA V11 y V12
var marcoV11_12 = [];
var hojaV11_12 = [];
var interV11_12 = [];
var junqV11_12 = [];
var anclaV11_12 = [];
//*-------------------*/
var vinilV11_12 = [];
var tortacV11_12 = [];
var torMV11_12 = [];
var torHV11_12 = [];
var torIV11_12 = [];
var torLV11_12 = [];
var linkV11_12 = [];
var manijaV11_12 = [];
var silicV11_12 = [];
var cintaV11_12 = [];
var cleanV11_12 = [];

//*-------------------*/

//ARRAYS PARA V13 y V14
var marcoV13_14 = [];
var hojaV13_14 = [];
var interV13_14 = [];
var junqV13_14 = [];
var anclaV13_14 = [];
//*-------------------*/
var vinilV13_14 = [];
var tortacV13_14 = [];
var torMV13_14 = [];
var torHV13_14 = [];
var torIV13_14 = [];
var torLV13_14 = [];
var linkV13_14 = [];
var manijaV13_14 = [];
var silicV13_14 = [];
var cintaV13_14 = [];
var cleanV13_14 = [];

//*-------------------*/

//ARRAYS PARA V15
var marcoV15 = [];
var hojaV15 = [];
var interV15 = [];
var junqV15 = [];
var anclaV15 = [];
//*-------------------*/
var vinilV15 = [];
var tortacV15 = [];
var torMV15 = [];
var torHV15 = [];
var torIV15 = [];
var torLV15 = [];
var linkV15 = [];
var manijaV15 = [];
var silicV15 = [];
var cintaV15 = [];
var cleanV15 = [];
//*-------------------*/

//ARRAYS PARA V16
var marcoV16 = [];
var hojaV16 = [];
var interV16 = [];
var junqV16 = [];
var anclaV16 = [];
//*-------------------*/
var vinilV16 = [];
var tortacV16 = [];
var torMV16 = [];
var torHV16 = [];
var torIV16 = [];
var torLV16 = [];
var linkV16 = [];
var manijaV16 = [];
var silicV16 = [];
var cintaV16 = [];
var cleanV16 = [];

//*-------------------*/

//ARRAYS PARA V17
var marcoV17 = [];
var hojaV17 = [];
var interV17 = [];
var junqV17 = [];
var anclaV17 = [];
//*-------------------*/
var vinilV17 = [];
var tortacV17 = [];
var torMV17 = [];
var torHV17 = [];
var torIV17 = [];
var torLV17 = [];
var linkV17 = [];
var manijaV17 = [];
var silicV17 = [];
var cintaV17 = [];
var cleanV17 = [];

//*-------------------*/

//ARRAYS PARA V18
var marcoV18 = [];
var hojaV18 = [];
var interV18 = [];
var junqV18 = [];
var anclaV18 = [];
//*-------------------*/
var vinilV18 = [];
var tortacV18 = [];
var torMV18 = [];
var torHV18 = [];
var torIV18 = [];
var torLV18 = [];
var linkV18 = [];
var manijaV18 = [];
var silicV18 = [];
var cintaV18 = [];
var cleanV18 = [];

//*-------------------*/

//ARRAYS PARA V19 y V20
var marcoV19_20 = [];
var hojaV19_20 = [];
var interV19_20 = [];
var junqV19_20 = [];
var anclaV19_20 = [];
//*-------------------*/
var vinilV19_20 = [];
var tortacV19_20 = [];
var torMV19_20 = [];
var torHV19_20 = [];
var torIV19_20 = [];
var torLV19_20 = [];
var linkV19_20 = [];
var manijaV19_20 = [];
var silicV19_20 = [];
var cintaV19_20 = [];
var cleanV19_20 = [];

//*-------------------*/

//ARRAYS PARA V21 y V22
var marcoV21_22 = [];
var hojaV21_22 = [];
var interV21_22 = [];
var junqV21_22 = [];
var anclaV21_22 = [];

//*-------------------*/
var vinilV21_22 = [];
var tortacV21_22 = [];
var torMV21_22 = [];
var torHV21_22 = [];
var torIV21_22 = [];
var torLV21_22 = [];
var linkV21_22 = [];
var manijaV21_22 = [];
var silicV21_22 = [];
var cintaV21_22 = [];
var cleanV21_22 = [];

//*-------------------*/

function almacena() {
    
    //ARRAY SUMATORIA FINAL DE CADA COMPONENTE
    if (validaError == true) {  
        
        //Obtengo el código de ventana
        var id_vent = document.getElementById("ventana").value;
        var sumaMarco = 0;      //Almacena el valor almacenado en la fórmula para marco
        var sumaHoja = 0;      //Almacena el valor almacenado en la fórmula para marco de hoja
        var sumaJunq = 0;         //Almacena el valor almacenado en la fórmula para junquillo
        var sumaInter = 0;         //Almacena el valor almacenado en la fórmula para intermedio
        var sumaAncla = 0;      //Almacena el valor almacenado en la fórmula para ancla
        
        var suma_arrayM = 0; //ALMACENA LA SUMATORIA DE LOS ELEMENTOS DEL ARRAY PARA MARCO PROYECTABLE
        var suma_arrayH = 0; //ALMACENA LA SUMATORIA DE LOS ELEMENTOS DEL ARRAY PARA MARCO DE HOJA
        var suma_arrayJ = 0; //ALMACENA LA SUMATORIA DE LOS ELEMENTOS DEL ARRAY PARA JUNQUILLO
        var suma_arrayI = 0; //ALMACENA LA SUMATORIA DE LOS ELEMENTOS DEL ARRAY PARA INTERMEDIO
        var suma_arrayA = 0; //ALMACENA LA SUMATORIA DE LOS ELEMENTOS DEL ARRAY PARA ANCLA

        //FORMULAS PARA V1
        if (id_vent == "V-01") {    
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            
            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO (a) +ALTURA (h))
            sumaMarco = c * 2 * (anA+alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
           
            marcoV1.push(sumaMarco); 
            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV1) 
            {
                suma_arrayM += i;
            }
            marcop.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
        
            //*-------------------------------------------------------------------------------------------------------*/
            
            //JUNQUILLO = CANTIDAD*2*(ANCHO (a) +ALTURA (h))
            sumaJunq = c * 2 * (anA + alH);
            junqV1.push(sumaJunq); 

            for (var i of junqV1) {
                suma_arrayJ += i;
            }

            junqp.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //ANCLA = CANTIDAD * 4 *  * 0,042
            sumaAncla = c * 4 * 0.042;
            anclaV1.push(sumaAncla);

            for (var i of anclaV1) {
                suma_arrayA += i;
            }

            anclap.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //Formulas para ventanas 2 - 3 -4

        else if (id_vent == "V-02") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            
            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO (b) +ALTURA (i))
            sumaMarco = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV2.push(sumaMarco);
            
            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV2) {
                suma_arrayM += i;
            }
            marcop2.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO (b) +ALTURA (i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV2.push(sumaHoja);
            
            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV2) {
                suma_arrayH += i;
            }
            hojap2.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            
            //*-------------------------------------------------------------------------------------------------------*/
             //JUNQUILLO = CANTIDAD*2*(ANCHO (b) +ALTURA (i))
            sumaJunq = c * 2 * (anB + alI);
            junqV2.push(sumaJunq);

            for (var i of junqV2) {
                suma_arrayJ += i;
            }

            junqp2.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV2.push(sumaAncla);

            for (var i of anclaV2) {
                suma_arrayA += i;
            }

            anclap2.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-03") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            
            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(b)+ALTURA(h))
            sumaMarco = c * 2 * (anB + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV3.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV3) {
                suma_arrayM += i;
            }
            marcop3.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV3.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV3) {
                suma_arrayH += i;
            }
            hojap3.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(4*(ANCHO(b))+ 2* (ALTURA(h)-ALTURA(i))+ 2 * (ALTURA(i))
            sumaJunq = c * (4 * (anB) + 2 * (alH - alI) + 2 * (alI));
            junqV3.push(sumaJunq);

            for (var i of junqV3) {
                suma_arrayJ += i;
            }

            junqp3.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD*ANCHO(b)
            sumaInter = c * anB;
            interV3.push(sumaInter);

            for (var i of interV3) {
                suma_arrayI += i;
            }

            interp3.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV3.push(sumaAncla);

            for (var i of anclaV3) {
                suma_arrayA += i;
            }

            anclap3.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-04") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alJ = parseFloat(document.getElementById("alturaJ").value);//altura J de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(b)+ALTURA(h))
            sumaMarco = c * 2 * (anB + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV4.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV4) {
                suma_arrayM += i;
            }
            marcop4.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV4.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV4) {
                suma_arrayH += i;
            }
            hojap4.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(6*(ANCHO(b))+ 2* (ALTURA(h)-ALTURA(i)-ALTURA(j))+ 2 * (ALTURA(j)+ 2 * (ALTURA(i))
            sumaJunq = c * (6 * (anB) + 2 * (alH - alI - alJ) + 2 * (alJ + 2*(alI)));
            junqV4.push(sumaJunq);

            for (var i of junqV4) {
                suma_arrayJ += i;
            }

            junqp4.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD*(2*ANCHO(b))
            sumaInter = c * (2 * anB);
            interV4.push(sumaInter);

            for (var i of interV4) {
                suma_arrayI += i;
            }

            interp4.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV4.push(sumaAncla);

            for (var i of anclaV4) {
                suma_arrayA += i;
            }

            anclap4.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS V5 Y V6
        else if (id_vent == "V-05" || id_vent == "V-06") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV5_6.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV5_6) {
                suma_arrayM += i;
            }
            marcop5_6.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(h))
            sumaHoja = c * 2 * (anB + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV5_6.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV5_6) {
                suma_arrayH += i;
            }
            hojap5_6.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(2*(ANCHO(b))+ 2* (ancho(a)-ancho(b))+ 4 * (ALTURA(h)))
            sumaJunq = c * (2 * (anB) + 2 * (anA - anB) + 4 * (alH));
            junqV5_6.push(sumaJunq);

            for (var i of junqV5_6) {
                suma_arrayJ += i;
            }

            junqp5_6.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD*ALTURA(h)
            sumaInter = c * alH;
            interV5_6.push(sumaInter);

            for (var i of interV5_6) {
                suma_arrayI += i;
            }

            interp5_6.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV5_6.push(sumaAncla);

            for (var i of anclaV5_6) {
                suma_arrayA += i;
            }

            anclap5_6.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS PARA V7
        else if (id_vent == "V-07") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV7.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV7) {
                suma_arrayM += i;
            }
            marcop7.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*4*(ANCHO(b)+ALTURA(h))
            sumaHoja = c * 4 * (anB + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV7.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV7) {
                suma_arrayH += i;
            }
            hojap7.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(4*(ANCHO(b))+6*((ALTURA(h))+2*(ancho(a) - 2*(ancho(b))))
            sumaJunq = c * (4 * (anB) + 6 * (alH) + 2 * (anA - 2 *(anB)));
            junqV7.push(sumaJunq);

            for (var i of junqV7) {
                suma_arrayJ += i;
            }

            junqp7.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* 2*(ALTURA(h))
            sumaInter = c * 2 * (alH);
            interV7.push(sumaInter);

            for (var i of interV7) {
                suma_arrayI += i;
            }

            interp7.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 12 * 0,042
            sumaAncla = c * 12 * 0.042;
            anclaV7.push(sumaAncla);

            for (var i of anclaV7) {
                suma_arrayA += i;
            }

            anclap7.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS PARA V8 Y V9
        else if (id_vent == "V-08" || id_vent == "V-09") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV8_9.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV8_9) {
                suma_arrayM += i;
            }
            marcop8_9.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV8_9.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV8_9) {
                suma_arrayH += i;
            }
            hojap8_9.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(2*(ANCHO(a)-ANCHO(b))+4*(ANCHO(b))+2*(ALTURA(i))+2*(ALTURA(h))+2*(ALTURAH-ALTURAI))
            sumaJunq = c * (2 * (anA - anB) + 4 * (anB) + 2 * (alI) + 2 * (alH) + 2 * (alH - alI));
            junqV8_9.push(sumaJunq);

            for (var i of junqV8_9) {
                suma_arrayJ += i;
            }

            junqp8_9.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD * (ALTURA(h) + ancho(b))
            sumaInter = c * (alH + anB);
            interV8_9.push(sumaInter);

            for (var i of interV8_9) {
                suma_arrayI += i;
            }

            interp8_9.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV8_9.push(sumaAncla);

            for (var i of anclaV8_9) {
                suma_arrayA += i;
            }

            anclap8_9.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS PARA V10
        else if (id_vent == "V-10") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV10.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV10) {
                suma_arrayM += i;
            }
            marcop10.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*4*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 4 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV10.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV10) {
                suma_arrayH += i;
            }
            hojap10.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(2*(ANCHO(a)-(2*ANCHO(b)))+8*(ANCHO(b))+4*(ALTURA(i))+2*(ALTURA(h))+4*(ALTURAH-ALTURAI))
            sumaJunq = c * (2 * (anA - 2*(anB)) + 8 * (anB) + 4 * (alI) + 2 * (alH) + 4 * (alH - alI));
            junqV10.push(sumaJunq);

            for (var i of junqV10) {
                suma_arrayJ += i;
            }

            junqp10.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* 2 * ((ALTURA(h) + ancho(b)))
            sumaInter = c * 2 * (alH + anB);
            interV10.push(sumaInter);

            for (var i of interV10) {
                suma_arrayI += i;
            }

            interp10.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 12 * 0,042
            sumaAncla = c * 12 * 0.042;
            anclaV10.push(sumaAncla);

            for (var i of anclaV10) {
                suma_arrayA += i;
            }

            anclap10.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS VENTANAS V11 Y V12
        else if (id_vent == "V-11" || id_vent == "V-12") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alJ = parseFloat(document.getElementById("alturaJ").value);//altura I de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV11_12.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV11_12) {
                suma_arrayM += i;
            }
            marcop11_12.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV11_12.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV11_12) {
                suma_arrayH += i;
            }
            hojap11_12.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(2*(ANCHO(a)-ANCHO(b))+6*(ANCHO(b))+2*(ALTURA(i))+2*(ALTURA(h))+2*(ALTURA(j))+2*(ALTURAH-ALTURAI-ALTURAJ))
            sumaJunq = c * (2 * (anA - anB) + 6 * (anB) + 2 * (alI) + 2 * (alH) + 2 * (alJ) + 2 * (alH - alI - alJ));
            junqV11_12.push(sumaJunq);

            for (var i of junqV11_12) {
                suma_arrayJ += i;
            }

            junqp11_12.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* ((ALTURA(h) + 2*(ancho(b)))
            sumaInter = c * (alH + 2 * (anB));
            interV11_12.push(sumaInter);

            for (var i of interV11_12) {
                suma_arrayI += i;
            }

            interp11_12.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV11_12.push(sumaAncla);

            for (var i of anclaV11_12) {
                suma_arrayA += i;
            }

            anclap11_12.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS VENTANAS V13 Y V14
        else if (id_vent == "V-13" || id_vent == "V-14") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV13_14.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV13_14) {
                suma_arrayM += i;
            }
            marcop13_14.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV13_14.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV13_14) {
                suma_arrayH += i;
            }
            hojap13_14.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(2*(ANCHO(a)-ANCHO(b))+4*(ANCHO(b))+2*(ALTURA(i))+2*(ALTURA(h))+2*(ALTURAH-ALTURAI))
            sumaJunq = c * (2 * (anA - anB) + 4 * (anB) + 2 * (alI) + 2 * (alH)  + 2 * (alH - alI));
            junqV13_14.push(sumaJunq);

            for (var i of junqV13_14) {
                suma_arrayJ += i;
            }

            junqp13_14.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* ((ALTURA(h) + ancho(b))
            sumaInter = c * (alH + anB);
            interV13_14.push(sumaInter);

            for (var i of interV13_14) {
                suma_arrayI += i;
            }

            interp13_14.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV13_14.push(sumaAncla);

            for (var i of anclaV13_14) {
                suma_arrayA += i;
            }

            anclap13_14.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS VENTANAS V15 , V16 , V17, V18
        else if (id_vent == "V-15") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alJ = parseFloat(document.getElementById("alturaJ").value);//altura J de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV15.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV15) {
                suma_arrayM += i;
            }
            marcop15.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*4*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 4 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV15.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV15) {
                suma_arrayH += i;
            }
            hojap15.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(4*(ANCHO(a) - 2*(ANCHO(b)))+12*(ANCHO(b))+4*(ALTURA(i))+2*(ALTURA(h) - ALTURA(j)) +6*(ALTURA(j)) +4*(ALTURAH-ALTURAI-ALTURAJ))
            sumaJunq = c * (4 * (anA - 2 * (anB)) + 12 * (anB) + 4 * (alI) + 2 * (alH - alJ) + 6 * (alJ) + 4 * (alH - alI - alJ));
            junqV15.push(sumaJunq);

            for (var i of junqV15) {
                suma_arrayJ += i;
            }

            junqp15.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD * (2((ALTURA(h)) + 4*(ancho(b))+ (ancho(a) - 2*(ancho(b))))
            sumaInter = c * (2 * (alH) + 4 * (anB) + (anA - 2 * (anB)));
            interV15.push(sumaInter);

            for (var i of interV15) {
                suma_arrayI += i;
            }

            interp15.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 12 * 0,042
            sumaAncla = c * 12 * 0.042;
            anclaV15.push(sumaAncla);

            for (var i of anclaV15) {
                suma_arrayA += i;
            }

            anclap15.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-16") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alJ = parseFloat(document.getElementById("alturaJ").value);//altura J de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV16.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV16) {
                suma_arrayM += i;
            }
            marcop16.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*4*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 4 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV16.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV16) {
                suma_arrayH += i;
            }
            hojap16.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(2*(ANCHO(a) - 2*(ANCHO(b)))+12*(ANCHO(b))+4*(ALTURA(i))+2*(ALTURA(h) ) +4*(ALTURA(j)) +4*(ALTURAH-ALTURAI-ALTURAJ))
            sumaJunq = c * (4 * (anA - 2 * (anB)) + 12 * (anB) + 4 * (alI) + 2 * (alH) + 4 * (alJ) + 4 * (alH - alI - alJ));
            junqV16.push(sumaJunq);

            for (var i of junqV16) {
                suma_arrayJ += i;
            }

            junqp16.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* (2((ALTURA(h)) + 4*(ancho(b)))
            sumaInter = c * (2 * (alH) + 4 * (anB));
            interV16.push(sumaInter);

            for (var i of interV16) {
                suma_arrayI += i;
            }

            interp16.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 12 * 0,042
            sumaAncla = c * 12 * 0.042;
            anclaV16.push(sumaAncla);

            for (var i of anclaV16) {
                suma_arrayA += i;
            }

            anclap16.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-17") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV17.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV17) {
                suma_arrayM += i;
            }
            marcop17.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*4*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 4 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV17.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV17) {
                suma_arrayH += i;
            }
            hojap17.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(4*(ANCHO(a) - 2*(ANCHO(b)))+8*(ANCHO(b))+6*(ALTURA(i))+6*(ALTURAH-ALTURAI))
            sumaJunq = c * (4 * (anA - 2 * (anB)) + 8 * (anB) + 6 * (alI) + 6 * (alH - alI));
            junqV17.push(sumaJunq);

            for (var i of junqV17) {
                suma_arrayJ += i;
            }

            junqp17.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* (2((ALTURA(h)) + 2*(ancho(b)) + (ancho(a) - 2 * (ancho(b))))
            sumaInter = c * (2 * (alH) + 2 * (anB) + (anA - 2 *(anB)));
            interV17.push(sumaInter);

            for (var i of interV17) {
                suma_arrayI += i;
            }

            interp17.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 12 * 0,042
            sumaAncla = c * 12 * 0.042;
            anclaV17.push(sumaAncla);

            for (var i of anclaV17) {
                suma_arrayA += i;
            }

            anclap17.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-18") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV18.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV18) {
                suma_arrayM += i;
            }
            marcop18.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*4*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 4 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV18.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV18) {
                suma_arrayH += i;
            }
            hojap18.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(2*(ANCHO(a) - 2*(ANCHO(b)))+8*(ANCHO(b))+4*(ALTURA(i))+2*(ALTURAH))
            sumaJunq = c * (2 * (anA - 2 * (anB)) + 8 * (anB) + 4 * (alI) + 2 * (alH));
            junqV18.push(sumaJunq);

            for (var i of junqV18) {
                suma_arrayJ += i;
            }

            junqp18.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* 2((ALTURA(h) +ancho(b))
            sumaInter = c * (2 * (alH + anB));
            interV18.push(sumaInter);

            for (var i of interV18) {
                suma_arrayI += i;
            }

            interp18.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 12 * 0,042
            sumaAncla = c * 12 * 0.042;
            anclaV18.push(sumaAncla);

            for (var i of anclaV18) {
                suma_arrayA += i;
            }

            anclap18.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //formulas para ventana V19 y V20
        else if (id_vent == "V-19" || id_vent == "V-20") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alJ = parseFloat(document.getElementById("alturaJ").value);//altura J de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV19_20.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV19_20) {
                suma_arrayM += i;
            }
            marcop19_20.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            ///MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV19_20.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV19_20) {
                suma_arrayH += i;
            }
            hojap19_20.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(6*(ANCHO(a) - (ANCHO(b)) +6*(ANCHO(b))+4*(ALTURA(i))+4*(ALTURA(j))+4*(ALTURAH-ALTURAI-ALTURAJ))
            sumaJunq = c * (6 * (anA - anB) + 6 * (anB) + 4 * (alI) + 4 * (alJ) + 4 * (alH - alI - alJ));
            junqV19_20.push(sumaJunq);

            for (var i of junqV19_20) {
                suma_arrayJ += i;
            }

            junqp19_20.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* ((ALTURA(h) + 2*(ancho(b)) + 2 *( ancho(a) - ancho(b)))
            sumaInter = c * (alH + 2 * (anB) + 2 * (anA - anB));
            interV19_20.push(sumaInter);

            for (var i of interV19_20) {
                suma_arrayI += i;
            }

            interp19_20.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV19_20.push(sumaAncla);

            for (var i of anclaV19_20) {
                suma_arrayA += i;
            }

            anclap19_20.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //formulas para ventana V21 y V22
        else if (id_vent == "V-21" || id_vent == "V-22") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO(a)+ALTURA(h))
            sumaMarco = c * 2 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            marcoV21_22.push(sumaMarco);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of marcoV21_22) {
                suma_arrayM += i;
            }
            marcop21_22.innerHTML = suma_arrayM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //MARCO DE HOJA = CANTIDAD*2*(ANCHO(b)+ALTURA(i))
            sumaHoja = c * 2 * (anB + alI);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL
            hojaV21_22.push(sumaHoja);

            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of hojaV21_22) {
                suma_arrayH += i;
            }
            hojap21_22.innerHTML = suma_arrayH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/
            //JUNQUILLO = CANTIDAD*(4*(ANCHO(a) - (ANCHO(b)) +4*(ANCHO(b))+4*(ALTURA(i))+4*(ALTURAH-ALTURAI))
            sumaJunq = c * (4 * (anA - anB) + 4 * (anB) + 4 * (alI)  + 4 * (alH - alI));
            junqV21_22.push(sumaJunq);

            for (var i of junqV21_22) {
                suma_arrayJ += i;
            }

            junqp21_22.innerHTML = suma_arrayJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //INTERMEDIO = CANTIDAD* ((ALTURA(h) + (ancho(b) + ( ancho(a) - ancho(b)))
            sumaInter = c * (alH + anB + (anA - anB));
            interV21_22.push(sumaInter);

            for (var i of interV21_22) {
                suma_arrayI += i;
            }

            interp21_22.innerHTML = suma_arrayI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            //ANCLA = CANTIDAD * 8 * 0,042
            sumaAncla = c * 8 * 0.042;
            anclaV21_22.push(sumaAncla);

            for (var i of anclaV21_22) {
                suma_arrayA += i;
            }

            anclap21_22.innerHTML = suma_arrayA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }       
    }
}

//FUNCION DE ALMACENAMIENTO DE DATOS PARA ACCESORIOS


function almacena2() {

    //ARRAY SUMATORIA FINAL DE CADA ACCESORIO
    if (validaError == true) {

        //Obtengo el código de ventana
        var id_vent = document.getElementById("ventana").value;

        var sumaVinil = 0;          //Almacena el valor almacenado en la fórmula para Vinil
        var sumaTorTac = 0;          //Almacena el valor almacenado en la fórmula para Tornillo CC y tacos
        var sumaTorM = 0;           //Almacena el valor almacenado en la fórmula para Tornillos Marco
        var sumaTorH = 0;           //Almacena el valor almacenado en la fórmula para Tornillos Hoja
        var sumaTorI = 0;           //Almacena el valor almacenado en la fórmula para Tornillos Intermedios
        var sumaTorL = 0;           //Almacena el valor almacenado en la fórmula para Tornillos Link
        var sumaLink = 0;           //Almacena el valor almacenado en la fórmula para link
        var sumaManija = 0;         //Almacena el valor almacenado en la fórmula para Manijas
        var sumaSilic = 0;          //Almacena el valor almacenado en la fórmula para Silicon
        var sumaCinta = 0;          //Almacena el valor almacenado en la fórmula para Cintas
        var sumaClean = 0;          //Almacena el valor almacenado en la fórmula para Material Limpieza

        //ALMACENA LA SUMATORIA DE LOS ELEMENTOS DEL ARRAY PARA ACCESORIOS

        var suma_ArrayVI = 0;       //Suma para Array de Vinil       
        var suma_ArrayTT = 0;       //Suma para Array Tornillo CC y TACOS
        var suma_ArrayTM = 0;       //Suma para Array Tornillos Marco
        var suma_ArrayTI = 0;       //Suma para Array Tornillos Intermedios
        var suma_ArrayTH = 0;       //Suma para Array Tornillos Hoja
        var suma_ArrayTL = 0;       //Suma para Array Tornillos Link
        var suma_ArrayLK = 0;       //Suma para Array link
        var suma_ArrayMJ = 0;       //Suma para Array Manijas
        var suma_ArraySL = 0;       //Suma para Array Silicon
        var suma_ArrayCA = 0;        //Suma para Array Cintas
        var suma_ArrayMA = 0;       //Suma para Array Material Limpieza

        //FORMULAS PARA V1
        if (id_vent == "V-01") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD*4*(ANCHO (a) +ALTURA (h))
            sumaVinil = c * 4 * (anA + alH);
            //REALIZO PUSH AL ARRAY DONDE ALMACENO EL TOTAL DE LA FORMULA POR SI EXISTEN MAS TIPOS DE LA MISMA VENTANA Y OBTENER SU TOTAL

            vinilV1.push(sumaVinil);
            //RECORRO LOS ELEMENTOS DEL ARRAY PARA SUMARLOS CON "of" PARA OBTENER EL ELEMENTO DE CADA INDICE
            for (var i of vinilV1) {
                suma_ArrayVI += i;
            }
            vinil1.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            
            tortacV1.push(sumaTorTac);

            for (var i of tortacV1) {
                suma_ArrayTT += i;
            }

            torcc1.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco1.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            torMV1.push(sumaTorM);

            for (var i of torMV1) {
                suma_ArrayTM += i;
            }

            torm1.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
            
            //SILICON = CANTIDAD * 4*(a+h)/6
            sumaSilic = c * 4 * (anA + alH) / 6;
            silicV1.push(sumaSilic);

            for (var i of silicV1) {
                suma_ArraySL += i;
            }

            sil1.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * 4*(a+h)/32
            sumaCinta = c * 4 * (anA + alH) / 32;
            cintaV1.push(sumaCinta);

            for (var i of cintaV1) {
                suma_ArrayCA += i;
            }

            cinta1.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV1.push(sumaClean);

            for (var i of cleanV1) {
                suma_ArrayMA += i;
            }

            clean1.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //Formulas para ventanas 2 - 3 -4

        else if (id_vent == "V-02") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD*8*(ANCHO (b) +ALTURA (i))
            sumaVinil = c * 8 * (anB + alI);
            vinilV2.push(sumaVinil);

            for (var i of vinilV2) {
                suma_ArrayVI += i;
            }
            vinil2.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*b+2*i)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*b+2*i)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anB + 2 * alI) / 0.5) + 1);
            tortacV2.push(sumaTorTac);

            for (var i of tortacV2) {
                suma_ArrayTT += i;
            }

            torcc2.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco2.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV2.push(sumaTorM);
            torHV2.push(sumaTorH);

            for (var i of torMV2) {
                suma_ArrayTM += i;
            }

            for (var i of torHV2) {
                suma_ArrayTH += i;
            }

            torm2.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh2.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * 4*(b+i)/6
            sumaSilic = c * 4 * (anB + alI) / 6;
            silicV2.push(sumaSilic);

            for (var i of silicV2) {
                suma_ArraySL += i;
            }

            sil2.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * 4*(b+i)/32
            sumaCinta = c * 4 * (anB + alI) / 32;
            cintaV2.push(sumaCinta);

            for (var i of cintaV2) {
                suma_ArrayCA += i;
            }

            cinta2.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (b x i)/5
            sumaClean = c * (anB * alI) / 5;
            cleanV2.push(sumaClean);

            for (var i of cleanV2) {
                suma_ArrayMA += i;
            }

            clean2.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-03") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 12b+4h+4i
            sumaVinil = c * (12 * anB + 4 * alH + 4 * alI);
            vinilV3.push(sumaVinil);

            for (var i of vinilV3) {
                suma_ArrayVI += i;
            }
            vinil3.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*b+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*b+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anB + 2 * alH) / 0.5) + 1);
            tortacV3.push(sumaTorTac);

            for (var i of tortacV3) {
                suma_ArrayTT += i;
            }

            torcc3.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco3.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV3.push(sumaTorM);
            torHV3.push(sumaTorH);

            for (var i of torMV3) {
                suma_ArrayTM += i;
            }

            for (var i of torHV3) {
                suma_ArrayTH += i;
            }

            torm3.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh3.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 4
            sumaTorI = c * 4;

            torIV3.push(sumaTorI);

            for (var i of torIV3) {
                suma_ArrayTI += i;
            }

            tori3.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24
            
                if (anB <= 0.5)
                {
                    sumaTorL = c * 20;
                } else {
                    sumaTorL = c * 24;
                }
                
                torLV3.push(sumaTorL);

                for (var i of torLV3) {
                    suma_ArrayTL += i;
                }

                if (anB <= 0.5) {
                    torl1_3.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
                } else {
                    torl2_3.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
                }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV3.push(sumaLink);

            for (var i of linkV3) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_3.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_3.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/
            
            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV3.push(sumaManija);

            for (var i of manijaV3) {
                suma_ArrayMJ += i;
            }

            mani3.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (6b+4h)/6
            sumaSilic = c * (6 * anB + 4 * alH) / 6;
            silicV3.push(sumaSilic);

            for (var i of silicV3) {
                suma_ArraySL += i;
            }

            sil3.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (6b+4h)/32
            sumaCinta = c * (6*anB + 4*alH) / 32;
            cintaV3.push(sumaCinta);

            for (var i of cintaV3) {
                suma_ArrayCA += i;
            }

            cinta3.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (b x h)/5
            sumaClean = c * (anB * alH) / 5;
            cleanV3.push(sumaClean);

            for (var i of cleanV3) {
                suma_ArrayMA += i;
            }

            clean3.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }
// you stay here, you already has completed all forms in v3, just need to make same forms in other windows

        else if (id_vent == "V-04") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 16b+4h+4i
            sumaVinil = c * (16 * anB + 4 * alH + 4 * alI);
            vinilV4.push(sumaVinil);

            for (var i of vinilV4) {
                suma_ArrayVI += i;
            }
            vinil4.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*b+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*b+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anB + 2 * alH) / 0.5) + 1);
            tortacV4.push(sumaTorTac);

            for (var i of tortacV4) {
                suma_ArrayTT += i;
            }

            torcc4.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco4.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV4.push(sumaTorM);
            torHV4.push(sumaTorH);

            for (var i of torMV4) {
                suma_ArrayTM += i;
            }

            for (var i of torHV4) {
                suma_ArrayTH += i;
            }

            torm4.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh4.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 8
            sumaTorI = c * 8;

            torIV4.push(sumaTorI);

            for (var i of torIV4) {
                suma_ArrayTI += i;
            }

            tori4.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24

            if (anB <= 0.5) {
                sumaTorL = c * 20;
            } else {
                sumaTorL = c * 24;
            }

            torLV4.push(sumaTorL);

            for (var i of torLV4) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_4.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_4.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV4.push(sumaLink);

            for (var i of linkV4) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_4.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_4.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV4.push(sumaManija);

            for (var i of manijaV4) {
                suma_ArrayMJ += i;
            }

            mani4.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (8b+4h)/6
            sumaSilic = c * (8 * anB + 4 * alH) / 6;
            silicV4.push(sumaSilic);

            for (var i of silicV4) {
                suma_ArraySL += i;
            }

            sil4.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (8b+4h)/32
            sumaCinta = c * (8 * anB + 4 * alH) / 32;
            cintaV4.push(sumaCinta);

            for (var i of cintaV4) {
                suma_ArrayCA += i;
            }

            cinta4.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (b x h)/5
            sumaClean = c * (anB * alH) / 5;
            cleanV4.push(sumaClean);

            for (var i of cleanV4) {
                suma_ArrayMA += i;
            }

            clean4.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS V5 Y V6
        else if (id_vent == "V-05" || id_vent == "V-06") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 4a+4b+12h
            sumaVinil = c * (4 * anA + 4 * anB + 12 * alH);
            vinilV5_6.push(sumaVinil);

            for (var i of vinilV5_6) {
                suma_ArrayVI += i;
            }
            vinil5_6.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV5_6.push(sumaTorTac);

            for (var i of tortacV5_6) {
                suma_ArrayTT += i;
            }

            torcc5_6.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco5_6.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV5_6.push(sumaTorM);
            torHV5_6.push(sumaTorH);

            for (var i of torMV5_6) {
                suma_ArrayTM += i;
            }

            for (var i of torHV5_6) {
                suma_ArrayTH += i;
            }

            torm5_6.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh5_6.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 4
            sumaTorI = c * 4;

            torIV5_6.push(sumaTorI);

            for (var i of torIV5_6) {
                suma_ArrayTI += i;
            }

            tori5_6.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24

            if (anB <= 0.5) {
                sumaTorL = c * 20;
            } else {
                sumaTorL = c * 24;
            }

            torLV5_6.push(sumaTorL);

            for (var i of torLV5_6) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_5_6.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_5_6.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV5_6.push(sumaLink);

            for (var i of linkV5_6) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_5_6.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_5_6.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV5_6.push(sumaManija);

            for (var i of manijaV5_6) {
                suma_ArrayMJ += i;
            }

            mani5_6.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (4a+6h)/6
            sumaSilic = c * (4 * anA + 6 * alH) / 6;
            silicV5_6.push(sumaSilic);

            for (var i of silicV5_6) {
                suma_ArraySL += i;
            }

            sil5_6.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (4a+6h)/32
            sumaCinta = c * (4 * anA + 6 * alH) / 32;
            cintaV5_6.push(sumaCinta);

            for (var i of cintaV5_6) {
                suma_ArrayCA += i;
            }

            cinta5_6.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV5_6.push(sumaClean);

            for (var i of cleanV5_6) {
                suma_ArrayMA += i;
            }

            clean5_6.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS PARA V7
        else if (id_vent == "V-07") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 4a+8b+20h
            sumaVinil = c * (4 * anA + 8 * anB + 20 * alH);
            vinilV7.push(sumaVinil);

            for (var i of vinilV7) {
                suma_ArrayVI += i;
            }
            vinil7.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV7.push(sumaTorTac);

            for (var i of tortacV7) {
                suma_ArrayTT += i;
            }

            torcc7.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco7.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 16
            sumaTorM = c * 8;
            sumaTorH = sumaTorM*2;

            torMV7.push(sumaTorM);
            torHV7.push(sumaTorH);

            for (var i of torMV7) {
                suma_ArrayTM += i;
            }

            for (var i of torHV7) {
                suma_ArrayTH += i;
            }

            torm7.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh7.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 8
            sumaTorI = c * 8;

            torIV7.push(sumaTorI);

            for (var i of torIV7) {
                suma_ArrayTI += i;
            }

            tori7.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 40 ó 48 IF 0.2<b<0.5 USA 40 OR 0.2<b<0.6 USA 48

            if (anB <= 0.5) {
                sumaTorL = c * 40;
            } else {
                sumaTorL = c * 48;
            }

            torLV7.push(sumaTorL);

            for (var i of torLV7) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_7.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_7.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 4;

            linkV7.push(sumaLink);

            for (var i of linkV7) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_7.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_7.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 2
            sumaManija = c*2;
            manijaV7.push(sumaManija);

            for (var i of manijaV7) {
                suma_ArrayMJ += i;
            }

            mani7.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (4a+8h)/6
            sumaSilic = c * (4 * anA + 8 * alH) / 6;
            silicV7.push(sumaSilic);

            for (var i of silicV7) {
                suma_ArraySL += i;
            }

            sil7.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (4a+8h)/32
            sumaCinta = c * (4 * anA + 8 * alH) / 32;
            cintaV7.push(sumaCinta);

            for (var i of cintaV7) {
                suma_ArrayCA += i;
            }

            cinta7.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV7.push(sumaClean);

            for (var i of cleanV7) {
                suma_ArrayMA += i;
            }

            clean7.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS PARA V8 Y V9
        else if (id_vent == "V-08" || id_vent == "V-09") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 4a+8b+8h+4i
            sumaVinil = c * (4 * anA + 8 * anB + 8 * alH + 4 * alI);
            vinilV8_9.push(sumaVinil);

            for (var i of vinilV8_9) {
                suma_ArrayVI += i;
            }
            vinil8_9.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV8_9.push(sumaTorTac);

            for (var i of tortacV8_9) {
                suma_ArrayTT += i;
            }

            torcc8_9.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco8_9.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV8_9.push(sumaTorM);
            torHV8_9.push(sumaTorH);

            for (var i of torMV8_9) {
                suma_ArrayTM += i;
            }

            for (var i of torHV8_9) {
                suma_ArrayTH += i;
            }

            torm8_9.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh8_9.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 8
            sumaTorI = c * 8;

            torIV8_9.push(sumaTorI);

            for (var i of torIV8_9) {
                suma_ArrayTI += i;
            }

            tori8_9.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24

            if (anB <= 0.5) {
                sumaTorL = c * 20;
            } else {
                sumaTorL = c * 24;
            }

            torLV8_9.push(sumaTorL);

            for (var i of torLV8_9) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_8_9.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_8_9.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV8_9.push(sumaLink);

            for (var i of linkV8_9) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_8_9.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_8_9.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV8_9.push(sumaManija);

            for (var i of manijaV8_9) {
                suma_ArrayMJ += i;
            }

            mani8_9.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (4a+2b+6h)/6
            sumaSilic = c * (4 * anA + 2 * anB + 6 * alH) / 6;
            silicV8_9.push(sumaSilic);

            for (var i of silicV8_9) {
                suma_ArraySL += i;
            }

            sil8_9.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (4a+2b+6h)/32
            sumaCinta = c * (4 * anA + 2 * anB + 6 * alH) / 32;
            cintaV8_9.push(sumaCinta);

            for (var i of cintaV8_9) {
                suma_ArrayCA += i;
            }

            cinta8_9.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV8_9.push(sumaClean);

            for (var i of cleanV8_9) {
                suma_ArrayMA += i;
            }

            clean8_9.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS PARA V10
        else if (id_vent == "V-10") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 4a+16b+12h+8i
            sumaVinil = c * (4 * anA + 16 * anB + 12 * alH + 8 * alI);
            vinilV10.push(sumaVinil);

            for (var i of vinilV10) {
                suma_ArrayVI += i;
            }
            vinil10.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV10.push(sumaTorTac);

            for (var i of tortacV10) {
                suma_ArrayTT += i;
            }

            torcc10.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco10.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 16
            sumaTorM = c * 8;
            sumaTorH = sumaTorM * 16

            torMV10.push(sumaTorM);
            torHV10.push(sumaTorH);

            for (var i of torMV10) {
                suma_ArrayTM += i;
            }

            for (var i of torHV10) {
                suma_ArrayTH += i;
            }

            torm10.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh10.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 16
            sumaTorI = c * 16;

            torIV10.push(sumaTorI);

            for (var i of torIV10) {
                suma_ArrayTI += i;
            }

            tori10.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 40 ó 48 IF 0.2<b<0.5 USA 40 OR 0.2<b<0.6 USA 48

            if (anB <= 0.5) {
                sumaTorL = c * 40;
            } else {
                sumaTorL = c * 48;
            }

            torLV10.push(sumaTorL);

            for (var i of torLV10) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_10.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_10.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 4;

            linkV10.push(sumaLink);

            for (var i of linkV10) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_10.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_10.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 2
            sumaManija = c * 2;
            manijaV10.push(sumaManija);

            for (var i of manijaV10) {
                suma_ArrayMJ += i;
            }

            mani10.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (4a+4b+8h)/6
            sumaSilic = c * (4 * anA + 4 * anB + 8 * alH) / 6;
            silicV10.push(sumaSilic);

            for (var i of silicV10) {
                suma_ArraySL += i;
            }

            sil10.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (4a+4b+8h)/32
            sumaCinta = c * (4 * anA + 4 * anB + 8 * alH) / 32;
            cintaV10.push(sumaCinta);

            for (var i of cintaV10) {
                suma_ArrayCA += i;
            }

            cinta10.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV10.push(sumaClean);

            for (var i of cleanV10) {
                suma_ArrayMA += i;
            }

            clean10.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS VENTANAS V11 Y V12
        else if (id_vent == "V-11" || id_vent == "V-12") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 4a+12b+8h+4i
            sumaVinil = c * (4 * anA + 12 * anB + 8 * alH + 4 * alI);
            vinilV11_12.push(sumaVinil);

            for (var i of vinilV11_12) {
                suma_ArrayVI += i;
            }
            vinil11_12.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV11_12.push(sumaTorTac);

            for (var i of tortacV11_12) {
                suma_ArrayTT += i;
            }

            torcc11_12.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco11_12.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV11_12.push(sumaTorM);
            torHV11_12.push(sumaTorH);

            for (var i of torMV11_12) {
                suma_ArrayTM += i;
            }

            for (var i of torHV11_12) {
                suma_ArrayTH += i;
            }

            torm11_12.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh11_12.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 12
            sumaTorI = c * 12;

            torIV11_12.push(sumaTorI);

            for (var i of torIV11_12) {
                suma_ArrayTI += i;
            }

            tori11_12.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24

            if (anB <= 0.5) {
                sumaTorL = c * 20;
            } else {
                sumaTorL = c * 24;
            }

            torLV11_12.push(sumaTorL);

            for (var i of torLV11_12) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_11_12.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_11_12.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV11_12.push(sumaLink);

            for (var i of linkV11_12) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_11_12.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_11_12.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV11_12.push(sumaManija);

            for (var i of manijaV11_12) {
                suma_ArrayMJ += i;
            }

            mani11_12.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (4a+4b+6h)/6
            sumaSilic = c * (4 * anA + 4 * anB + 6 * alH) / 6;
            silicV11_12.push(sumaSilic);

            for (var i of silicV11_12) {
                suma_ArraySL += i;
            }

            sil11_12.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (4a+4b+6h)/32
            sumaCinta = c * (4 * anA + 4 * anB + 6 * alH) / 32;
            cintaV11_12.push(sumaCinta);

            for (var i of cintaV11_12) {
                suma_ArrayCA += i;
            }

            cinta11_12.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV11_12.push(sumaClean);

            for (var i of cleanV11_12) {
                suma_ArrayMA += i;
            }

            clean11_12.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS VENTANAS V13 Y V14
        else if (id_vent == "V-13" || id_vent == "V-14") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 4a+8b+8h+4i
            sumaVinil = c * (4 * anA + 8 * anB + 8 * alH + 4 * alI);
            vinilV13_14.push(sumaVinil);

            for (var i of vinilV13_14) {
                suma_ArrayVI += i;
            }
            vinil13_14.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV13_14.push(sumaTorTac);

            for (var i of tortacV13_14) {
                suma_ArrayTT += i;
            }

            torcc13_14.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco13_14.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV13_14.push(sumaTorM);
            torHV13_14.push(sumaTorH);

            for (var i of torMV13_14) {
                suma_ArrayTM += i;
            }

            for (var i of torHV13_14) {
                suma_ArrayTH += i;
            }

            torm13_14.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh13_14.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 8
            sumaTorI = c * 8;

            torIV13_14.push(sumaTorI);

            for (var i of torIV13_14) {
                suma_ArrayTI += i;
            }

            tori13_14.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24

            if (anB <= 0.5) {
                sumaTorL = c * 20;
            } else {
                sumaTorL = c * 24;
            }

            torLV13_14.push(sumaTorL);

            for (var i of torLV13_14) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_13_14.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_13_14.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV13_14.push(sumaLink);

            for (var i of linkV13_14) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_13_14.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_13_14.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV13_14.push(sumaManija);

            for (var i of manijaV13_14) {
                suma_ArrayMJ += i;
            }

            mani13_14.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (4a+2b+6h)/6
            sumaSilic = c * (4 * anA + 2 * anB + 6 * alH) / 6;
            silicV13_14.push(sumaSilic);

            for (var i of silicV13_14) {
                suma_ArraySL += i;
            }

            sil13_14.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (4a+2b+6h)/32
            sumaCinta = c * (4 * anA + 2 * anB + 6 * alH) / 32;
            cintaV13_14.push(sumaCinta);

            for (var i of cintaV13_14) {
                suma_ArrayCA += i;
            }

            cinta13_14.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV13_14.push(sumaClean);

            for (var i of cleanV13_14) {
                suma_ArrayMA += i;
            }

            clean13_14.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //FORMULAS VENTANAS V15 , V16 , V17, V18
        else if (id_vent == "V-15") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 8a+16b+12h+8i
            sumaVinil = c * (8 * anA + 16 * anB + 12 * alH + 8 * alI);
            vinilV15.push(sumaVinil);

            for (var i of vinilV15) {
                suma_ArrayVI += i;
            }
            vinil15.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV15.push(sumaTorTac);

            for (var i of tortacV15) {
                suma_ArrayTT += i;
            }

            torcc15.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco15.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 16
            sumaTorM = c * 8;
            sumaTorH = sumaTorM * 2

            torMV15.push(sumaTorM);
            torHV15.push(sumaTorH);

            for (var i of torMV15) {
                suma_ArrayTM += i;
            }

            for (var i of torHV15) {
                suma_ArrayTH += i;
            }

            torm15.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh15.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 28
            sumaTorI = c * 28;

            torIV15.push(sumaTorI);

            for (var i of torIV15) {
                suma_ArrayTI += i;
            }

            tori15.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 40 ó 48 IF 0.2<b<0.5 USA 40 OR 0.2<b<0.6 USA 48

            if (anB <= 0.5) {
                sumaTorL = c * 40;
            } else {
                sumaTorL = c * 48;
            }

            torLV15.push(sumaTorL);

            for (var i of torLV15) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_15.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_15.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 4;

            linkV15.push(sumaLink);

            for (var i of linkV15) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_15.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_15.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 2
            sumaManija = c * 2;
            manijaV15.push(sumaManija);

            for (var i of manijaV15) {
                suma_ArrayMJ += i;
            }

            mani15.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (6a+4b+8h)/6
            sumaSilic = c * (6 * anA + 4 * anB + 8 * alH) / 6;
            silicV15.push(sumaSilic);

            for (var i of silicV15) {
                suma_ArraySL += i;
            }

            sil15.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (6a+4b+8h)/32
            sumaCinta = c * (6 * anA + 4 * anB + 8 * alH) / 32;
            cintaV15.push(sumaCinta);

            for (var i of cintaV15) {
                suma_ArrayCA += i;
            }

            cinta15.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV15.push(sumaClean);

            for (var i of cleanV15) {
                suma_ArrayMA += i;
            }

            clean15.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-16") {
            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 8a+16b+12h+8i
            sumaVinil = c * (8 * anA + 16 * anB + 12 * alH + 8 * alI);
            vinilV16.push(sumaVinil);

            for (var i of vinilV16) {
                suma_ArrayVI += i;
            }
            vinil16.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV16.push(sumaTorTac);

            for (var i of tortacV16) {
                suma_ArrayTT += i;
            }

            torcc16.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco16.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 16
            sumaTorM = c * 8;
            sumaTorH = sumaTorM * 2

            torMV16.push(sumaTorM);
            torHV16.push(sumaTorH);

            for (var i of torMV16) {
                suma_ArrayTM += i;
            }

            for (var i of torHV16) {
                suma_ArrayTH += i;
            }

            torm16.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh16.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 28
            sumaTorI = c * 28;

            torIV16.push(sumaTorI);

            for (var i of torIV16) {
                suma_ArrayTI += i;
            }

            tori16.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 40 ó 48 IF 0.2<b<0.5 USA 40 OR 0.2<b<0.6 USA 48

            if (anB <= 0.5) {
                sumaTorL = c * 40;
            } else {
                sumaTorL = c * 48;
            }

            torLV16.push(sumaTorL);

            for (var i of torLV16) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_16.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_16.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 4;

            linkV16.push(sumaLink);

            for (var i of linkV16) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_16.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_16.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 2
            sumaManija = c * 2;
            manijaV16.push(sumaManija);

            for (var i of manijaV16) {
                suma_ArrayMJ += i;
            }

            mani16.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (6a+4b+8h)/6
            sumaSilic = c * (6 * anA + 4 * anB + 8 * alH) / 6;
            silicV16.push(sumaSilic);

            for (var i of silicV16) {
                suma_ArraySL += i;
            }

            sil16.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (6a+4b+8h)/32
            sumaCinta = c * (6 * anA + 4 * anB + 8 * alH) / 32;
            cintaV16.push(sumaCinta);

            for (var i of cintaV16) {
                suma_ArrayCA += i;
            }

            cinta16.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV16.push(sumaClean);

            for (var i of cleanV16) {
                suma_ArrayMA += i;
            }

            clean16.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-17") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 8a+8b+12h+8i
            sumaVinil = c * (8 * anA + 8 * anB + 12 * alH + 8 * alI);
            vinilV17.push(sumaVinil);

            for (var i of vinilV17) {
                suma_ArrayVI += i;
            }
            vinil17.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV17.push(sumaTorTac);

            for (var i of tortacV17) {
                suma_ArrayTT += i;
            }

            torcc17.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco17.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 16
            sumaTorM = c * 8;
            sumaTorH = sumaTorM * 2

            torMV17.push(sumaTorM);
            torHV17.push(sumaTorH);

            for (var i of torMV17) {
                suma_ArrayTM += i;
            }

            for (var i of torHV17) {
                suma_ArrayTH += i;
            }

            torm17.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh17.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 20
            sumaTorI = c * 20;

            torIV17.push(sumaTorI);

            for (var i of torIV17) {
                suma_ArrayTI += i;
            }

            tori17.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 40 ó 48 IF 0.2<b<0.5 USA 40 OR 0.2<b<0.6 USA 48

            if (anB <= 0.5) {
                sumaTorL = c * 40;
            } else {
                sumaTorL = c * 48;
            }

            torLV17.push(sumaTorL);

            for (var i of torLV17) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_17.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_17.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 4;

            linkV17.push(sumaLink);

            for (var i of linkV17) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_17.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_17.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 2
            sumaManija = c * 2;
            manijaV17.push(sumaManija);

            for (var i of manijaV17) {
                suma_ArrayMJ += i;
            }

            mani17.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (6a+8h)/6
            sumaSilic = c * (6 * anA + 8 * alH) / 6;
            silicV17.push(sumaSilic);

            for (var i of silicV17) {
                suma_ArraySL += i;
            }

            sil17.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (6a+8h)/32
            sumaCinta = c * (6 * anA + 8 * alH) / 32;
            cintaV17.push(sumaCinta);

            for (var i of cintaV17) {
                suma_ArrayCA += i;
            }

            cinta17.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV17.push(sumaClean);

            for (var i of cleanV17) {
                suma_ArrayMA += i;
            }

            clean17.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        else if (id_vent == "V-18") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 4a+16b+8h+12i
            sumaVinil = c * (4 * anA + 16 * anB + 8 * alH + 12 * alI);
            vinilV18.push(sumaVinil);

            for (var i of vinilV18) {
                suma_ArrayVI += i;
            }
            vinil18.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV18.push(sumaTorTac);

            for (var i of tortacV18) {
                suma_ArrayTT += i;
            }

            torcc18.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco18.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 16
            sumaTorM = c * 8;
            sumaTorH = sumaTorM * 2

            torMV18.push(sumaTorM);
            torHV18.push(sumaTorH);

            for (var i of torMV18) {
                suma_ArrayTM += i;
            }

            for (var i of torHV18) {
                suma_ArrayTH += i;
            }

            torm18.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh18.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 16
            sumaTorI = c * 16;

            torIV18.push(sumaTorI);

            for (var i of torIV18) {
                suma_ArrayTI += i;
            }

            tori18.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 40 ó 48 IF 0.2<b<0.5 USA 40 OR 0.2<b<0.6 USA 48

            if (anB <= 0.5) {
                sumaTorL = c * 40;
            } else {
                sumaTorL = c * 48;
            }

            torLV18.push(sumaTorL);

            for (var i of torLV18) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_18.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_18.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 4;

            linkV18.push(sumaLink);

            for (var i of linkV18) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_18.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_18.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 2
            sumaManija = c * 2;
            manijaV18.push(sumaManija);

            for (var i of manijaV18) {
                suma_ArrayMJ += i;
            }

            mani18.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (4a+4b+8h)/6
            sumaSilic = c * (4 * anA + 4 * anB + 8 * alH) / 6;
            silicV18.push(sumaSilic);

            for (var i of silicV18) {
                suma_ArraySL += i;
            }

            sil18.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (4a+4b+8h)/32
            sumaCinta = c * (4 * anA + 4 * anB + 8 * alH) / 32;
            cintaV18.push(sumaCinta);

            for (var i of cintaV18) {
                suma_ArrayCA += i;
            }

            cinta18.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV18.push(sumaClean);

            for (var i of cleanV18) {
                suma_ArrayMA += i;
            }

            clean18.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //formulas para ventana V19 y V20
        else if (id_vent == "V-19" || id_vent == "V-20") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 12a+4b+8h+4i
            sumaVinil = c * (12 * anA + 4 * anB + 8 * alH + 4 * alI);
            vinilV19_20.push(sumaVinil);

            for (var i of vinilV19_20) {
                suma_ArrayVI += i;
            }
            vinil19_20.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV19_20.push(sumaTorTac);

            for (var i of tortacV19_20) {
                suma_ArrayTT += i;
            }

            torcc19_20.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco19_20.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV19_20.push(sumaTorM);
            torHV19_20.push(sumaTorH);

            for (var i of torMV19_20) {
                suma_ArrayTM += i;
            }

            for (var i of torHV19_20) {
                suma_ArrayTH += i;
            }

            torm19_20.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh19_20.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 20
            sumaTorI = c * 20;

            torIV19_20.push(sumaTorI);

            for (var i of torIV19_20) {
                suma_ArrayTI += i;
            }

            tori19_20.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24

            if (anB <= 0.5) {
                sumaTorL = c * 20;
            } else {
                sumaTorL = c * 24;
            }

            torLV19_20.push(sumaTorL);

            for (var i of torLV19_20) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_19_20.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_19_20.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV19_20.push(sumaLink);

            for (var i of linkV19_20) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_19_20.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_19_20.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV19_20.push(sumaManija);

            for (var i of manijaV19_20) {
                suma_ArrayMJ += i;
            }

            mani19_20.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (8a+6h)/6
            sumaSilic = c * (8 * anA + 6 * alH) / 6;
            silicV19_20.push(sumaSilic);

            for (var i of silicV19_20) {
                suma_ArraySL += i;
            }

            sil19_20.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (8a+6h)/32
            sumaCinta = c * (8 * anA + 6 * alH) / 32;
            cintaV19_20.push(sumaCinta);

            for (var i of cintaV19_20) {
                suma_ArrayCA += i;
            }

            cinta19_20.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV19_20.push(sumaClean);

            for (var i of cleanV19_20) {
                suma_ArrayMA += i;
            }

            clean19_20.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }

        //formulas para ventana V21 y V22
        else if (id_vent == "V-21" || id_vent == "V-22") {

            var c = parseInt(document.getElementById("cantidad").value); //cantidad de ventana obtenida de formulario
            var anA = parseFloat(document.getElementById("anchoA").value); //ancho A de ventana obtenida de formulario
            var anB = parseFloat(document.getElementById("anchoB").value); //ancho B de ventana obtenida de formulario
            var alH = parseFloat(document.getElementById("alturaH").value);//altura H de ventana obtenida de formulario 
            var alI = parseFloat(document.getElementById("alturaI").value);//altura I de ventana obtenida de formulario 

            //VINIL P-92 = CANTIDAD * 8a+4b+8h+4i
            sumaVinil = c * (8 * anA + 4 * anB + 8 * alH + 4 * alI);
            vinilV21_22.push(sumaVinil);

            for (var i of vinilV21_22) {
                suma_ArrayVI += i;
            }
            vinil21_22.innerHTML = suma_ArrayVI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO CC 8-18 x 1 1/2 = CANTIDAD * ENTERO((2*a+2*h)/0.5)+1
            //TACOS =                    CANTIDAD * ENTERO((2*a+2*h)/0.5)+1

            sumaTorTac = c * (Math.trunc((2 * anA + 2 * alH) / 0.5) + 1);
            tortacV21_22.push(sumaTorTac);

            for (var i of tortacV21_22) {
                suma_ArrayTT += i;
            }

            torcc21_22.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            taco21_22.innerHTML = suma_ArrayTT; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //MARCO TORNILLO CP 3/16 X 1/2 NEGROS = CANTIDAD * 8
            //HOJA TORNILLO CP 3/16 X 3/8 NEGROS = CANTIDAD * 8
            sumaTorM = c * 8;
            sumaTorH = sumaTorM

            torMV21_22.push(sumaTorM);
            torHV21_22.push(sumaTorH);

            for (var i of torMV21_22) {
                suma_ArrayTM += i;
            }

            for (var i of torHV21_22) {
                suma_ArrayTH += i;
            }

            torm21_22.innerHTML = suma_ArrayTM; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            torh21_22.innerHTML = suma_ArrayTH; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //INTERMEDIO TORNILLO CC 8-18 X 3/4 GALV = CANTIDAD * 12
            sumaTorI = c * 12;

            torIV21_22.push(sumaTorI);

            for (var i of torIV21_22) {
                suma_ArrayTI += i;
            }

            tori21_22.innerHTML = suma_ArrayTI; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.

            //*-------------------------------------------------------------------------------------------------------*/

            //TORNILLO PARA LINK = SON DE 20 ó 24 IF 0.2<b<0.5 USA 20 OR 0.2<b<0.6 USA 24

            if (anB <= 0.5) {
                sumaTorL = c * 20;
            } else {
                sumaTorL = c * 24;
            }

            torLV21_22.push(sumaTorL);

            for (var i of torLV21_22) {
                suma_ArrayTL += i;
            }

            if (anB <= 0.5) {
                torl1_21_22.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                torl2_21_22.innerHTML = suma_ArrayTL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //LINK = SO IF 0.2<b<0.5 USA link 12" OR 0.2<b<0.6 USA link 16"
            sumaLink = c * 2;

            linkV21_22.push(sumaLink);

            for (var i of linkV21_22) {
                suma_ArrayLK += i;
            }

            if (anB <= 0.5) {
                link12_21_22.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            } else {
                link16_21_22.innerHTML = suma_ArrayLK; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            }

            //*-------------------------------------------------------------------------------------------------------*/

            //MANUBRIO = CANTIDAD * 1
            sumaManija = c;
            manijaV21_22.push(sumaManija);

            for (var i of manijaV21_22) {
                suma_ArrayMJ += i;
            }

            mani21_22.innerHTML = suma_ArrayMJ; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //SILICON = CANTIDAD * (6a+6h)/6
            sumaSilic = c * (6 * anA + 6 * alH) / 6;
            silicV21_22.push(sumaSilic);

            for (var i of silicV21_22) {
                suma_ArraySL += i;
            }

            sil21_22.innerHTML = suma_ArraySL; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CINTA = CANTIDAD * (6a+6h)/32
            sumaCinta = c * (6 * anA + 6 * alH) / 32;
            cintaV21_22.push(sumaCinta);

            for (var i of cintaV21_22) {
                suma_ArrayCA += i;
            }

            cinta21_22.innerHTML = suma_ArrayCA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/

            //CLEAN = CANTIDAD * (a x h)/5
            sumaClean = c * (anA * alH) / 5;
            cleanV21_22.push(sumaClean);

            for (var i of cleanV21_22) {
                suma_ArrayMA += i;
            }

            clean21_22.innerHTML = suma_ArrayMA; //MUESTRO EN LA RESPECTIVA TABLA DE LA VENTANA EL TOTAL OBTENIDO.
            //*-------------------------------------------------------------------------------------------------------*/
        }
    }
}



/* 
Función donde obtengo el último total obtenido por cada componente en cada tipo de ventana, Para despues
proceder a realizar la suma final de los componentes.
*/

function totales() {
    
    /*Creo un arrayList por el total de cada componente (marco, hoja, intermedio, junquillo, ancla), 
    por cada tipo de ventana y al final obtengo la suma total.
    El ARRAY obtendrá siempre el último valor en la celda de sus respectivas tablas por ello se lo crea dentro de la función (totales)
    caso contrario si se creará el array fuera de la función, en cada instancia que se la invoque se aunmentará los valores obtenidos
    por cada vez que se la invoque duplicando siempre el array, en cambio al colocarlo por dentro siempre obtendré el últmimo
    valor de cada componente sobreescribiendo el anterior
    la función se invocará por medio del boton de TOTALIZAR en el HTML principal*/
    
    /*NOTA: cuando quiero obtener el valor de un elemento distinto de un input, uso el método .innerHTML ya que con el 
    método .value no me trae el valor*/

    var totMarco = [];
    totMarco.push(parseFloat(document.getElementById("marcop").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop2").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop3").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop4").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop5_6").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop7").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop8_9").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop10").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop11_12").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop13_14").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop15").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop16").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop17").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop18").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop19_20").innerHTML));
    totMarco.push(parseFloat(document.getElementById("marcop21_22").innerHTML));

    var sumaM =0;
    var perfM = 0;

    for (var t of totMarco) {
        sumaM += t;
    }
    
    longMarco.innerHTML = sumaM;
    
    perfM = sumaM / 6;
    noPerfM.innerHTML = perfM;

    //*-------------------------------------------------------------------------------------------------------*/

    var totJunq = [];

    totJunq.push(parseFloat(document.getElementById("junqp").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp2").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp3").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp4").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp5_6").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp7").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp8_9").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp10").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp11_12").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp13_14").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp15").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp16").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp17").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp18").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp19_20").innerHTML));
    totJunq.push(parseFloat(document.getElementById("junqp21_22").innerHTML));

    var sumaJ = 0;
    var perfJ = 0;

    for (var t of totJunq) {
        sumaJ += t;
    }

    longJunq.innerHTML = sumaJ;

    perfJ = sumaJ / 6;
    noPerfJ.innerHTML = perfJ;

    //*-------------------------------------------------------------------------------------------------------*/

    var totAncla = [];

    totAncla.push(parseFloat(document.getElementById("anclap").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap2").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap3").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap4").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap5_6").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap7").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap8_9").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap10").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap11_12").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap13_14").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap15").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap16").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap17").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap18").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap19_20").innerHTML));
    totAncla.push(parseFloat(document.getElementById("anclap21_22").innerHTML));

    var sumaA = 0;
    var perfA = 0;

    for (var t of totAncla) {
        sumaA += t;
    }

    longAncla.innerHTML = sumaA;

    perfA = sumaA / 6;
    noPerfA.innerHTML = perfA;

    //*-------------------------------------------------------------------------------------------------------*/


    var totHoja = [];

    totHoja.push(parseFloat(document.getElementById("hojap2").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap3").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap4").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap5_6").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap7").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap8_9").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap10").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap11_12").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap13_14").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap15").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap16").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap17").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap18").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap19_20").innerHTML));
    totHoja.push(parseFloat(document.getElementById("hojap21_22").innerHTML));

    var sumaH = 0;
    var perfH = 0;

    for (var t of totHoja) {
        sumaH += t;
    }

    longHoja.innerHTML = sumaH;

    perfH = sumaH / 6;
    noPerfH.innerHTML = perfH;

    //*-------------------------------------------------------------------------------------------------------*/

    var totInter = [];

    totInter.push(parseFloat(document.getElementById("interp3").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp4").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp5_6").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp7").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp8_9").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp10").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp11_12").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp13_14").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp15").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp16").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp17").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp18").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp19_20").innerHTML));
    totInter.push(parseFloat(document.getElementById("interp21_22").innerHTML));

    var sumaI = 0;
    var perfI = 0;

    for (var t of totInter) {
        sumaI += t;
    }

    longInter.innerHTML = sumaI;
    
    perfI = sumaI / 6;
    noPerfI.innerHTML = perfI;

    //*-------------------------------------------------------------------------------------------------------*/

}


function totales2() {

    /*Creo un arrayList por el total de cada accesorio (vinil, tornillos, links, cinta,etc), 
    por cada tipo de ventana y al final obtengo la suma total.
    El ARRAY obtendrá siempre el último valor en la celda de sus respectivas tablas por ello se lo crea dentro de la función (totales2)
    caso contrario si se creará el array fuera de la función, en cada instancia que se la invoque se aunmentará los valores obtenidos
    por cada vez que se la invoque duplicando siempre el array, en cambio al colocarlo por dentro siempre obtendré el último
    valor de cada accesorio, sobreescribiendo el anterior. La función se invocará por medio del boton de TOTALIZAR en el HTML principal*/

    /*NOTA: cuando quiero obtener el valor de un elemento distinto de un input, uso el método .innerHTML ya que con el 
    método .value no me trae el valor*/

    var totVinil = [];
    totVinil.push(parseFloat(document.getElementById("vinil1").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil2").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil3").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil4").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil5_6").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil7").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil8_9").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil10").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil11_12").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil13_14").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil15").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil16").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil17").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil18").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil19_20").innerHTML));
    totVinil.push(parseFloat(document.getElementById("vinil21_22").innerHTML));

    var sumaV = 0;

    for (var t of totVinil) {
        sumaV += t;
    }

    cantVinil.innerHTML = sumaV;
    //*-------------------------------------------------------------------------------------------------------*/

    var totTorcc = [];
    totTorcc.push(parseFloat(document.getElementById("torcc1").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc2").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc3").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc4").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc5_6").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc7").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc8_9").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc10").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc11_12").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc13_14").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc15").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc16").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc17").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc18").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc19_20").innerHTML));
    totTorcc.push(parseFloat(document.getElementById("torcc21_22").innerHTML));

    var sumaTcc = 0;

    for (var t of totTorcc) {
        sumaTcc += t;
    }

    cantTorcc.innerHTML = sumaTcc;

    //*-------------------------------------------------------------------------------------------------------*/

    var totTaco = [];
    totTaco.push(parseFloat(document.getElementById("taco1").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco2").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco3").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco4").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco5_6").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco7").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco8_9").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco10").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco11_12").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco13_14").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco15").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco16").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco17").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco18").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco19_20").innerHTML));
    totTaco.push(parseFloat(document.getElementById("taco21_22").innerHTML));

    var sumaTaco = 0;

    for (var t of totTaco) {
        sumaTaco += t;
    }

    cantTaco.innerHTML = sumaTaco;

    //*-------------------------------------------------------------------------------------------------------*/

    var totTorm = [];
    totTorm.push(parseFloat(document.getElementById("torm1").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm2").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm3").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm4").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm5_6").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm7").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm8_9").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm10").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm11_12").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm13_14").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm15").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm16").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm17").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm18").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm19_20").innerHTML));
    totTorm.push(parseFloat(document.getElementById("torm21_22").innerHTML));

    var sumatorm = 0;

    for (var t of totTorm) {
        sumatorm += t;
    }

    cantTorm.innerHTML = sumatorm;

    //*-------------------------------------------------------------------------------------------------------*/

    var totTorh = [];
    totTorh.push(parseFloat(document.getElementById("torh2").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh3").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh4").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh5_6").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh7").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh8_9").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh10").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh11_12").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh13_14").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh15").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh16").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh17").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh18").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh19_20").innerHTML));
    totTorh.push(parseFloat(document.getElementById("torh21_22").innerHTML));

    var sumatorh = 0;

    for (var t of totTorh) {
        sumatorh += t;
    }

    cantTorh.innerHTML = sumatorh;

    //*-------------------------------------------------------------------------------------------------------*/

    var totTori = [];
    totTori.push(parseFloat(document.getElementById("tori3").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori4").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori5_6").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori7").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori8_9").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori10").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori11_12").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori13_14").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori15").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori16").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori17").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori18").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori19_20").innerHTML));
    totTori.push(parseFloat(document.getElementById("tori21_22").innerHTML));

    var sumatori = 0;

    for (var t of totTori) {
        sumatori += t;
    }

    cantTori.innerHTML = sumatori;

    //*-------------------------------------------------------------------------------------------------------*/

    var totTorL1 = [];
    totTorL1.push(parseFloat(document.getElementById("torl1_3").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_4").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_5_6").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_7").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_8_9").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_10").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_11_12").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_13_14").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_15").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_16").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_17").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_18").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_19_20").innerHTML));
    totTorL1.push(parseFloat(document.getElementById("torl1_21_22").innerHTML));

    var sumatorl1 = 0;

    for (var t of totTorL1) {
        sumatorl1 += t;
    }

    cantTorl1.innerHTML = sumatorl1;

    //*-------------------------------------------------------------------------------------------------------*/

    var totTorL2 = [];
    totTorL2.push(parseFloat(document.getElementById("torl2_3").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_4").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_5_6").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_7").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_8_9").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_10").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_11_12").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_13_14").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_15").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_16").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_17").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_18").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_19_20").innerHTML));
    totTorL2.push(parseFloat(document.getElementById("torl2_21_22").innerHTML));

    var sumatorl2 = 0;

    for (var t of totTorL2) {
        sumatorl2 += t;
    }

    cantTorl2.innerHTML = sumatorl2;

    //*-------------------------------------------------------------------------------------------------------*/

    var totLink12 = [];
    totLink12.push(parseFloat(document.getElementById("link12_3").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_4").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_5_6").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_7").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_8_9").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_10").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_11_12").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_13_14").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_15").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_16").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_17").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_18").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_19_20").innerHTML));
    totLink12.push(parseFloat(document.getElementById("link12_21_22").innerHTML));

    var sumalink12 = 0;

    for (var t of totLink12) {
        sumalink12 += t;
    }

    cantLink12.innerHTML = sumalink12;
    //*-------------------------------------------------------------------------------------------------------*/

    var totLink16 = [];
    totLink16.push(parseFloat(document.getElementById("link16_3").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_4").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_5_6").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_7").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_8_9").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_10").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_11_12").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_13_14").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_15").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_16").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_17").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_18").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_19_20").innerHTML));
    totLink16.push(parseFloat(document.getElementById("link16_21_22").innerHTML));

    var sumalink16 = 0;

    for (var t of totLink16) {
        sumalink16 += t;
    }

    cantLink16.innerHTML = sumalink16;
    //*-------------------------------------------------------------------------------------------------------*/

    var totMani = [];
    totMani.push(parseFloat(document.getElementById("mani1").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani2").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani3").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani4").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani5_6").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani7").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani8_9").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani10").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani11_12").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani13_14").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani15").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani16").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani17").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani18").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani19_20").innerHTML));
    totMani.push(parseFloat(document.getElementById("mani21_22").innerHTML));

    var sumamani = 0;

    for (var t of totMani) {
        sumamani += t;
    }

    cantMani.innerHTML = sumamani;
    //*-------------------------------------------------------------------------------------------------------*/

    var totSil = [];
    totSil.push(parseFloat(document.getElementById("sil1").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil2").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil3").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil4").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil5_6").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil7").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil8_9").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil10").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil11_12").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil13_14").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil15").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil16").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil17").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil18").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil19_20").innerHTML));
    totSil.push(parseFloat(document.getElementById("sil21_22").innerHTML));

    var sumasil = 0;

    for (var t of totSil) {
        sumasil += t;
    }

    cantSil.innerHTML = sumasil;
    //*-------------------------------------------------------------------------------------------------------*/

    var totCinta = [];
    totCinta.push(parseFloat(document.getElementById("cinta1").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta2").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta3").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta4").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta5_6").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta7").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta8_9").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta10").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta11_12").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta13_14").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta15").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta16").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta17").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta18").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta19_20").innerHTML));
    totCinta.push(parseFloat(document.getElementById("cinta21_22").innerHTML));

    var sumacinta = 0;

    for (var t of totCinta) {
        sumacinta += t;
    }

    cantCinta.innerHTML = sumacinta;
    //*-------------------------------------------------------------------------------------------------------*/

    var totClean = [];
    totClean.push(parseFloat(document.getElementById("clean1").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean2").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean3").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean4").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean5_6").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean7").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean8_9").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean10").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean11_12").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean13_14").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean15").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean16").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean17").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean18").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean19_20").innerHTML));
    totClean.push(parseFloat(document.getElementById("clean21_22").innerHTML));

    var sumaclean = 0;

    for (var t of totClean) {
        sumaclean += t;
    }

    cantClean.innerHTML = sumaclean;
    //*-------------------------------------------------------------------------------------------------------*/
}


// FUNCION MUESTRA IMAGEN GRANDE

// function showForm() {
//     var contenedor = document.getElementById("datos");
//     contenedor.style.display = "block";
//     return true;
// }


