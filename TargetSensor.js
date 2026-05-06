elements.Target_Sensor = {
    color: "#ffffff",
    behavior: behaviors.WALL,
    category: "machines",
    onSelect: function() {
        let answer = prompt("Enter element to look for (e.g., water):");
        if (answer) {
            window.targetElement = answer.toLowerCase().replace(" ", "_");
        }
    },
    reactions: {
        "ANY": {
            func: function(pixel, pixel2) {
                if (pixel2.element === window.targetElement) {
                    pixel.charge = 1;
                }
            }
        }
    },
    conduct: 1
};
