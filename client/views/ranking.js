Router.route('ranking', {
	path: '/ranking',
	template: 'ranking',
})

Template.ranking.helpers({
	"frontEndDevelopers": function() {
		var allDevelopers = Candidates.find({}).fetch();
		var frontEndDevelopers = []
		_.each(allDevelopers, function(developer) {
			var html = developer.skills['front-end'].html;
			var css = developer.skills['front-end'].css;
			var javascript = developer.skills['front-end'].javascript;
			if (html >= 7) {
				var frontEndDeveloper = {
					name: developer.name,
					email: developer.email,
					html: html,
					css: css,
					javascript: javascript
				};
				frontEndDevelopers.push(frontEndDeveloper);
			}
		})
		return frontEndDevelopers;
	}
})