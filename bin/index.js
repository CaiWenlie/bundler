#!/usr/bin/env node

const { program } = require('commander')
const bundle = require('../bundle')
const splice = require('../splice')
const unbundle = require('../unbundle')

program
  .version(require('../package').version)
  .usage('<command> [options]')

program
  .command('bundle <source> [destination]')
  .description('bundle files into a txt file')
  .action((source, destination) => {
    bundle(source, destination)
  })

program
  .command('unbundle <source> [destination]')
  .description('unbundle a txt file')
  .action((source, destination) => {
    unbundle(source, destination)
  })

program
  .command('splice <source> [limit]')
  .description('splice a large file to size limited files')
  .action((source, limit) => {
    splice(source, limit)
  })

program.parse(process.argv)
