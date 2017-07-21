const path = require('path')
const fs = require('fs-extra')

const packageName = '@rispa/eslint-config'

const actions = [
  {
    type: 'add',
    path: './.eslintrc.js',
    templateFile: path.resolve(__dirname, './.eslintrc.js.hbs'),
    abortOnFail: true,
  },
  (data, cfg, plop) => {
    const destPath = plop.getDestBasePath()
    const packageJsonPath = path.resolve(destPath, './package.json')
    const packageInfo = fs.readJsonSync(packageJsonPath, { throw: false })
    if (!packageInfo) {
      return false
    }

    if (!packageInfo.devDependencies) {
      packageInfo.devDependencies = {}
    }

    if (!packageInfo.devDependencies[packageName]) {
      packageInfo.devDependencies[packageName] = '*'
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageInfo, null, 2))

    return true
  }
]

module.exports = actions