//Model recipesArticle
const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    status: {
        type: String,
        default: 'Draft',
    enum: ['draft', 'public'],
  } ,
    image: [{
        type: String,
        require: true
    }],
    cloudinaryId: [{
        type: String,
        require: true,
    }],
    article:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        defaut:Date.now
    }
})
module.exports = mongoose.model('RecipesArticle', recipeSchema, 'recipesArticles');