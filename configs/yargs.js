const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'base de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'listar o no la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'hasta donde multiplica'
                })
                .check((argv, options) => {
                   if(isNaN(argv.b)){
                    throw 'base tiene ser un numero';
                   }
                   return true;
                })
            .argv;

module.exports = argv;