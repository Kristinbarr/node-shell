module.exports = function pwd() {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Current directory: ${process.cwd()}`)
  })
}
