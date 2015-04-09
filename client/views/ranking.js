Router.route('ranking', {
	path: '/ranking',
	template: 'ranking',
});

Template.ranking.helpers({
	"frontEndDevelopers": function() {
		return CandidatesEngine.getFrontEndDevelopers();
	},
	"backEndDevelopers": function() {
		return CandidatesEngine.getBackEndDevelopers();
	},
	"mobileDevelopers": function() {
		return CandidatesEngine.getMobileDevelopers();
	},
	"unqualifiedDevelopers": function() {
		return CandidatesEngine.getUnqualifiedDevelopers();
	},
	"allDevelopers": function() {
		return CandidatesEngine.getAllDevelopers();
	}
});