module.exports = config:
  files:
    javascripts:
      joinTo: 'app.js'
      order:
        before: [
          'vendor/jquery.js',
          'vendor/underscore.js',
          'vendor/backbone.js'
        ]
    stylesheets: joinTo: 'app.css'