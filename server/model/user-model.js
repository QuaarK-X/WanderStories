const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		VisitedCity: { type: String, required: true },
		BudgetRange: {type: Number, required:true},
		YourExperience: {type: String, require: true},
		checkbox:[
			{
				type:String,
				require:true
			}
		]

	},
)

const model = mongoose.model('UserInfo', userSchema)

module.exports = model
