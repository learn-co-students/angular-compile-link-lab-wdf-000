function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
		},
		compile: function($element, $attrs) {
			return {
				pre: function(scope, element, attrs) {
					element[0].textContent = "hi";
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function () {
					});
				}
			};
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);