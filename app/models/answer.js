import Model from 'ember-data/model';

export default Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', { async: true }),  
});
