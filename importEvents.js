import events from './events.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('eventsContainer');

  events.forEach(event => {
    const cardCol = document.createElement('div');
    cardCol.className = 'col';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const img = document.createElement('img');
    img.src = event.image;
    img.alt = event.alt;
    img.className = 'card-img-top';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const link = document.createElement('a');
    link.href = event.link;
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = event.title;
    link.appendChild(title);

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = event.description;

    const details = document.createElement('strong');
    details.className = 'card-text';
    details.textContent = event.details;

    cardBody.appendChild(link);
    cardBody.appendChild(description);
    cardBody.appendChild(details);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardCol.appendChild(card);

    container.appendChild(cardCol);
  });
});