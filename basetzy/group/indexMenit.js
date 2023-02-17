const toMs = require("ms")
module.exports = async(sock, m, prefix, command) => {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 MENIT`, rowId: `${prefix + command} minutes ${toMs("1minutes")}`, description: `${command.toUpperCase()} 1 MENIT`},
{title: `2 MENIT`, rowId: `${prefix + command} minutes ${toMs("2minutes")}`, description: `${command.toUpperCase()} 2 MENIT`},
{title: `3 MENIT`, rowId: `${prefix + command} minutes ${toMs("3minutes")}`, description: `${command.toUpperCase()} 3 MENIT`},
{title: `4 MENIT`, rowId: `${prefix + command} minutes ${toMs("4minutes")}`, description: `${command.toUpperCase()} 4 MENIT`},
{title: `5 MENIT`, rowId: `${prefix + command} minutes ${toMs("5minutes")}`, description: `${command.toUpperCase()} 5 MENIT`},
{title: `6 MENIT`, rowId: `${prefix + command} minutes ${toMs("6minutes")}`, description: `${command.toUpperCase()} 6 MENIT`},
{title: `7 MENIT`, rowId: `${prefix + command} minutes ${toMs("7minutes")}`, description: `${command.toUpperCase()} 7 MENIT`},
{title: `8 MENIT`, rowId: `${prefix + command} minutes ${toMs("8minutes")}`, description: `${command.toUpperCase()} 8 MENIT`},
{title: `9 MENIT`, rowId: `${prefix + command} minutes ${toMs("9minutes")}`, description: `${command.toUpperCase()} 9 MENIT`},
{title: `10 MENIT`, rowId: `${prefix + command} minutes ${toMs("10minutes")}`, description: `${command.toUpperCase()} 10 MENIT`},
{title: `11 MENIT`, rowId: `${prefix + command} minutes ${toMs("11minutes")}`, description: `${command.toUpperCase()} 11 MENIT`},
{title: `12 MENIT`, rowId: `${prefix + command} minutes ${toMs("12minutes")}`, description: `${command.toUpperCase()} 12 MENIT`},
{title: `13 MENIT`, rowId: `${prefix + command} minutes ${toMs("13minutes")}`, description: `${command.toUpperCase()} 13 MENIT`},
{title: `14 MENIT`, rowId: `${prefix + command} minutes ${toMs("14minutes")}`, description: `${command.toUpperCase()} 14 MENIT`},
{title: `15 MENIT`, rowId: `${prefix + command} minutes ${toMs("15minutes")}`, description: `${command.toUpperCase()} 15 MENIT`},
{title: `16 MENIT`, rowId: `${prefix + command} minutes ${toMs("16minutes")}`, description: `${command.toUpperCase()} 16 MENIT`},
{title: `17 MENIT`, rowId: `${prefix + command} minutes ${toMs("17minutes")}`, description: `${command.toUpperCase()} 17 MENIT`},
{title: `18 MENIT`, rowId: `${prefix + command} minutes ${toMs("18minutes")}`, description: `${command.toUpperCase()} 18 MENIT`},
{title: `19 MENIT`, rowId: `${prefix + command} minutes ${toMs("19minutes")}`, description: `${command.toUpperCase()} 19 MENIT`},
{title: `20 MENIT`, rowId: `${prefix + command} minutes ${toMs("20minutes")}`, description: `${command.toUpperCase()} 20 MENIT`},
{title: `21 MENIT`, rowId: `${prefix + command} minutes ${toMs("21minutes")}`, description: `${command.toUpperCase()} 21 MENIT`},
{title: `22 MENIT`, rowId: `${prefix + command} minutes ${toMs("22minutes")}`, description: `${command.toUpperCase()} 22 MENIT`},
{title: `23 MENIT`, rowId: `${prefix + command} minutes ${toMs("23minutes")}`, description: `${command.toUpperCase()} 23 MENIT`},
{title: `24 MENIT`, rowId: `${prefix + command} minutes ${toMs("24minutes")}`, description: `${command.toUpperCase()} 24 MENIT`},
{title: `25 MENIT`, rowId: `${prefix + command} minutes ${toMs("25minutes")}`, description: `${command.toUpperCase()} 25 MENIT`},
{title: `26 MENIT`, rowId: `${prefix + command} minutes ${toMs("26minutes")}`, description: `${command.toUpperCase()} 26 MENIT`},
{title: `27 MENIT`, rowId: `${prefix + command} minutes ${toMs("27minutes")}`, description: `${command.toUpperCase()} 27 MENIT`},
{title: `28 MENIT`, rowId: `${prefix + command} minutes ${toMs("28minutes")}`, description: `${command.toUpperCase()} 28 MENIT`},
{title: `29 MENIT`, rowId: `${prefix + command} minutes ${toMs("29minutes")}`, description: `${command.toUpperCase()} 29 MENIT`},
{title: `30 MENIT`, rowId: `${prefix + command} minutes ${toMs("30minutes")}`, description: `${command.toUpperCase()} 30 MENIT`},
{title: `31 MENIT`, rowId: `${prefix + command} minutes ${toMs("31minutes")}`, description: `${command.toUpperCase()} 31 MENIT`},
{title: `32 MENIT`, rowId: `${prefix + command} minutes ${toMs("32minutes")}`, description: `${command.toUpperCase()} 32 MENIT`},
{title: `33 MENIT`, rowId: `${prefix + command} minutes ${toMs("33minutes")}`, description: `${command.toUpperCase()} 33 MENIT`},
{title: `34 MENIT`, rowId: `${prefix + command} minutes ${toMs("34minutes")}`, description: `${command.toUpperCase()} 34 MENIT`},
{title: `35 MENIT`, rowId: `${prefix + command} minutes ${toMs("35minutes")}`, description: `${command.toUpperCase()} 35 MENIT`},
{title: `36 MENIT`, rowId: `${prefix + command} minutes ${toMs("36minutes")}`, description: `${command.toUpperCase()} 36 MENIT`},
{title: `37 MENIT`, rowId: `${prefix + command} minutes ${toMs("37minutes")}`, description: `${command.toUpperCase()} 37 MENIT`},
{title: `38 MENIT`, rowId: `${prefix + command} minutes ${toMs("38minutes")}`, description: `${command.toUpperCase()} 38 MENIT`},
{title: `39 MENIT`, rowId: `${prefix + command} minutes ${toMs("39minutes")}`, description: `${command.toUpperCase()} 39 MENIT`},
{title: `40 MENIT`, rowId: `${prefix + command} minutes ${toMs("40minutes")}`, description: `${command.toUpperCase()} 40 MENIT`},
{title: `41 MENIT`, rowId: `${prefix + command} minutes ${toMs("41minutes")}`, description: `${command.toUpperCase()} 41 MENIT`},
{title: `42 MENIT`, rowId: `${prefix + command} minutes ${toMs("42minutes")}`, description: `${command.toUpperCase()} 42 MENIT`},
{title: `43 MENIT`, rowId: `${prefix + command} minutes ${toMs("43minutes")}`, description: `${command.toUpperCase()} 43 MENIT`},
{title: `44 MENIT`, rowId: `${prefix + command} minutes ${toMs("44minutes")}`, description: `${command.toUpperCase()} 44 MENIT`},
{title: `45 MENIT`, rowId: `${prefix + command} minutes ${toMs("45minutes")}`, description: `${command.toUpperCase()} 45 MENIT`},
{title: `46 MENIT`, rowId: `${prefix + command} minutes ${toMs("46minutes")}`, description: `${command.toUpperCase()} 46 MENIT`},
{title: `47 MENIT`, rowId: `${prefix + command} minutes ${toMs("47minutes")}`, description: `${command.toUpperCase()} 47 MENIT`},
{title: `48 MENIT`, rowId: `${prefix + command} minutes ${toMs("48minutes")}`, description: `${command.toUpperCase()} 48 MENIT`},
{title: `49 MENIT`, rowId: `${prefix + command} minutes ${toMs("49minutes")}`, description: `${command.toUpperCase()} 49 MENIT`},
{title: `50 MENIT`, rowId: `${prefix + command} minutes ${toMs("50minutes")}`, description: `${command.toUpperCase()} 50 MENIT`},
{title: `51 MENIT`, rowId: `${prefix + command} minutes ${toMs("51minutes")}`, description: `${command.toUpperCase()} 51 MENIT`},
{title: `52 MENIT`, rowId: `${prefix + command} minutes ${toMs("52minutes")}`, description: `${command.toUpperCase()} 52 MENIT`},
{title: `53 MENIT`, rowId: `${prefix + command} minutes ${toMs("53minutes")}`, description: `${command.toUpperCase()} 53 MENIT`},
{title: `54 MENIT`, rowId: `${prefix + command} minutes ${toMs("54minutes")}`, description: `${command.toUpperCase()} 54 MENIT`},
{title: `55 MENIT`, rowId: `${prefix + command} minutes ${toMs("55minutes")}`, description: `${command.toUpperCase()} 55 MENIT`},
{title: `56 MENIT`, rowId: `${prefix + command} minutes ${toMs("56minutes")}`, description: `${command.toUpperCase()} 56 MENIT`},
{title: `57 MENIT`, rowId: `${prefix + command} minutes ${toMs("57minutes")}`, description: `${command.toUpperCase()} 57 MENIT`},
{title: `58 MENIT`, rowId: `${prefix + command} minutes ${toMs("58minutes")}`, description: `${command.toUpperCase()} 58 MENIT`},
{title: `59 MENIT`, rowId: `${prefix + command} minutes ${toMs("59minutes")}`, description: `${command.toUpperCase()} 59 MENIT`},
{title: `60 MENIT`, rowId: `${prefix + command} minutes ${toMs("60minutes")}`, description: `${command.toUpperCase()} 60 MENIT`},
]}]
const listMessage = { text: `${command.toUpperCase()} MENIT`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}