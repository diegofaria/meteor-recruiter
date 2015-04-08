Router.route('candidates', {
	path: '/candidates',
	template: 'candidates',
	data: function() {
		return {
			candidates: Candidates.find({})
		}
	}
})