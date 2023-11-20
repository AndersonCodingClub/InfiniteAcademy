// tree structure: [father, [child, [grandchild, great grandchild (virgin)], grandchild (virgin)], child (virgin)]
var programmingPath = [document.getElementById("subject-title"), [document.getElementById('pre-algebra')], [document.getElementById('geometry')], [document.getElementById('trigonometry')], [document.getElementById('pre-calculus')]];


var presetModules = {  // hardcoded HTML is included for modules we always want to be the same, namely the starting modules like Intro To XXX
    "subject-title": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <style>        body {            margin: 0;            padding: 0;            color: #333;            background-color: antiquewhite;        }        .academy-header {            background-color: #ffe066;            padding: 20px;            text-align: center;        }        .academy-content {            max-width: 800px;            margin: 20px auto;            padding: 20px;        }        .lesson-title {            color: #8b6914;        }        .lesson-intro {            font-style: italic;        }        .concept-section {            margin-top: 20px;        }        .concept-title {            color: #8b6914;        }        .academy-footer {            background-color: #ffe066;            padding: 10px;            text-align: center;        }    </style>    <title>Infinite Academy: Introduction to Math</title></head><body>    <div id="header" class="academy-header">        <h1>Welcome to the Infinite Academy</h1>    </div>    <div id="content" class="academy-content">        <article>            <h2 class="lesson-title">Lesson 1: Exploring the World of Mathematics</h2>            <p class="lesson-intro">                Mathematics is the language of the universe, a timeless and infinite realm that shapes our understanding                of the world. In this lesson, we embark on a journey to uncover the beauty and significance of                mathematical concepts.            </p>            <section id="importance" class="concept-section">                <h3 class="concept-title">The Importance of Mathematics</h3>                <p>                    Mathematics is not just about numbers; it's a tool for solving real-world problems and a key to                    understanding patterns, relationships, and structures in various disciplines.                </p>                <p>                    Explore more about the <a href="https://www.mathnasium.com/math-education-importance"                        target="_blank">importance of mathematics</a> in education.                </p>            </section>            <section id="fundamentals" class="concept-section">                <h3 class="concept-title">Fundamental Concepts</h3>                <p>                    Let's delve into the fundamental concepts of mathematics, such as arithmetic, algebra, geometry, and                    calculus. These pillars form the basis for more advanced mathematical exploration.                </p>            </section>            <section id="infinity" class="concept-section">                <h3 class="concept-title">Infinity in Mathematics</h3>                <p>                    In our infinite academy, we cannot ignore the concept of infinity. Mathematics often deals with                    limitless possibilities, and understanding infinity opens the door to fascinating mathematical                    landscapes.                </p>                <p>                    Discover more about <a href="https://en.wikipedia.org/wiki/Infinity"                        target="_blank">infinity in mathematics</a>.                </p>            </section>        </article>    </div>    <div id="footer" class="academy-footer">        <p>&copy; 2023 Infinite Academy. All rights reserved.</p>    </div></body></html>`,
    "pre-algebra": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Pre-Algebra</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Discovering the Mysteries of Pre-Algebra</p>    </div>    <div class="section-heading">Introduction to Pre-Algebra</div>    <div class="content">        <p class="topic">Unveiling the Foundations</p>        <p>            Welcome to the realm of pre-algebra, where we lay the groundwork for mathematical wonders that will unfold in your journey through the Infinite Academy.        </p>        <p class="topic">Essential Concepts</p>        <ul>            <li>Variables and Expressions</li>            <li>Equations and Inequalities</li>            <li>Numerical Operations</li>            <li>Geometry Concepts</li>            <li>Ratios and Proportions</li>            <li>Data and Statistics</li>        </ul>        <p class="topic">Why Pre-Algebra Matters</p>        <p>            Pre-algebra is the key to unlocking the door to advanced mathematics, fostering critical thinking and problem-solving skills needed for your academic journey.        </p>    </div>    <div class="section-heading">Explore Further</div>    <div class="content">        <p>            Ready for deeper exploration? Check out interactive resources and practice problems on <a href="https://www.khanacademy.org/math/pre-algebra" class="resource-link" target="_blank">Khan Academy</a>.        </p>    </div>    <div id="conclusion">        <p>            Step into the Infinite Academy of Pre-Algebra, where the aged pages of knowledge illuminate the path to mathematical enlightenment.        </p>    </div></body></html>`,
    "geometry": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Geometry</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Exploring the Marvels of Geometry</p>    </div>    <div class="section-heading">Introduction to Geometry</div>    <div class="content">        <p class="topic">What is Geometry?</p>        <p>            Geometry is the ancient art and science of understanding the properties and relationships of shapes, sizes, and dimensions. It's the study of space and form that has fascinated minds throughout the ages.        </p>        <p class="topic">Key Concepts to Discover</p>        <ul>            <li>Points, Lines, and Planes</li>            <li>Angles and Polygons</li>            <li>Circles and Cylinders</li>            <li>Triangles and Quadrilaterals</li>            <li>Three-Dimensional Shapes</li>            <li>Coordinate Geometry</li>        </ul>        <p class="topic">Applications of Geometry</p>        <p>            Geometry is not just theoretical; it plays a crucial role in various fields such as architecture, engineering, art, and even in unraveling the mysteries of the universe.        </p>    </div>    <div class="section-heading">Delve Deeper into the Infinite</div>    <div class="content">        <p>            Ready for a deeper exploration of geometry? Immerse yourself in the wonders of geometric thinking with resources and exercises on <a href="https://www.geogebra.org/" class="resource-link" target="_blank">GeoGebra</a>.        </p>    </div>    <div id="conclusion">        <p>            As you venture into the Infinite Academy of Geometry, let the golden compass guide you through the timeless landscapes of shape and space.        </p>    </div></body></html>`,
    "trigonometry": `<!DOCTYPE html><html lang="en"><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <title>Infinite Academy - Trigonometry Lesson</title>  <style>    body {      /* Do not change these styles */      color: black;      background-color: antiquewhite;    }    .header {      text-align: center;      background-color: #ffcc66; /* Yellow-like color */      padding: 20px;    }    .lesson {      max-width: 800px;      margin: 20px auto;      padding: 20px;      background-color: #ffffe0; /* Light yellow background */    }    .section {      margin-bottom: 20px;    }    .footer {      text-align: center;      background-color: #ffcc66; /* Yellow-like color */      padding: 10px;    }  </style></head><body>  <div class="header">    <h1>Welcome to the Infinite Academy</h1>    <p>Where knowledge has no bounds...</p>  </div>  <div class="lesson">    <h2>Trigonometry: Exploring the Angles</h2>    <div class="section" id="introduction">      <h3>Introduction to Trigonometry</h3>      <p>        Trigonometry is a branch of mathematics that deals with the relationships between the angles and sides of triangles. It has wide applications in various fields such as physics, engineering, and computer science.      </p>    </div>    <div class="section" id="basic-trig-identities">      <h3>Basic Trigonometric Identities</h3>      <p>        Trigonometry involves fundamental identities such as the sine, cosine, and tangent functions. These are essential for solving problems involving angles and distances.      </p>      <ul>        <li><strong>Sine (sin θ):</strong> Opposite / Hypotenuse</li>        <li><strong>Cosine (cos θ):</strong> Adjacent / Hypotenuse</li>        <li><strong>Tangent (tan θ):</strong> Opposite / Adjacent</li>      </ul>    </div>    <div class="section" id="trig-applications">      <h3>Applications of Trigonometry</h3>      <p>        Trigonometry is not just a theoretical concept; it has practical applications. It is used in navigation, architecture, physics, and even in computer graphics to create realistic animations and simulations.      </p>      <p>Explore real-world examples <a href="https://www.mathsisfun.com/algebra/trigonometry-real-world.html" target="_blank">here</a>.</p>    </div>    <div class="section" id="practice">      <h3>Practice Problems</h3>      <p>        Now, let's apply what we've learned! Solve the following trigonometric problems to reinforce your understanding.      </p>      <!-- Include practice problems or exercises here -->    </div>  </div>  <div class="footer">    <p>Keep exploring the infinite realms of knowledge...</p>  </div></body></html>`,
    "pre-calculus": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Pre-Calculus</title>    <style>        body {            margin: 0;            padding: 0;            color: black; /* Default text color */        }        #header {            background-color: antiquewhite;            padding: 20px;            text-align: center;            font-size: 24px;        }        .section {            margin: 20px;            padding: 20px;            background-color: #fffacd; /* LemonChiffon background color */            border-radius: 10px;        }        .concept {            font-size: 18px;            margin-bottom: 10px;        }        .link {            color: #2e8b57; /* SeaGreen color for links */            text-decoration: none;            font-weight: bold;        }        .link:hover {            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Welcome to the Infinite Academy</h1>        <p>Your journey into the realm of Pre-Calculus begins here.</p>    </div>    <div class="section">        <h2 class="concept">Understanding Pre-Calculus</h2>        <p>Pre-Calculus is a branch of mathematics that prepares students for the study of calculus. It covers topics such as:</p>        <ul>            <li>Functions and their properties</li>            <li>Trigonometry</li>            <li>Algebraic expressions</li>            <li>Limits and continuity</li>        </ul>    </div>    <div class="section">        <h2 class="concept">Resources for Further Learning</h2>        <p>Explore these links to deepen your understanding of Pre-Calculus:</p>        <ul>            <li><a href="https://www.khanacademy.org/math/precalculus" class="link" target="_blank">Khan Academy - Pre-Calculus</a></li>            <li><a href="https://www.purplemath.com/modules/index.htm" class="link" target="_blank">Purplemath - Pre-Calculus Lessons</a></li>        </ul>    </div></body></html>`,
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