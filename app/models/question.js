import Model from 'ember-data/model';

export default Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  thumbsUp: DS.attr(),
  thumbsDown: DS.attr(),
  totalVotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true })
});
