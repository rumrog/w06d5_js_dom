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
  const flashcardItem = document.createElement('li');
  flashcardItem.classList.add('flashcards-list-item');

  const language = document.createElement('p');
  language.textContent = form.language.value;
  flashcardItem.appendChild(language);

  const topic = document.createElement('h2');
  topic.textContent = form.topic.value;
  flashcardItem.appendChild(topic);

  const concept = document.createElement('h3');
  concept.textContent = form.concept.value;
  flashcardItem.appendChild(concept);

  return flashcardItem;
}

const handleDeleteAllClick = event => {
  const flashcards = document.querySelector('#flashcards');
  flashcards.innerHTML = '';
}