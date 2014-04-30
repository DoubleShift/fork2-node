greet     =   require("./index")
parseArgs =   require("minimist")
argv      =   parseArgs(process.argv, opts = {})

console.log(greet(process.argv[2], argv.drunk))
