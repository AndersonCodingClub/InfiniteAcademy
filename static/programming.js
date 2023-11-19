// tree structure: [father, [child, [grandchild, great grandchild (virgin)], grandchild (virgin)], child (virgin)]
var programmingPath = [document.getElementById("subject-title"), [document.getElementById('web-design')], [document.getElementById('algorithms')], [document.getElementById('languages')], [document.getElementById('data-structures')], [document.getElementById('basic-concepts')]];


var presetModules = {  // hardcoded HTML is included for modules we always want to be the same, namely the starting modules like Intro To XXX
    "subject-title": `<!DOCTYPE html><html lang="en"><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <title>Infinite Academy - Computer Science Essentials</title>  <link rel="stylesheet" href="styles.css"> <!-- Link to external CSS file if needed --></head><body>  <div id="container">    <header class="academy-header">      <h1>Welcome to the Infinite Academy</h1>    </header>        <section class="programming-intro">      <h2>Introduction to Programming</h2>      <p>Programming is the art of instructing computers to perform tasks. It involves writing a set of instructions in a language that a computer can understand.</p>      <p>Let's explore the basic building blocks:</p>      <ul class="programming-basics">        <li><strong>Variables:</strong> Containers for storing data.</li>        <li><strong>Conditions:</strong> Statements that control the flow of a program.</li>        <li><strong>Loops:</strong> Repetitive structures to perform tasks iteratively.</li>        <li><strong>Functions:</strong> Reusable blocks of code that perform a specific task.</li>      </ul>      <p>To get started, you can learn a programming language like <a href="https://www.python.org/" target="_blank">Python</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>, or <a href="https://www.learnjavaonline.org/" target="_blank">Java</a>.</p>    </section>    <section class="web-design">      <h2>Web Design</h2>      <p>Web design involves creating visually appealing and user-friendly websites. It includes aspects such as layout, color theory, typography, and responsive design to ensure a seamless user experience across devices.</p>      <p>Explore the world of web design by learning HTML, CSS, and JavaScript. Dive into frameworks like <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> for efficient and responsive design.</p>    </section>    <section class="algorithms">      <h2>Algorithms</h2>      <p>Algorithms are step-by-step procedures or formulas for solving problems. They are crucial in computer science for efficient data processing and problem-solving. Common algorithms include sorting, searching, and graph traversal algorithms.</p>      <p>Discover the importance of algorithms in programming and explore algorithmic thinking to solve complex problems.</p>    </section>    <section class="languages">      <h2>Programming Languages</h2>      <p>Programming languages are the tools used to write software. Each language has its syntax and purpose. Examples include Python, JavaScript, Java, and more. Choosing the right language depends on the task at hand.</p>      <p>Explore the diverse world of programming languages and their applications in different domains.</p>    </section>    <section class="data-structures">      <h2>Data Structures</h2>      <p>Data structures organize and store data for efficient retrieval and manipulation. Examples include arrays, linked lists, trees, and hash tables. Choosing the right data structure is crucial for optimizing algorithms.</p>      <p>Delve into the study of data structures and understand their role in building efficient and scalable software.</p>    </section>    <footer class="academy-footer">      <p>Embark on your journey through the Infinite Academy and unlock the boundless possibilities of the digital world.</p>    </footer>  </div></body></html>`,
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

    arrayToSearch.forEach((nodes) => {
        if (!Array.isArray(nodes) && nodes === document.getElementById(nodeToFind)) {
            foundNode = arrayToSearch;
        } else if (Array.isArray(nodes) && nodes[0] === document.getElementById(nodeToFind) && !foundNode) {
            foundNode = nodes;
        } else if (Array.isArray(nodes) && !foundNode) {
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
    newNode.setAttribute('onclick', 'showPopup(this.id);');


    father.push(newNodeAsArray);
    newNode.appendChild(newNodeContentContainer);


    if(document.getElementById(parseInt(father[0].parentElement.id) + 1)) { // must sort node to be in order
            rowBelowFather = document.getElementById(parseInt(father[0].parentElement.id) + 1);
            rowBelowFather.appendChild(newNode);
            var placeToBePut = father[1][0].previousElementSibling;
            var nextNodeId;
            var rightMostParentNeighbor;
            var firstNeighborKid;
            var nextNeighborToSearchForKids;

            if (newNode.nextElementSibling) {
                nextNodeId = newNode.nextElementSibling.id;
            }



            if (father[1][0].parentElement == rowBelowFather) {
                rowBelowFather.insertBefore(newNode, father[1][0]);
            } else {
                var nodeParent = getNodeFromTreeAsArray(programmingPath);
                rowBelowFather.insertBefore(newNode, placeToBePut);
            }      

            if (father[0].nextElementSibling) {
                rightMostParentNeighbor = father[0].nextElementSibling;
                if (Array.isArray(getNodeFromTreeAsArray(programmingPath, rightMostParentNeighbor.id)[1])) {
                    firstNeighborKid = getNodeFromTreeAsArray(programmingPath, rightMostParentNeighbor.id)[1][0];
                    rowBelowFather.insertBefore(newNode, firstNeighborKid);
                } else {
                    while (!Array.isArray(getNodeFromTreeAsArray(programmingPath, rightMostParentNeighbor.id)[1])) {
                        nextNeighborToSearchForKids = rightMostParentNeighbor;
                        nextNeighborToSearchForKids = nextNeighborToSearchForKids.nextElementSibling;           // covers edge case: father has virgin neighbor
                        rightMostParentNeighbor = nextNeighborToSearchForKids;
                    }
                    firstNeighborKid = getNodeFromTreeAsArray(programmingPath, rightMostParentNeighbor.id)[1][0];
                    rowBelowFather.insertBefore(newNode, firstNeighborKid);
                }
            }
            newNode.appendChild(newNodeContentContainer);

    } else {
        var newRow = document.createElement('div');

        newRow.setAttribute('class', 'row');
        newRow.setAttribute('id', parseInt(father[0].parentElement.id) + 1);

        document.getElementById('knowledge-zone').appendChild(newRow);
        newRow.appendChild(newNode);
        newNode.appendChild(newNodeContentContainer);

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

        document.getElementById("line-container").appendChild(svg);
        svg.appendChild(line);
    }

    document.getElementById("line-container").innerHTML = document.getElementById("line-container").innerHTML;

}


function loadPopup(material) {
    var popUp = document.getElementById("diagnosticPopup");
    popUp.lastElementChild.innerHTML =  material;
}


var virgins = getEveryVirgin(programmingPath);


function showPopup(topic) {
    if (!event.shiftKey) {
        var diagnosticPopup = document.getElementById('diagnosticPopup');

        diagnosticPopup.style.width = "80vw";
        diagnosticPopup.style.height = "80vh";

        loadPopup(presetModules[topic]);
    } else if (getEveryVirgin(programmingPath).includes(document.getElementById(topic))) {
        generateNewNodes(topic, document.getElementById(topic));
    }
}


function closePopup() {
    diagnosticPopup.style.width = "0";
    diagnosticPopup.style.height = "0";
}


function getEveryVirgin(tree) {
    var virgins = [];

    doSomethingForWholeFamily(tree, (element) => {
        if (directDescendentCount(element[0].id) == 0) {
            virgins.push(element[0]);
        }
    });

    return virgins;
}


function generateNewNodes(parentTopic, parentContent) {
    var socket = io();

    socket.on("connect", () => {
        console.log("WebSocket connection opened");

        const message = {
            node_name: parentTopic,
            node_content: parentContent
        };

        socket.emit('message', message);
    });

    socket.on("result", (data) => {
        console.log("Received message from Python:", data);

        data.result.forEach(receivedPackage => {      //  response.result should be a list of tuples: [("name", "content"), ("name", "content")]
            presetModules[receivedPackage[0]] = receivedPackage[1];
            birthChild(parentTopic, receivedPackage[0]);
        });
    });

    var saveScroll = window.scrollY;
    window.scrollTo(0,0);
    var svgElements = document.querySelectorAll("body svg");

    svgElements.forEach(function(svgElement) {
        svgElement.parentNode.removeChild(svgElement);
    });
    doSomethingForWholeFamily(programmingPath, drawLineToChildren);
    window.scrollTo(0, saveScroll);
}


document.body.onload = function () {
    window.scrollTo(0,0);
    doSomethingForWholeFamily(programmingPath, drawLineToChildren);
}

document.body.onresize = function () {
    var svgElements = document.querySelectorAll("body svg");
    
    svgElements.forEach(function(svgElement) {
      svgElement.parentNode.removeChild(svgElement);
    });

    window.scrollTo(0,0);
    doSomethingForWholeFamily(programmingPath, drawLineToChildren);
}

document.body.onmousemove = function () {
    var saveScroll = window.scrollY;
    window.scrollTo(0,0);
    var svgElements = document.querySelectorAll("body svg");

    svgElements.forEach(function(svgElement) {
        svgElement.parentNode.removeChild(svgElement);
    });
    doSomethingForWholeFamily(programmingPath, drawLineToChildren);
    window.scrollTo(0, saveScroll);

}