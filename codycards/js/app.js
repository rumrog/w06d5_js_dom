document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = event => {
  event.preventDefault();

  const flashcardItem = createFlashcardItem(event.target);
  const flashcard = document.querySelector('#flashcard');
  flashcard.appendChild(flashcardItem);

  event.target.reset();
}