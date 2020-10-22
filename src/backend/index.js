const { ipcMain } = require('electron')

ipcMain.on('download:start', (event, args) => {
  console.log(args)
  event.reply('download:status', 'mensagem')
}) 