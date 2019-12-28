const domFunctions = require('./DOM');
const dom = domFunctions.Dom();
const interact = require('interactjs');

 main = ()=>{

  interact('#form-header').draggable(
    {
      inertia: false,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      onmove: dragMoveListener
    }
  );

  console.log(dom.setEventListeners());

 
}
const dragMoveListener  = (event) => {
  var target = event.target.parentNode
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
main();