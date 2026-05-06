elements.Target_Sensor = {
    color: "#ffffff",
    behavior: behaviors.WALL,
    category: "machines",
    onSelect: function() {
        let answer = prompt("Enter element to look for:");
        window.myCustomMessage = answer;
        let elementToLookFor = answer;
    }
    reactions: {
        elementToLookFor: {
            func: function(pixel) {
                pixel.charge = 1;
            }
        }
    }
};
