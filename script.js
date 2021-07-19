function go(){

    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        }
    }


let valorP = 820000;

let des15 = 15;
let des25 = 25;
let des35 = 35;

let valorTotal = 0;


function calcularDescuento(cantidad){

  let subtotal = valorP * cantidad
  let descuento = 0

  if(subtotal >= 1640000 && subtotal <= 3280000){
    descuento = des15
  }

  else if(subtotal > 3280000 && subtotal <= 6560000){
    descuento = des25
  }

  else if(subtotal > 6560000 && subtotal <= 9840000){
    descuento = des35
  }

  return descuento

}

function Comprar(){
    swal.fire({
       
    title: 'Digite la cantidad de computadores que desea comprar',
    icon: '',
    confirmButtonText: 'Calcular',
    backdrop: true,
    footer: '<span class="rojo">Esta campo es necesario</span>',
    input: 'text',
    inputPlaceholder: 'Cantidad',
    inputValue: '',      
    }
    ).then(result => {
      console.log(result.value)

      let cantidad = result.value
      let descuento = calcularDescuento(cantidad)
      let subtotal = valorP * cantidad
      let valor_descuento = subtotal / 100 * descuento

      swal.fire({

        title: `El total de su compra es de: $${subtotal} y su descuento es de: $${valor_descuento}, ${descuento}%`, 
      
        showCancelButton: true,
        confirmButtonText: `Comprar`,

      })

    })
}