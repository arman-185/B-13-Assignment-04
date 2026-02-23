
<!-- Question 1: -->

 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:  Difference between getElementById and getElementsByClassName and querySelector / querySelectorAll :

=> getElementById() is select one element which use for when needed a specific element. but getElementsByClassName() is used for when need lots of items in one call. querySelector() is used when we need more control. it works like CSS selectors so we can write things like .card h2 or #box. it returns only the first match. querySelectorAll() does the same thing but returns all matching elements at once.

<!-- Question 2: -->

How do you create and insert a new element into the DOM?
Answer: 

How to create and insert a new element:

=> first we use document.createElement() to make a new element in memory. at this point it is not showing on the page yet. then we can set things like textContent or className on it. after that we use appendChild() or prepend() to put it inside a parent element. only after that step the element becomes visible on the page.


<!-- Question 3: -->

What is Event Bubbling? And how does it work?
Answer: 
What Event Bubbling is:

=> Event Bubbling means when we click on an element, the event does not just stay on that element. it travels upward to the parent, then grandparent, all the way to the top of the document. so if we have a button inside a div, and we click the button, the div will also hear that click event. it goes up step by step like a bubble rising in water.

<!-- Question 4: -->

 What is Event Delegation in JavaScript? Why is it useful?

Answer:  What Event Delegation is and why it is useful:

=>  Event delegation means instead of adding a listener on every child element, we just add one listener on the parent.then when any child is clicked,the event bubbles up to the parent and we use event.target to know which one was click.it is useful because if we add new elements later, we do not need to add new listeners for them.the parent already handles everything.

<!-- Question 5: -->

What is the difference between preventDefault() and stopPropagation() methods?

Answer: Difference between preventDefault() and stopPropagation():

=> preventDefault() is used to stop the browser from doing its default behavior. for example stopping a form from submitting or stopping a link from going to a new page. but stopPropagation() is used to stop the event from bubbling up to parent elements.so it stays only on the element where  it happened and does not travel up.they are different things.one controls browser behavior and the other controls how the event moves through the DOM.

