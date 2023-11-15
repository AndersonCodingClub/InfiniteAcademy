// tree structure: [father, [child, [grandchild, great grandchild (virgin)], grandchild (virgin)], child (virgin)]
var programmingPath = [document.getElementById("subject-title"), 
                            [document.getElementById("diagnostic"), 
                                [document.getElementById("educational")]], 
                            [document.getElementById("narmit"), 
                                [document.getElementById("narmit-PIDs"), 
                                    [document.getElementById("super-narmit")]]]];


var presetModules = {  // hardcoded HTML is included for modules we always want to be the same, namely the starting modules like Intro To XXX
    "Programming": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy: Introduction to Programming</title>    <style>        body {            background-color: antiquewhite;        }        .container {            max-width: 800px;            margin: 0 auto;            padding: 20px;            background-color: #f5f5dc; /* beige color for the container */            border-radius: 10px;            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);        }        .heading {            color: #8B4513; /* saddlebrown color for the heading */            text-align: center;            font-size: 32px;            margin-bottom: 20px;        }        .content {            color: #696969; /* dimgray color for the content */            line-height: 1.6;        }        .svg-image {            width: 100%;            height: auto;            margin-top: 20px;        }    </style></head><body>    <div class="container">        <h1 class="heading">Welcome to the Infinite Academy</h1>        <div class="content">            <p>Programming is like exploring an endless library of possibilities, where each book represents a different language or concept.</p>            <p>In this infinite realm, programming languages are tools that allow you to communicate with computers and instruct them to perform specific tasks.</p>            <p>Just like in the ancient sand library, understanding the structure and syntax of a programming language is key to unlocking the knowledge it holds.</p>            <p>Let's embark on this journey together and learn the art of programming!</p>        </div>                <svg class="svg-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B4513">            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2zm0-4h-2V7h2zm-1-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>        </svg>    </div></body></html>`,
    "Narmit PIDs":  `<head>        <meta charset="UTF-8">        <meta name="viewport" content="width=device-width, initial-scale=1.0">        <title>Infinite Academy - Nirmit PIDs</title>        <style>                .container {                max-width: 800px;                margin: 50px auto;                padding: 20px;                background-color: #fff;                border-radius: 10px;                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);            }                .section-title {                color: #b8860b;                font-size: 24px;                font-weight: bold;                margin-bottom: 20px;            }                .text {                color: #555;                font-size: 16px;                line-height: 1.6;                margin-bottom: 20px;            }                .image {                width: 100%;                height: auto;                margin-bottom: 20px;            }        </style>    </head>        <body>        <div class="container">            <div class="section-title">Exploring Nirmit PIDs in the Infinite Academy</div>                <div class="text">                <p>Welcome to the Infinite Academy, where knowledge transcends time! Today, we delve into the fascinating world of Nirmit PIDs.</p>                    <p>Nirmit PIDs, or Persistent Identifiers, are crucial in the digital realm. They serve as unique and everlasting labels for digital objects, ensuring their identification and accessibility over time.</p>                    <p>Just like the ancient scrolls in vast expanse of the Infinite Academy, Nirmit PIDs are the digital tags that allow us to locate and reference information in the vast expanse of the internet.</p>            </div>                <div class="image">                <!-- SVG Image representing Nirmit PIDs -->                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b8860b" width="50px" height="50px">                    <path d="M0 0h24v24H0z" fill="none" />                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-2h2v2zm0-4h-2V7h2v7z" />                </svg>            </div>                <div class="text">                <p>Think of Nirmit PIDs as the ancient keys to the library's wisdom. They ensure that no matter how much time passes, we can always locate and access the digital knowledge preserved within the vast archives of the Infinite Academy.</p>                    <p>Developers and archivists use Nirmit PIDs to create a timeless connection between digital entities and their identifiers, allowing us to navigate the ever-expanding corridors of the digital realm.</p>            </div>                <div class="section-title">Unlocking Wisdom Across Time</div>                <div class="text">                <p>As we navigate the Infinite Academy, remember the importance of Nirmit PIDs. They are the threads that weave through the fabric of time, connecting us to the knowledge of the past and paving the way for the discoveries of the future.</p>                    <p>Continue your journey through the yellowed pages of the Infinite Academy, where each Nirmit PID opens a door to a new realm of understanding.</p>            </div>        </div>    </body>`,
    "Narmit Module": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy: Nirmit Programming Concept</title>    <style>        body {            background-color: antiquewhite;        }        .section {            margin: 20px;            padding: 20px;            background-color: #ffebcd;            border-radius: 10px;            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);        }        .concept-title {            color: #8b4513;            font-size: 24px;            font-weight: bold;        }        .concept-text {            color: #333;            font-size: 16px;            line-height: 1.6;        }        .svg-container {            width: 100%;            max-width: 400px;            margin: 20px 0;        }    </style></head><body>    <div class="section">        <div class="concept-title">Understanding Nirmit in Programming</div>        <div class="concept-text">            <p>Nirmit, in the realm of programming, refers to the concept of creating or building something. It emphasizes the process of construction, often in a systematic and organized manner.</p>                        <p>Just as an architect designs and builds a structure, a programmer uses the nirmit approach to craft software solutions. It involves breaking down complex problems into smaller, manageable parts and then systematically constructing a program to solve those parts.</p>            <p>This approach promotes modular and scalable code, making it easier to maintain and understand. Nirmit encourages the use of functions, classes, and other programming structures to organize code and enhance reusability.</p>        </div>        <div class="svg-container">            <!-- SVG illustration representing the concept of building or construction -->            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8b4513" width="100%" height="100%">                <path d="M0 0h24v24H0V0z" fill="none"/>                <path d="M17 18.41V11c0-.55-.45-1-1-1s-1 .45-1 1v5.41l-1.71-1.71a.996.996 0 0 0-1.41 0l-4.59 4.59c-.39.39-1.02.39-1.41 0l-4.59-4.59a.996.996 0 0 0-1.41 0L3 15.41V11c0-2.21 1.79-4 4-4h2V4c0-1.1.9-2 2-2s2 .9 2 2v3h2c2.21 0 4 1.79 4 4v7.41l1.71-1.71a.996.996 0 0 0 0-1.41L17 18.41zM12 2C9.79 2 8 3.79 8 6v3h8V6c0-2.21-1.79-4-4-4z"/>            </svg>        </div>        <div class="concept-text">            <p>By applying the nirmit concept, programmers can enhance the clarity, efficiency, and maintainability of their code, fostering a structured and organized approach to software development.</p>                        <p>If you want to delve deeper into this programming concept, check out resources like <a href="https://en.wikipedia.org/wiki/Software_development" target="_blank">Software Development on Wikipedia</a>.</p>        </div>    </div></body></html>`,
    "Super Narmit": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy: Super Nirmit</title>    <style>        body {            background-color: antiquewhite;        }        .container {            max-width: 800px;            margin: 0 auto;            padding: 20px;        }        .section {            margin-bottom: 20px;        }        .title {            font-size: 24px;            font-weight: bold;            color: #8B4513; /* SaddleBrown */        }        .subtitle {            font-size: 18px;            color: #696969; /* DimGray */        }        .content {            font-size: 16px;            line-height: 1.6;        }        .svg-image {            max-width: 100%;            height: auto;            display: block;            margin: 20px 0;        }    </style></head><body>    <div class="container">        <div class="section">            <div class="title">Unveiling the Mystery: Super Nirmit in Programming</div>            <div class="subtitle">Exploring the Depths of Tier 4 Concepts</div>        </div>        <div class="section">            <div class="content">                <p>Welcome to the Infinite Academy, where the ancient and profound concept of Super Nirmit awaits your exploration. In the vast landscape of programming, Super Nirmit stands as a tier 4 concept, representing a pinnacle of sophistication.</p>                <p>Super Nirmit, derived from the Sanskrit word "निर्मित" meaning 'created,' goes beyond traditional programming paradigms. It encapsulates the idea of creating highly specialized and interconnected components, transcending the boundaries of conventional software architecture.</p>                <p>To visualize this concept, imagine a network of interconnected gears, each representing a specialized module within a software system. These gears, when combined, form a powerful machinery capable of intricate tasks and seamless interactions.</p>            </div>        </div>        <div class="section">            <div class="title">Illustrating Super Nirmit</div>            <div class="subtitle">A Visual Journey into Complexity</div>            <!-- SVG Image depicting interconnected gears -->            <svg class="svg-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">                <!-- SVG content representing interconnected gears -->                <!-- Insert your SVG content here or provide an external link -->            </svg>        </div>        <div class="section">            <div class="content">                <p>As you delve deeper into the realm of Super Nirmit, consider each gear as a meticulously crafted component, harmoniously working with others to achieve a higher purpose. This concept emphasizes the importance of modular design, scalability, and adaptability in building complex software systems.</p>                <p>For a more in-depth understanding of Super Nirmit, explore real-world applications and case studies that showcase its implementation. The journey into tier 4 concepts like Super Nirmit is an intellectual adventure, pushing the boundaries of what can be achieved in the ever-evolving landscape of programming.</p>            </div>        </div>        <div class="section">            <div class="title">Further Exploration</div>            <div class="subtitle">Dive Deeper into the Infinite</div>            <p class="content">To continue your exploration, consider studying resources such as:</p>            <!-- External link to a resource about Super Nirmit -->            <a class="content" href="https://en.wikipedia.org/wiki/Software_design_pattern#Super_nirmit" target="_blank">Super Nirmit: Beyond the Basics</a>        </div>    </div></body></html>`,
}


function doSomethingForWholeFamily(array, thingToDo) {  // <- **thingToDo() MUST accept an ARRAY. In order to just do something for the element, only write the function with respect to array[0].
    array.forEach((node, i) => {
        if (i == 0) {
            thingToDo(array);
        } else if (Array.isArray(node)){
            doSomethingForWholeFamily(node, thingToDo);
        }
    });
}


function getNodeFromTreeAsArray(arrayToSearch, nodeToFind) {  // <- returns array, useful for pushing a new node as a child to a different node.
    var foundNode;

    arrayToSearch.forEach((nodes, i) => {
        if (!Array.isArray(nodes) && arrayToSearch[i] == document.getElementById(nodeToFind)) {
            foundNode = arrayToSearch;
            console.log(foundNode);
        } else if (Array.isArray(nodes) && nodes[0] == document.getElementById(nodeToFind) && !foundNode) {
            foundNode = arrayToSearch[i];
        } else if (Array.isArray(nodes) && !foundNode){
            foundNode = getNodeFromTreeAsArray(nodes, nodeToFind);
        }
    });
    
    return foundNode;
}


function directDescendentCount(nodeToLook) {
    return getNodeFromTreeAsArray(programmingPath, nodeToLook).length - 1;
}


function birthChild(fatherNodeID, childName) {
    var newNode = document.createElement('div');
    var newNodeContentContainer = document.createElement('p');
    newNodeContentContainer.innerHTML = childName;
    var father = getNodeFromTreeAsArray(programmingPath, fatherNodeID);
    var rowBelowFather;

    var newNodeAsArray = [];
    newNodeAsArray.push(newNode);

    newNodeContentContainer.setAttribute('class', 'tree-node-name');

    newNode.setAttribute('id', childName);
    newNode.setAttribute('class', 'tree-node');


    father.push(newNodeAsArray);


    if(document.getElementById(parseInt(father[0].parentElement.id) + 1)) {
            rowBelowFather = document.getElementById(parseInt(father[0].parentElement.id) + 1)
            rowBelowFather.appendChild(newNode);
    } else {
        var newRow = document.createElement('div');

        newRow.setAttribute('class', 'row');
        newRow.setAttribute('id', parseInt(father[0].parentElement.id) + 1);

        document.getElementById('knowledge-zone').appendChild(newRow);
        newRow.appendChild(newNode);
    }
    newNode.appendChild(newNodeContentContainer);
}


// lines between nodes
function getPositionOfChildren(element) { // will return data in array with format: [x, y, width, height, x, y...] - but [[x, y, width, height], [x,...]] would be better

    var positions = [];

    element.forEach((fatherNirmit, i) => {  // fatherNirmit is unused, but required, else code will break
        if(i != 0) {
            positions.push(element[i][0].getBoundingClientRect().left + (0.5 * element[i][0].getBoundingClientRect().width));
            positions.push(element[i][0].getBoundingClientRect().top);
            positions.push(element[i][0].getBoundingClientRect().width);
            positions.push(element[i][0].getBoundingClientRect().height);
        }
    });

    return positions;
}


function drawLineToChildren(element) {
    var childPositions = getPositionOfChildren(element);
    var lines = [];

    for (i =0; i<childPositions.length; i+=4) {
        var xPos = childPositions[i];
        var yPos = childPositions[i+1];
        var width = childPositions[i+2];
        var height = childPositions[i+3];

        var svg = document.createElement("SVG");
        var line = document.createElement("line");
        

        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('class', 'lineContainer');
        line.setAttribute('x1', xPos);
        line.setAttribute('y1', yPos);
        line.setAttribute('x2', element[0].getBoundingClientRect().left + (0.5 * element[0].getBoundingClientRect().width));
        line.setAttribute('y2', element[0].getBoundingClientRect().bottom - (0.5 * element[0].getBoundingClientRect().height));

        document.body.appendChild(svg);
        svg.appendChild(line);
    }
}


function loadPopup(material) {
    var popUp = document.getElementById("diagnosticPopup");
    popUp.lastElementChild.innerHTML =  material;
}


function showPopup() {
    // might be nice: add button html tags inside of every module and have popup show from button function instead of event listener
}


function closePopup() {
    // might be nice: add button html tag inside of close button and have popup close from button function instead of event listener
}


function getEveryVirgin(tree) {
    var virgins = [];

    doSomethingForWholeFamily(tree, (element) => {
        if (directDescendentCount(element[0].id) == 0) {
            virgins.push(element);
        }
    });

    return virgins;
}


function putButtonsOnVirgins() {
    
}


document.body.onload = function () {
    birthChild('narmit', 'Narmits-Value'); // plan: include button at bottom of every node w/o any children that will run birthChild, AI will generate appropriate topic given the father module's name.
    birthChild('narmit', "dogfinder");       //       create function for all this, and rawdog call function from HTML button to avoid dealing with javascript
    birthChild('dogfinder', 'dogeater');

    directDescendentCount('Narmits-Value')
    console.log(getEveryVirgin(programmingPath));

    doSomethingForWholeFamily(programmingPath, drawLineToChildren); // bugs out whenever screen changes, need to fix


    document.body.innerHTML = document.body.innerHTML; // <- renders everything just added inside of BODY
    

 // anything accessed from original document, before dynamic changes, must be done AFTER rerendering body or else it will be lost
    var diagnosticButton = document.getElementsByClassName('tree-node'); 
    var diagnosticPopup = document.getElementById('diagnosticPopup');

    Array.from(diagnosticButton).forEach(function (node) {
        node.addEventListener('click', () => { 
            diagnosticPopup.style.width = "80vw";
            diagnosticPopup.style.height = "80vh";

            var subject = node.lastElementChild.innerHTML;  // to be replaced w/ AI
            loadPopup(presetModules[subject]);
        });
    });


    var closeButton = document.getElementById('closePopup');

    closeButton.addEventListener('click', () => {
        diagnosticPopup.style.width = "0";
        diagnosticPopup.style.height = "0";
    });
}