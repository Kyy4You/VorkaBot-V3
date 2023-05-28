let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['menu']
handler.command = /^(unbanchat|ubnc)$/i
handler.admin = true

export default handler