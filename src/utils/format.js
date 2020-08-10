const subjects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educacao-Fisica",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
     "Química",
]

const dates = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// funcionalidades

function getSubject(subjectNumber){
const arrayPosition = +subjectNumber -1
return subjects[arrayPosition]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number (hour * 60) + minutes
}

module.exports = {
    subjects,
    dates,
    getSubject,
    convertHoursToMinutes
}