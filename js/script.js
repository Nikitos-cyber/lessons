  'use strict';


  let collectionBooks = document.querySelectorAll('.books');
  let itemBook = document.querySelectorAll('.book');
  


  collectionBooks[0].prepend(itemBook[1]);
  collectionBooks[0].append(itemBook[2]);
  itemBook[0].after(itemBook[4]);

  document.body.style.backgroundImage = "url(' ../image/you-dont-know-js.jpg')";
 
  let blockThreeTitle = document.getElementsByTagName('h2')[2];
 
  blockThreeTitle.textContent = 'Книга 3. this и Прототипы Объектов';
  blockThreeTitle.style.color = "darkkhaki";
  let advertising = document.querySelector('.adv');

  advertising.remove();
  
  let collectionSubtitle = document.querySelectorAll('ul');
  let itemSubtitle = document.querySelectorAll('li');

  itemSubtitle[7].after(itemSubtitle[13]);
  itemSubtitle[13].after(itemSubtitle[15]);
  itemSubtitle[8].after(itemSubtitle[16]);
  collectionSubtitle[1].append(itemSubtitle[10]);
  collectionSubtitle[1].append(itemSubtitle[11]);

  console.log('itemSubtitle: ', itemSubtitle);

  let newTitle = document.createElement('li');

  newTitle.textContent = 'Глава 8: За пределами ES6';

  itemSubtitle[55].after(newTitle);
  

  
  