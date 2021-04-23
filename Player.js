class Player{
    constructor(){}
    getcount(){
        var myPlayercountref = database.ref("PlayerCount")
        myPlayercountref.on("value",function(data){
        myPlayerCount = data.val(myPlayerCount)
        })
    }
    myupdatename(name){
        var PlayerIndex = "Player" + myPlayerCount
        database.ref(PlayerIndex).set({Name:name})
    }
    myupdatecount(count){
        database.ref("/").update({PlayerCount:count})
    }
}