const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';

li.setAttribute('title','New Item');

li.append(document.createTextNode('Hello World'));

//append as child 
document.querySelector('ul.collection').appendChild(li);

// Creating link 
const link = document.createElement('a');
link.className = 'delete-item secondary-content' ;
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);


console.log(li);