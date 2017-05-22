#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const spawn = require('cross-spawn')
const createDebug = require('debug')

const logError = createDebug('rispa:error:eslint-config')
const currentDir = process.cwd()
const argv = process.argv.slice(2)
const eslintrcPath = `${currentDir}/.eslintrc.js`

if (!fs.existsSync(eslintrcPath)) {
  logError(`[ERROR] Config file .eslintrc.js not found in ${currentDir}`)
  process.exit(1)
}

const args = [
  'eslint',
  '--',
  '-c',
  eslintrcPath,
  '--ignore-pattern',
  'node_modules',
  currentDir,
  ...argv
]

const eslintignorePath = `${currentDir}/.eslintignore`
if (fs.existsSync(eslintignorePath)) {
  args.push('--ignore-path')
  args.push(eslintignorePath)
}

spawn(
  'yarn',
  args,
  {
    cwd: path.resolve(__dirname, '../'),
    stdio: 'inherit',
  }
)
