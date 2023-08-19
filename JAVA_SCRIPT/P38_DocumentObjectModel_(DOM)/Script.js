//DOM : The Document Object Model (DOM) is an application programming  interface (API) for manipulating HTML and XML documents. (add, remove, and modify parts of the document/HTML) .
//.................................................................................................................


/* object
array */


/* let body = ['<h2>DOM - Document Object Model</h2>', '<div class="bluetext"> It helps in dynamic effects </div>', '<div class="greentext">It also helps in data storage. </div>'] */


// document


let body = {
		elem1 : {
    	elementType: 'h2',
      text: 'DOM - Document Object Model'
    },
    elem2 : {
    	elementType: 'div',
      text: 'It helps in dynamic effects',
      classname: 'bluetext'
    },
    elem3 : {
    	elementType: 'div',
      text: ' It also helps in data storage.',
      classname: 'greentext',
      subchild1: {
      
      }
    }
}
