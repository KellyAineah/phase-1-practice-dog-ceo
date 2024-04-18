console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => renderImages(data.message));
  });
  
  function renderImages(images) {
    const imagesContainer = document.getElementById('dog-image-container');
    images.forEach(imageUrl => {
      let img = document.createElement('img');
      img.src = imageUrl;
      imagesContainer.appendChild(img);
    });
  }
  //challenge 2
  document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
        for (const breed in data.message) {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        }
      });
  });
  //challenge 3

  document.addEventListener('DOMContentLoaded', () => {
    const breedList = document.getElementById('dog-breeds');
    breedList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'orange';  
      }
    });
  });
  //challenge 4
  document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const lis = document.querySelectorAll('#dog-breeds li');
      lis.forEach(li => {
        if (li.textContent.startsWith(selectedLetter)) {
          li.style.display = 'list-item';
        } else {
          li.style.display = 'none';
        }
      });
    });
  });
  
  
