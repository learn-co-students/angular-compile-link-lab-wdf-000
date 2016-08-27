function SomeDirective() {
  return {
    template: [
      '<div>',
      'Replace this text!',
      '</div>'
    ].join(''),
    compile: function ($scope, $elem, $attrs) {
      return { 
	pre: function (scope, element, attrs) {
	  // document.getElementByTagName('div')[0].innerHTML('replaced');
	  element[0].innerHTML('replaced');
	},
	post: function (scope, element, attrs) {
	  element[0].addEventListener('click', function () { console.log('event listener added') });
	}
    }
  }
}

angular
  .module('app')
  .directive('someDirective', SomeDirective);
