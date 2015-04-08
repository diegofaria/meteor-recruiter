Router.route('ranking', {
	path: '/ranking',
	template: 'ranking',
})

Template.ranking.helpers({
	"frontEnd": function() {
		return Candidates.find({});
	}
})