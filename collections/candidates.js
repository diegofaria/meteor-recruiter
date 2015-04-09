Candidates = new Meteor.Collection('candidates', {});

FrontEndSchema = new SimpleSchema({
	html: {
		type: Number,
		label: "HTML",
		min: 0,
		max: 10,
		defaultValue: 0
	},
	css: {
		type: Number,
		label: "CSS",
		min: 0,
		max: 10,
		defaultValue: 0
	},
	javascript: {
		type: Number,
		label: "Javascript",
		min: 0,
		max: 10,
		defaultValue: 0
	}	
});

BackEndSchema = new SimpleSchema({
	python: {
		type: Number,
		label: "Python",
		min: 0,
		max: 10,
		defaultValue: 0
	},
	django: {
		type: Number,
		label: "Django",
		min: 0,
		max: 10,
		defaultValue: 0
	}
});

MobileSchema = new SimpleSchema({
	ios: {
		type: Number,
		label: "iOs",
		min: 0,
		max: 10,
		defaultValue: 0
	},
	android: {
		type: Number,
		label: "Android",
		min: 0,
		max: 10,
		defaultValue: 0
	}
});

SkillsSchema = new SimpleSchema({
	"front-end": {
		type: FrontEndSchema
	},
	"back-end": {
		type: BackEndSchema
	},
	"mobile": {
		type: MobileSchema
	}
})

Candidates.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Nome",
		max: 200,
		optional: false
	},
	email: {
		type: String,
		label: "Email",
		optional: false,
		regEx: SimpleSchema.RegEx.Email
	},
	skills: {
		type: SkillsSchema
	}
}));