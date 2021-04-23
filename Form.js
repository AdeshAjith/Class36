class Form{
    constructor(){}
    Display(){
        var Title = createElement("h2")
        Title.html("Car Racing Game")
        Title.position(350,0)
        var Input = createInput("Name")
        var Button = createButton("Start")
        
        Input.position(130,160)
        Button.position(250,200)
        
        Button.mousePressed(function(){
            Input.hide()
            Button.hide()

            var myName = Input.value()

            myPlayerCount = myPlayerCount + 1
            Player.myupdatename(myName)
            Player.myupdatecount(myPlayerCount)

            var Greetings = createElement("h2")
            Greetings.html("Hello "+ myName)
            Greetings.position(130,160)
        })

    }
}