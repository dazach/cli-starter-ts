import process from 'node:process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { greetPerson } from '.'

yargs(hideBin(process.argv))
  .command(
    'greet <name>',
    'Greet a person',
    (yargs) => {
      return yargs.positional('name', {
        describe: 'Name of the person to greet',
        type: 'string',
        demandOption: true,
      })
    },
    (argv) => {
      // eslint-disable-next-line no-console
      console.log(greetPerson(argv.name))
    },
  )
  .demandCommand(1)
  .help()
  .parse()
