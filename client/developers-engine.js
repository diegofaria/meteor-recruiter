CandidatesEngine = {
	getFrontEndDevelopers : function() {
		var allDevelopers = Candidates.find({}).fetch();
		var developers = []
		var _this = this;
		_.each(allDevelopers, function(developer) {
			var developer = _this.buildTemplateObject(developer);
			if (_this.isFrontEnd(developer)) {
				developers.push(developer);
			}
		})
		return developers;
	},

	getBackEndDevelopers : function() {
		var allDevelopers = Candidates.find({}).fetch();
		var developers = []
		var _this = this;
		_.each(allDevelopers, function(developer) {
			var developer = _this.buildTemplateObject(developer);
			if (_this.isBackEnd(developer)) {
				developers.push(developer);
			}
		})
		return developers;
	},
	getMobileDevelopers : function() {
		var allDevelopers = Candidates.find({}).fetch();
		var developers = []
		var _this = this;
		_.each(allDevelopers, function(developer) {
			var developer = _this.buildTemplateObject(developer);
			if (_this.isMobile(developer)) {
				developers.push(developer);
			}
		})
		return developers;
	},
	getUnqualifiedDevelopers : function() {
		var allDevelopers = Candidates.find({}).fetch();
		var developers = []
		var _this = this;
		_.each(allDevelopers, function(developer) {
			var developer = _this.buildTemplateObject(developer);
			if (_this.isUnqualified(developer)) {
				developers.push(developer);
			}
		})
		return developers;
	},

	getAllDevelopers : function() {
		var allDevelopers = Candidates.find({}).fetch();
		var developers = []
		var _this = this;
		_.each(allDevelopers, function(developer) {
			var developer = _this.buildTemplateObject(developer);
			developers.push(developer);
		})
		return developers;
	},

	buildTemplateObject : function(developer) {
		return {
			name: developer.name,
			email: developer.email,
			html: developer.skills['front-end'].html,
			css: developer.skills['front-end'].css,
			javascript: developer.skills['front-end'].javascript,
			python: developer.skills['back-end'].python,
			django: developer.skills['back-end'].django,
			ios: developer.skills['mobile'].ios,
			android: developer.skills['mobile'].android
		}
	},

	isFrontEnd : function (developer) {
		return developer.html >= 7 && developer.css >= 7 && developer.javascript >= 7
	},

	isBackEnd : function (developer) {
		return developer.python >= 7 && developer.django >= 7
	},

	isMobile : function (developer) {
		return developer.ios >= 7 && developer.android >= 7
	},

	isUnqualified : function (developer) {
		return !this.isFrontEnd(developer) && !this.isBackEnd(developer) && !this.isMobile(developer)
	}
}
