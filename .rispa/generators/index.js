const eslintActions = require('./actions')

module.exports = Object.assign(plop => {}, {
  post: plop => {
    const generators = plop.getGeneratorList()
    generators.forEach(({ name }) => {
      const generator = plop.getGenerator(name)
      if (generator.isFeatureGenerator) {
        const tempActions = generator.actions
        generator.actions = data => {
          const actions = typeof tempActions === 'function'
            ? tempActions(data)
            : tempActions

          return actions.concat(eslintActions)
        }

        plop.setGenerator(name, generator)
      }
    })
  }
})
