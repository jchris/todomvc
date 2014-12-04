/*global Ember, EmberPouch, DS, Todos:true */
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = EmberPouch.Adapter.extend({
	db: new PouchDB('mydb')
});
