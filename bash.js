const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

// output a prompt
process.stdout.write('prompt > ')

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ') // 'data' will be command and args separated by spaces
  const command = cmd[0] // the first element is the command. ex: 'node bash.js'
  const args = cmd.splice(1) // the rest of the elems are the args
  const executes = {
    pwd, ls, cat, curl
  }

  if (executes[command] && args) {

    for (let arg of args) {
      executes[command](arg)
    }
  } else {
    executes[command]()
  }
  process.stdout.write('\nprompt > ')
})

// const file = pwd()
// ls()
// cat(file)
