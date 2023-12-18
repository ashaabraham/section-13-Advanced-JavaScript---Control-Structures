// console.log(window);
// console.dir(document);
//  document.body.children[1].children[0].href = 'https://google.com';

 let anchorElement = document.getElementById('external-link');
 anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a')
anchorElement.href = 'https://academind.com';

//Insert new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";

let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorElement);

//Remove elements
let firstH1Element = document.querySelector('h1');
firstH1Element.remove();

//Move elements
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = 'Hi this is <strong>important!</strong>'