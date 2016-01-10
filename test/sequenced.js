var Tresdin = require('../index');
var test = require('tape');

test('tresdin', function (assert) {
  assert.deepEqual(new Tresdin(['router']).register({
    app: 'router'
  }), {registeredApps: [ {app: 'router' }]});
  assert.deepEqual(new Tresdin(['router']), {
    registeredApps: [] 
  }); 
  assert.end();
});
