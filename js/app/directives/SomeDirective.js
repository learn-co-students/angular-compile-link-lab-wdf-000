function SomeDirective() {
	return {
		template: [
			'<div>',
				this.message,
			'</div>'
		].join(''),
		compile: function () {
			this.message = "Hi!";
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
