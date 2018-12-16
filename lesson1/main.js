new Vue({
	el: '#main',
	data: {
		title: 'VueJs',
		welcome: 'Welcome to Vue.Js Tutorial'
	},
	methods: {
		food: function(){
			return 'This is a description of food';
		}
	}
});