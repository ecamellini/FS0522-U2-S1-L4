const items = document.getElementById('items')

function selectAll() {
  // 1) Selezionare tutti gli elementi che hanno classe item
  let itemsSelected = document.getElementsByClassName('item')

  // 2) Per ognuno di questi elementi
  for (let item of itemsSelected) {
    // 3) -->> Aggiungo la classe 'selected'
    item.classList.add('selected')
  }

  // STESSA COSA CHE FARE:
  // for (let i = 0; i < itemsSelected.length; i++) {
  //   let item = itemsSelected[i]
  //   item.classList.add('selected')
  // }
}

function deSelectAll() {
  let itemsSelected = document.getElementsByClassName('item')

  for (let item of itemsSelected) {
    item.classList.remove('selected')
  }
}

function selectItem(event) {
  // Quando io gestisco un evento con una funzione, solitamente a quella funzione
  // quando la richiamo nell'HTML passerò l'oggetto event, che è un oggetto che
  // contiene tutte le informaziono dell'evento appena successo.

  // All'interno di quell'oggetto c'è SEMPRE una proprietà target che contiene
  // il tag del DOM dove è avvenuto l'evento

  let itemSelected = event.target // Questa roba qua è esattamente come aver selezionato quel tag
  // con getElementById, getElementsByClassName

  // // 2) Toggle sulla classe selected
  // // Cioè, se c'è la rimuovo, se non c'è la aggiungo
  itemSelected.classList.toggle('selected')
}



function getInputAndAddItem(eventObject) {

  if (eventObject.key !== 'Enter') { // Questa funzione, se non premo Enter, non fa nulla.
    return; // Ritorna subito, esce subito.
  }

  // -----------------------

  // 1) controlla se l'utente ha scritto qualcosa nel campo di testo
  let input = document.getElementById('input-item')
  // Tanti modi per selezionare lo stesso tag
  // let input = document.querySelector('#input-item')
  // let input = document.querySelector('#commands > input') // Posso passare a querySelector un QUALSIASI selettore CSS valido
  // let input = document.getElementById('commands').lastElementChild

  if (input.value !== '') { // Validazione dell'input dell'utente

    // 2) aggiunge un elemento alla lista
    items.innerHTML += `<div class="item" onclick="selectItem(event)">${input.value}</div>`

    // Oppure posso creare nodi con document.createElement
    // let newDiv = document.createElement('div')
    // newDiv.innerText = input.value
    // newDiv.classList.add('item')
    // newDiv.onclick = selectItem // Quando passo una funzione come valore da qualche parte, non la chiamo
    // // newDiv.addEventListener('click', selectItem) // Un altro modo per aggiungere una funzione onClick

    // // Mi viene comodo per andarli ad aggiungere non come ultimi nodi, come farei con il += su innerHTML
    // items.insertBefore(items.firstChild, newDiv)

    // 3) Voglio anche svuotare l'input, una volta che l'ho inserito
    input.value = ''

  } else {
    alert("Il campo di testo è vuoto!")
    input.style.borderColor = 'red'
  }
}
