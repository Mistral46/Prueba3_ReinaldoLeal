function Alumno(nombre, apellido, equipo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.equipo = equipo;
}
arr=[]
const body = document.body
var input_nombre = document.createElement('input')
input_nombre.placeholder = "Nombre"
input_nombre.id = 'input_nombre'

var input_apellido = document.createElement('input')
input_apellido.placeholder='Apellido'
input_apellido.id = 'input_apellido'

var select_equipo = document.createElement('select')
select_equipo.id ='select_equipo'
    option0 = document.createElement('option')
    option0.innerHTML = 'Elegir equipo'
    option0.value = '0'
    option1 = document.createElement('option')
    option1.innerHTML = 'Wanderers'
    option1.value ='1'
    option2=document.createElement('option')
    option2.innerHTML = 'Everton'
    option2.value ='2'
    option3=document.createElement('option')
    option3.innerHTML = 'Colo colo'
    option3.value ='3'

var btn_guardar = document.createElement('button')
btn_guardar.innerHTML = "Guardar"
btn_guardar.onclick = () => guardar()

body.appendChild(input_nombre)
body.appendChild(input_apellido)
body.appendChild(select_equipo)
select_equipo.appendChild(option0)
select_equipo.appendChild(option1)
select_equipo.appendChild(option2)
select_equipo.appendChild(option3)

body.appendChild(btn_guardar)

guardar = () => {
    nombre = document.getElementById('input_nombre').value
    apellido = document.getElementById('input_apellido').value
    equipo = document.getElementById('select_equipo').value
    arr.push(new Alumno(nombre,apellido,equipo))
    document.getElementById('input_nombre').value = ''
    document.getElementById('input_apellido').value = ''
    document.getElementById('select_equipo').value = '0'
    document.getElementById('select_equipo').value = '1'
    document.getElementById('select_equipo').value = '2'
    document.getElementById('select_equipo').value = '3'

}

