'use strict'

const twig = require('node-twig')
const extend = require('extend-shallow')

exports.name = 'node-twig'
exports.inputFormats = ['node-twig', 'twig']
exports.outputFormat = 'html'

exports.renderFileAsync = function (file, options, locals) {
  return new Promise((resolve, reject) => {
    // Prepare the options.
    options = options || {}
    options.context = options.context || {}
    extend(options.context, locals)

    // Render the template.
    twig.renderFile(file, options, (err, template) => {
      if (err) {
        return reject(err)
      }

      resolve(template)
    })
  })
}
