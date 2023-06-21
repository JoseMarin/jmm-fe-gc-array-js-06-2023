//objetos en JS

let Alumno = {
    'nombre': 'Diana',
    'edad': 78,
    'curso': 23
}

Alumno.notaMevia = 7.5;

console.log(Alumno.nombre);

let alumnos = [
    {
        'nombre': 'Diana',
        'edad': 78,
        'curso': 23
    },
    {
        'nombre': 'Juan',
        'edad': 38,
        'curso': 23
    },
    {
        'nombre': 'Jose',
        'edad': 30,
        'curso': 23
    }
]

let alumnas = [['Diana', 78, 23],[null,true,'Juan',38,23],['Jose',30,23]] 

alumnas[1][0]

console.log(alumnos[0].nombre);