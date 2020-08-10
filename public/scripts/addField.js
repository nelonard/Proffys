// procurar botao

document.querySelector("#add-time")
.addEventListener('click', cloneField)

// quando clicar no botao

// executar uma acao

function cloneField(){
    console.log("Cheguei aqui")
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  //limpar os campos: quais campos?
  //pegar os campos, quais?

  const fields= newFieldContainer.querySelectorAll('input')
  console.log(fields[0].value ="")

  fields[0].value = ""
  fields[1].value = ""

  // para cada campo, limpar
fields.forEach(function(field)
    // pegar o field do momento e limpa
    field.value =""
    console.log(field)


    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
// acao duplicar os campos

// colocar na pagina

//