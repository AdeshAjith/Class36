class Game{
    constructor(){}
    getstate(){
        var myGamestateref = database.ref("Gamestate")
        myGamestateref.on("value",function(data){
            myGamestate = data.val()
        }) 
    }
    myUpdate(state){
        database.ref("/").update({Gamestate:state})
    }
    Start(){
        if(myGamestate === 0){
            Player = new Player()
            Player.getCount
            Form = new Form()
            Form.Display()
        }
    }
}
