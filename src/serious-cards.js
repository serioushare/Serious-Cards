
(function(){
    // Some package info
    var Name        = "Serious Cards";
    var Version     = "1.0.2";
    var Description = "Just a collection of some very serious cards.";
    var Author      = "Serious Hare";
    var logStyles   = [
        "color: #f0f0f0; background-color: #0f0f0f; font-weight: bold;",
        "color: #f0f0f0; background-color: #0f0f0f;",
        "color: #0f0f0f; background-color: #f0f0f0;",
        "color: #0f0f0f; background-color: #d4d4d4;"
    ]

    // Log package info to `console.log`
    console.log(
        `%c ${Name}                  \n`+
        `%c Version:  %c               ${Version} \n`+
        `%c Author:   %c        ${Author} \n`,
        //`%c ${Description.substring(0, 30)} \n`+
        //` ${Description.substring(31)}                 `,
        logStyles[0],
        logStyles[1],
        logStyles[2],
        logStyles[1],
        logStyles[2]
    );
}());
