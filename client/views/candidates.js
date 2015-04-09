Router.route('candidates', {
	path: '/',
	template: 'candidates',
	data: function() {
		return {
			candidates: Candidates.find({})
		}
	}
})