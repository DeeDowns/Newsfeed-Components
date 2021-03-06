/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.
*/
const pageHeader = document.querySelector('.header');
console.log(pageHeader);

function menuMaker(arr){
  const menuDiv = document.createElement('div');
  const unorderedList = document.createElement('ul');
  

  /*
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  */
  arr.forEach(item => {
    const list = document.createElement('li');
    list.textContent = `${item}`
    unorderedList.appendChild(list)
  })

  menuDiv.appendChild(unorderedList);

  menuDiv.classList.add('menu');

    /*
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  */
 const menuButton = document.querySelector('.menu-button');
 console.log(menuButton)

 
/*
  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
*/
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open')
  })
  console.log(menuDiv)

  /*
  Step 5: return your div with a 'menu' class.
  */
  return menuDiv;

}

/*
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
pageHeader.appendChild(menuMaker(menuItems))