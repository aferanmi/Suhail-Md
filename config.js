const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348101316160";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_59_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU1LFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOE9VcUxNemptWCtxOE9pVDdYM0cySW8wc0RtY3Q5TUQ4Z0JMZUhUTGs0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV0VfMnpKOWhRQm1veGxUODczWDNWQVwiLFxuICBcInBob25lSWRcIjogXCJhNjU3MDg3OC0yMjYyLTQ5MGQtYjVjNC1iYTk2ZWE4ZjUzMmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMTE1LFxuICAgICAgMjE0LFxuICAgICAgMjUyLFxuICAgICAgNDgsXG4gICAgICAxNzEsXG4gICAgICA3NSxcbiAgICAgIDMsXG4gICAgICAxMjcsXG4gICAgICAxNjQsXG4gICAgICA2MSxcbiAgICAgIDIxMyxcbiAgICAgIDIwNCxcbiAgICAgIDcxLFxuICAgICAgNTYsXG4gICAgICA4NCxcbiAgICAgIDg2LFxuICAgICAgMTE3LFxuICAgICAgMTUxLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgOCxcbiAgICAgIDIyLFxuICAgICAgMTA2LFxuICAgICAgMTA5LFxuICAgICAgMjIxLFxuICAgICAgNzAsXG4gICAgICA1NCxcbiAgICAgIDkxLFxuICAgICAgMTU5LFxuICAgICAgOSxcbiAgICAgIDE0NSxcbiAgICAgIDIxMSxcbiAgICAgIDEwNCxcbiAgICAgIDEwMixcbiAgICAgIDIzNCxcbiAgICAgIDEwMCxcbiAgICAgIDE0NyxcbiAgICAgIDksXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDNWQ1lBTVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDEzMTYxNjA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY2MzAxNzk2MDM2NzExOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XKzVsd1E2OXI1c3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNkg0Mld6REdXNC9UWHlpWEViaE1LSkoyQ0pZMlVudzl4WFBYU1JlUnFVYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuaU5EaW5xWG5XenJoaWNQRU5QeFN6WTJQclZQMXk2Q2JIalBING4zZlZuc3BkOFBrYWZxUFpzK280ZlBIRW1iMnF5NGIvc00xbzB4VXdPazBkWC9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDSnFhclBud0NxTnNiT1BBQmFJc1lqYm1tdVgrUXlKSU55YjhWamJhRjl4eUcwZy9BL3FNYVBSVEtZc1RxclBBYVpuT2hXeHBhWDhjc2t1dkVBZGtnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAxMzE2MTYwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU2MTU4M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
