import { Server } from "socket.io";
// console.log(process.env.REACT_APP_URLS)
const io = new Server({
    cors:{
      origin:"http://localhost:3000",
      credentials: true,
      methods: ["GET", "POST"]
    }
 });

let flag= false
let onlineUsers=[]
const addNewUser=(userid, socketId)=>{
  !onlineUsers.some((user)=>user.userid===userid)&& onlineUsers.push({userid, socketId})
}
const removeUser=(socketId)=>{
  onlineUsers=onlineUsers.filter((user)=>user.socketId !==socketId)
}

const getUser=(userId)=>{
  return onlineUsers.find(user=>user.userid===userId)
}

let count= false

io.on("connection", (socket) => {
  // ...
  
  socket.on("heartbeat", ({data})=>{
    ;
    ;
  }) 
  socket.on("following", (userId)=>{
    // ;
    addNewUser(userId, socket.id)
  }) 
  socket.on("offline", ({offline, userId})=>{
    const logedoutUser=getUser(userId)
    removeUser(logedoutUser?.socketId)
    ;
  }) 

  socket.on("sendFollowingNotification", ({receivers, sender,senderName, time, seen, type})=>{
    const receiver= getUser(receivers)
    if(receiver?.socketId){
      io.to(receiver.socketId).emit("getfollowingnotif", {
        sender, senderName, receivers, time, seen, type
      })
      
    }
    else if(!receiver?.socketId){
      // const receiver= getUser(sender)
      io.emit("offlinefollowingnotif", {
        sender, senderName, receivers, time, seen, type
    })
  }
  })
  socket.on("newproduct", ({senderName,followers, sender, seen, time, type})=>{
    const senderId= getUser(sender)
    followers?.map((follower)=>{
      onlineUsers.map((user)=>{
        if(user.userid ===follower){
          if(count !== true){
            count= true
          }
          flag=true
          
          io.to(user.socketId).emit("newproductnotif", {
            senderName, seen, followers, sender, time, type
          })
          
          
        }
      })
    })
    
    if(flag===false){
      io.emit("offlineproductnotif", {
        senderName, seen, followers, sender, time, type
      })  
    }        
    if(count===true){
      io.emit("userproductnotif", {
        senderName, seen, followers, sender, time, type
      })          
      
        
    }
  })
  socket.on("disconnect", ()=>{
    
    removeUser(socket.id)
    flag=false
  })
});

io.listen(5000);