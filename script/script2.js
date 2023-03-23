let Propietario, Modelo, Placa, tipo, fecha, Inicio,  Horas;
let formulario=document.getElementById("form2")

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(Propietario,Modelo,Placa,tipo,fecha,Inicio,Horas) {
    Propietario = document.getElementById('Propietario').value
    Modelo = document.getElementById('Modelo').value
    Placa = document.getElementById('Placa').value
    tipo = document.getElementById('tipo').value
    fecha = document.getElementById('fecha').value
    Inicio = document.getElementById('Inicio').value
    Horas = document.getElementById('Horas').value
    ValidarData(Propietario,Modelo,Placa,tipo,fecha,Horas)
    GuardarLocalStorage(Propietario,Modelo,Placa,tipo,fecha,Inicio,Horas)
}

function ValidarData(Propietario,Modelo,Placa,tipo,fecha,Inicio,Horas) {
    alert()
    if(Propietario.length==0 || Modelo.length==0  || Placa.length==0 || tipo.length==0 || fecha.length==0 || Inicio.length==0 || Horas.length==0){
        swal.fire({
            title:'Error!',
            text:'Do you want to continue?',
            icon:'error',
            confirmButtonText: 'cool',
            iconColor: 'purple'

        })
    }
}

function GuardarLocalStorage(Propietario,Modelo,Placa,tipo,fecha,Inicio,Horas) {
    localStorage.setItem('Propietario del vehiculo',Propietario)
    localStorage.setItem('Modelo del vehiculo',Modelo)
    localStorage.setItem('Placa',Placa)
    localStorage.setItem('tipo',tipo)
    localStorage.setItem('fecha de Entrada',fecha)
    localStorage.setItem('Hora de inicio',Inicio)
    localStorage.setItem('Cantidad de horas',Horas)
    ListarData()

}

function ListarData() {
    let PropietarioUsu = localStorage.getItem('Propietario del vehiculo')
    let ModeloUsu = localStorage.getItem('Modelo del vehiculo')
    let PlacaUsu = localStorage.getItem('Placa')
    let tipoUsu = localStorage.getItem('tipo')
    let fechaUsu = localStorage.getItem('fecha de Entrada')
    let InicioUsu = localStorage.getItem('Hora de inicio')
    let HorasUsu = localStorage.getItem('Cantidad de horas')

    
}