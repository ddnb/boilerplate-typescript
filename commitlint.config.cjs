'use strict'

// https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'tweak'],
    ],
  },
}
