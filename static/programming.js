// tree structure: [father, [child, [grandchild, great grandchild (virgin)], grandchild (virgin)], child (virgin)]
var programmingPath = [document.getElementById("subject-title"), [document.getElementById('web-design')], [document.getElementById('algorithms')], [document.getElementById('languages')], [document.getElementById('data-structures')], [document.getElementById('basic-concepts')]];


var presetModules = {  // hardcoded HTML is included for modules we always want to be the same, namely the starting modules like Intro To XXX
    "subject-title": `<!DOCTYPE html><html lang="en"><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <title>Infinite Academy - Computer Science Essentials</title>  <link rel="stylesheet" href="styles.css"> <!-- Link to external CSS file if needed --></head><body>  <div id="container">    <header class="academy-header">      <h1>Welcome to the Infinite Academy</h1>    </header>        <section class="programming-intro">      <h2>Introduction to Programming</h2>      <p>Programming is the art of instructing computers to perform tasks. It involves writing a set of instructions in a language that a computer can understand.</p>      <p>Let's explore the basic building blocks:</p>      <ul class="programming-basics">        <li><strong>Variables:</strong> Containers for storing data.</li>        <li><strong>Conditions:</strong> Statements that control the flow of a program.</li>        <li><strong>Loops:</strong> Repetitive structures to perform tasks iteratively.</li>        <li><strong>Functions:</strong> Reusable blocks of code that perform a specific task.</li>      </ul>      <p>To get started, you can learn a programming language like <a href="https://www.python.org/" target="_blank">Python</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>, or <a href="https://www.learnjavaonline.org/" target="_blank">Java</a>.</p>    </section>    <section class="web-design">      <h2>Web Design</h2>      <p>Web design involves creating visually appealing and user-friendly websites. It includes aspects such as layout, color theory, typography, and responsive design to ensure a seamless user experience across devices.</p>      <p>Explore the world of web design by learning HTML, CSS, and JavaScript. Dive into frameworks like <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> for efficient and responsive design.</p>    </section>    <section class="algorithms">      <h2>Algorithms</h2>      <p>Algorithms are step-by-step procedures or formulas for solving problems. They are crucial in computer science for efficient data processing and problem-solving. Common algorithms include sorting, searching, and graph traversal algorithms.</p>      <p>Discover the importance of algorithms in programming and explore algorithmic thinking to solve complex problems.</p>    </section>    <section class="languages">      <h2>Programming Languages</h2>      <p>Programming languages are the tools used to write software. Each language has its syntax and purpose. Examples include Python, JavaScript, Java, and more. Choosing the right language depends on the task at hand.</p>      <p>Explore the diverse world of programming languages and their applications in different domains.</p>    </section>    <section class="data-structures">      <h2>Data Structures</h2>      <p>Data structures organize and store data for efficient retrieval and manipulation. Examples include arrays, linked lists, trees, and hash tables. Choosing the right data structure is crucial for optimizing algorithms.</p>      <p>Delve into the study of data structures and understand their role in building efficient and scalable software.</p>    </section>    <footer class="academy-footer">      <p>Embark on your journey through the Infinite Academy and unlock the boundless possibilities of the digital world.</p>    </footer>  </div></body></html>`,
    "web-design": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Web Design</title>    <style>        body {            margin: 0;            padding: 0;            background-color: antiquewhite;        }        #header {            background-color: #ffd700; /* Old and yellow aesthetic */            padding: 20px;            text-align: center;        }        .section {            margin: 20px;            padding: 15px;            border: 1px solid #d2b48c; /* Antique Brass border color */            border-radius: 10px;            background-color: #fafad2; /* Light Goldenrod Yellow background color */        }        .important-text {            color: #8b4513; /* Saddle Brown text color */            font-weight: bold;        }        #link {            color: #ffd700; /* Old Gold link color */            text-decoration: none;            font-weight: bold;        }        #link:hover {            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Welcome to the Infinite Academy</h1>        <p>Your source for timeless knowledge</p>    </div>    <div class="section">        <h2 class="important-text">Introduction to Web Design</h2>        <p>Web design is the process of creating and styling the visual elements of a website. It involves the use of HTML, CSS, and sometimes JavaScript to structure and design web pages.</p>    </div>    <div class="section">        <h2 class="important-text">Key Concepts in Web Design</h2>        <ul>            <li>HTML (Hypertext Markup Language): The standard markup language for creating web pages.</li>            <li>CSS (Cascading Style Sheets): Used for styling and layout of web pages.</li>            <li>Responsive Design: Ensures your website looks good on all devices.</li>        </ul>    </div>    <div class="section">        <h2 class="important-text">Further Reading</h2>        <p>Explore more about web design by visiting the <a href="https://developer.mozilla.org/en-US/docs/Web" id="link" target="_blank">MDN Web Docs</a>.</p>    </div></body></html>`,
    "algorithms": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy: Algorithms</title>    <style>        body {            margin: 0;            padding: 0;            background-color: antiquewhite;        }        .container {            max-width: 800px;            margin: 20px auto;            padding: 20px;            background-color: #fff;            border-radius: 8px;            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);        }        .section {            margin-bottom: 20px;        }        .highlight {            background-color: #ffefc7;            padding: 5px;            border-radius: 5px;        }        .code {            font-family: 'Courier New', monospace;            background-color: #f5f5f5;            padding: 10px;            border-radius: 5px;            overflow-x: auto;        }    </style></head><body>    <div class="container">        <h1>Welcome to the Infinite Academy</h1>        <div class="section">            <h2>Introduction to Algorithms</h2>            <p>                In the vast world of programming, algorithms are essential step-by-step procedures designed to perform specific tasks or solve particular problems. They are the building blocks of software, enabling developers to create efficient and optimized solutions.            </p>        </div>        <div class="section">            <h2>Why Algorithms Matter</h2>            <p>                Algorithms form the backbone of computer programs, influencing their speed, scalability, and overall performance. Understanding algorithms is crucial for developers to write code that not only works but works efficiently, especially when dealing with large datasets or complex operations.            </p>        </div>        <div class="section">            <h2>Common Algorithmic Concepts</h2>            <p>                <strong class="highlight">Recursion:</strong> A technique where a function calls itself, often used in solving problems that can be broken down into smaller, similar sub-problems.            </p>            <div class="code">                <code>                    function factorial(n) {<br>                    &emsp;if (n === 0 || n === 1) {<br>                    &emsp;&emsp;return 1;<br>                    &emsp;} else {<br>                    &emsp;&emsp;return n * factorial(n - 1);<br>                    &emsp;}<br>                    }<br>                </code>            </div>            <p>                <strong class="highlight">Sorting:</strong> Arranging elements in a specific order, such as ascending or descending. Common sorting algorithms include Bubble Sort, Merge Sort, and Quick Sort.            </p>            <div class="code">                <code>                    const numbers = [4, 2, 8, 1, 6];<br>                    const sortedNumbers = numbers.sort((a, b) => a - b);<br>                    console.log(sortedNumbers); // [1, 2, 4, 6, 8]<br>                </code>            </div>        </div>        <div class="section">            <h2>Resources for Further Learning</h2>            <p>                Dive deeper into the world of algorithms with these resources:            </p>            <ul>                <li><a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">GeeksforGeeks - Fundamentals of Algorithms</a></li>                <li><a href="https://visualgo.net/en/sorting">Visualgo - Sorting Algorithms Visualization</a></li>            </ul>        </div>    </div></body></html>`,
    "languages": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Programming Languages</title>    <style>        body {            margin: 0;            padding: 0;            background-color: antiquewhite;        }        #header {            font-family: 'Times New Roman', serif;            text-align: center;            padding: 20px;            background-color: #ffd700; /* Golden yellow */            color: #8b4513; /* Saddle brown */        }        .section {            margin: 20px;            padding: 20px;            border: 1px solid #8b4513; /* Saddle brown */            background-color: #fafad2; /* Light goldenrod yellow */            border-radius: 10px;        }        .code {            font-family: 'Courier New', monospace;            background-color: #f0e68c; /* Khaki */            padding: 10px;            margin: 10px;            border-radius: 5px;        }        #footer {            text-align: center;            padding: 10px;            background-color: #ffd700; /* Golden yellow */            color: #8b4513; /* Saddle brown */        }    </style></head><body>    <div id="header">        <h1>Welcome to the Infinite Academy</h1>        <p>Exploring the Wonders of Programming Languages</p>    </div>    <div class="section">        <h2>Introduction to Programming Languages</h2>        <p>Programming languages are essential tools for creating software, websites, and applications. They serve as a means of communication between humans and computers.</p>    </div>    <div class="section">        <h2>Popular Programming Languages</h2>        <ul>            <li>HTML - <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Learn HTML</a></li>            <li>JavaScript - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Explore JavaScript</a></li>            <li>Python - <a href="https://www.python.org/" target="_blank">Python Official Website</a></li>        </ul>    </div>    <div class="section">        <h2>Code Example</h2>        <div class="code">            <p>// Hello, World! program in JavaScript</p>            <script>                document.write('Hello, World!');            </script>        </div>    </div>    <div id="footer">        <p>&copy; 2023 Infinite Academy. All rights reserved.</p>    </div></body></html>`,
    "data-structures": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy: Data Structures</title>    <style>        body {            margin: 0;            padding: 0;            color: black;            font-family: 'Times New Roman', Times, serif;            background-color: antiquewhite;        }        #header {            font-size: 24px;            font-weight: bold;            text-align: center;            padding: 20px;            background-color: #ffe4b5; /* Moccasin color for a vintage touch */        }        .lesson-content {            margin: 20px;            padding: 20px;            background-color: #fafad2; /* Light Goldenrod Yellow for a touch of yellow */            border-radius: 10px;        }        .topic {            font-size: 20px;            font-weight: bold;            margin-bottom: 10px;        }        .paragraph {            font-size: 16px;            line-height: 1.5;            margin-bottom: 15px;        }        #external-link {            color: #8b4513; /* SaddleBrown color for links */        }    </style></head><body>    <div id="header">        Infinite Academy: Data Structures    </div>    <div class="lesson-content">        <div class="topic">            Understanding Data Structures        </div>        <div class="paragraph">            <p>Data structures are essential components in computer science, providing a way to organize and store data efficiently. Think of them as the architectural framework for data in a computer's memory.</p>        </div>        <div class="topic">            Types of Data Structures        </div>        <div class="paragraph">            <p>There are various types of data structures, each serving a specific purpose. Some common ones include:</p>            <ul>                <li>Arrays</li>                <li>Linked Lists</li>                <li>Stacks</li>                <li>Queues</li>                <li>Trees</li>                <li>Graphs</li>                <li>Hash Tables</li>            </ul>        </div>        <div class="topic">            Importance of Choosing the Right Data Structure        </div>        <div class="paragraph">            <p>Choosing the appropriate data structure is crucial for optimizing algorithms and improving the efficiency of operations. It involves understanding the nature of the data and the requirements of the specific problem.</p>        </div>        <div class="topic">            Further Reading        </div>        <div class="paragraph">            <p>Explore more about data structures and their applications. For in-depth knowledge, check out resources like <a href="https://www.geeksforgeeks.org/data-structures/" target="_blank" id="external-link">GeeksforGeeks - Data Structures</a>.</p>        </div>    </div></body></html>`,
    "basic-concepts": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy: Programming Basics</title>    <style>        /* Add your styles here */        body {            margin: 20px;            padding: 20px;            background-color: antiquewhite;        }        .academy-container {            padding: 20px;        }        header {            text-align: center;            margin-bottom: 20px;        }        .subheading {            font-style: italic;        }        section {            margin-bottom: 30px;        }        a {            color: #0066cc;            text-decoration: none;        }        a:hover {            text-decoration: underline;        }    </style></head><body>    <div class="academy-container">        <header>            <h1>Welcome to the Infinite Academy</h1>            <p class="subheading">Exploring Basic Concepts in Programming</p>        </header>        <section id="introduction">            <h2>Introduction to Programming</h2>            <p>                Programming is the art of instructing a computer to perform tasks. It involves creating sets of                instructions, also known as code, to solve problems and automate processes.            </p>        </section>        <section id="variables">            <h2>Variables and Data Types</h2>            <p>                In programming, variables store and represent data. They can hold various types of information such as                numbers, text, or boolean values.            </p>            <p>                <a href="https://www.w3schools.com/js/js_datatypes.asp" target="_blank">Learn more about data types</a>.            </p>        </section>        <section id="control-flow">            <h2>Control Flow</h2>            <p>                Control flow structures, like loops and conditional statements, enable the programmer to control the                order in which instructions are executed.            </p>            <p>                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" target="_blank">Explore control flow in JavaScript</a>.            </p>        </section>        <section id="functions">            <h2>Functions</h2>            <p>                Functions allow you to group code into reusable blocks, making your programs more modular and                easier to understand.            </p>            <p>                <a href="https://www.learn-js.org/" target="_blank">Practice writing functions in JavaScript</a>.            </p>        </section>        <footer>            <p class="subheading">Keep exploring the infinite possibilities in programming!</p>        </footer>    </div></body></html>`,
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