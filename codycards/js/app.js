document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = event => {
  event.preventDefault();

  const flashcardItem = createFlashcardItem(event.target);
  const flashcards = document.querySelector('#flashcards');
  flashcards.appendChild(flashcardItem);

  event.target.reset();
}

const createFlashcardItem = form => {
  // Flashcard Items
  const flashcardItem = document.createElement('li');
  flashcardItem.classList.add('flashcards-list-item');

  // Language
  const language = document.createElement('p');
  language.textContent = form.language.value;
  flashcardItem.appendChild(language);

  // Topic
  const topic = document.createElement('h2');
  topic.textContent = form.topic.value;
  flashcardItem.appendChild(topic);

  // Concept
  const concept = document.createElement('h3');
  concept.textContent = form.concept.value;
  flashcardItem.appendChild(concept);

  // Description Textarea and Show Button
  const button1 = document.createElement('button');
  const show1 = document.createTextNode('Show Description');
  button1.appendChild(show1);
  flashcardItem.appendChild(button1);
  button1.addEventListener('click', showDescription);

  const description = document.createElement('p');
  description.textContent = form.description.value;
  description.classList.add('item-description');
  flashcardItem.appendChild(description);

  // Description Code block and Show Button
  const button2 = document.createElement('button');
  const show2 = document.createTextNode('Show Code Snippet');
  button2.appendChild(show2);
  flashcardItem.appendChild(button2);
  button2.addEventListener('click', showCode);

  const code = document.createElement('code');
  code.textContent = form.code.value;
  code.classList.add('item-code');
  flashcardItem.appendChild(code);

  // Return Flashcard
  return flashcardItem;
}

const handleDeleteAllClick = event => {
  const flashcards = document.querySelector('#flashcards');
  flashcards.innerHTML = '';
}

const showDescription = () => {
  const itemDescription = document.querySelector('.item-description');
  if (itemDescription.style.display === 'block' ) {
    itemDescription.style.display = 'none';
  } else {
    itemDescription.style.display = 'block';
  }
}

const showCode = () => {
  const itemCode = document.querySelector('.item-code');
  if (itemCode.style.display === 'block') {
    itemCode.style.display = 'none';
  } else {
    itemCode.style.display = 'block';
  }
}

