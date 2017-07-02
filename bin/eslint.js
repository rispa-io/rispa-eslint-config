#!/usr/bin/env node
const spawn = require('cross-spawn')

const args = process.argv.slice(2)
const cwd = process.cwd()
const eslint = require.resolve('eslint/bin/eslint')

const res = spawn.sync(
  'node',
  [eslint, '--ignore-pattern', '!.rispa', ...args],
  {
    cwd,
    stdio: 'inherit',
  }
)

process.exit(res.status)
