Package.describe({
  name: 'modweb:booster',
  summary: 'Boost your new package.',
  version: '0.1.1',
  git: 'https://github.com/modweb/meteor-booster'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.use(['coffeescript']);
  api.addFiles('booster.litcoffee', ['client', 'server']);
  api.export('Booster');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers', 'coffeescript', 'http']);
  api.use('modweb:booster');
  api.addFiles('tests/booster-tests.litcoffee');
});
