// tree structure: [father, [child, [grandchild, great grandchild (virgin)], grandchild (virgin)], child (virgin)]
var programmingPath = [document.getElementById("subject-title"), [document.getElementById('biology')], [document.getElementById('chemistry')], [document.getElementById('physics')], [document.getElementById('psychology')], [document.getElementById('astronomy')], [document.getElementById('geology')]];


var presetModules = {  // hardcoded HTML is included for modules we always want to be the same, namely the starting modules like Intro To XXX
    "subject-title": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - The Wonders of Science</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Embarking on a Journey Through the Wonders of Science</p>    </div>    <div class="section-heading">Introduction to Science</div>    <div class="content">        <p class="topic">What is Science?</p>        <p>            Science is the systematic study of the natural world through observation, experimentation, and analysis. It seeks to understand the underlying principles and laws that govern the universe, from the smallest particles to the vastness of space.        </p>        <p class="topic">Key Disciplines in Science</p>        <ul>            <li>Physics</li>            <li>Chemistry</li>            <li>Biology</li>            <li>Astronomy</li>            <li>Earth Science</li>            <li>Pyschology</li>        </ul>        <p class="topic">Why Science Matters</p>        <p>            Science is the foundation of knowledge and innovation. It shapes our understanding of the world, drives technological advancements, and addresses global challenges, contributing to the progress of humanity.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to delve deeper into the wonders of science? Explore fascinating articles and experiments on <a href="https://www.scientificamerican.com/" class="resource-link" target="_blank">Scientific American</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of Science, let the golden threads of curiosity weave through the fabric of discovery and understanding.        </p>    </div></body></html>`,
    "biology": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Unveiling the Mysteries of Biology</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Embarking on a Journey Through the Marvels of Biology</p>    </div>    <div class="section-heading">Introduction to Biology</div>    <div class="content">        <p class="topic">What is Biology?</p>        <p>            Biology is the scientific study of living organisms and their interactions with each other and the environment. It encompasses a vast range of topics, from the structure and function of cells to the complexities of ecosystems and the diversity of life on Earth.        </p>        <p class="topic">Key Areas of Study in Biology</p>        <ul>            <li>Cell Biology</li>            <li>Genetics</li>            <li>Evolutionary Biology</li>            <li>Ecology</li>            <li>Anatomy and Physiology</li>            <li>Microbiology</li>        </ul>        <p class="topic">Why Biology Matters</p>        <p>            Biology is the foundation of our understanding of life and the natural world. It contributes to advancements in medicine, agriculture, environmental conservation, and provides insights into the fundamental processes that sustain life.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to delve deeper into the wonders of biology? Explore captivating articles and research on <a href="https://www.nature.com/nature/" class="resource-link" target="_blank">Nature</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of Biology, let the golden threads of curiosity unravel the mysteries of life, from the microscopic to the magnificent.        </p>    </div></body></html>`,
    "chemistry": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Chemistry</title>    <style>        body {            margin: 0;            padding: 0;            color: black;            font-family: 'Times New Roman', serif;        }        #main-container {            background-color: antiquewhite;            padding: 20px;            text-align: center;        }        .section-heading {            font-size: 24px;            color: #d2aa5c; /* Old and yellow color */            margin-bottom: 10px;        }        .sub-section {            margin-top: 20px;            padding: 10px;            border: 1px solid #d2aa5c;            border-radius: 10px;            background-color: #fefecd; /* Light yellow background */        }        .chemical-element {            font-weight: bold;            color: #5c452d; /* Dark brown text color */        }    </style></head><body>    <div id="main-container">        <h1 class="section-heading">Exploring the Wonders of Chemistry</h1>        <div class="sub-section">            <p>Welcome to the Infinite Academy's Chemistry Class. Today, we embark on a journey through the fascinating world of molecules and reactions.</p>            <h2 class="section-heading">The Periodic Table</h2>            <p>Our journey begins with the Periodic Table, a vast collection of elements that make up the building blocks of matter. Each element, such as <span class="chemical-element">hydrogen</span> and <span class="chemical-element">carbon</span>, has its unique properties.</p>            <h2 class="section-heading">Chemical Reactions</h2>            <p>Discover the magic of chemical reactions where substances transform into new forms. Witness the dance of atoms and molecules as they rearrange themselves in intricate patterns.</p>            <h2 class="section-heading">Laboratory Experiments</h2>            <p>Don your imaginary lab coat as we delve into exciting experiments. From colorful chemical reactions to mysterious gas formations, the laboratory is our playground for exploration.</p>            <h2 class="section-heading">Further Exploration</h2>            <p>For a deeper understanding, check out this <a href="https://www.khanacademy.org/science/chemistry" target="_blank">chemistry course on Khan Academy</a>.</p>        </div>    </div></body></html>`,
    "physics": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Exploring the Wonders of Physics</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Embarking on a Journey Through the Marvels of Physics</p>    </div>    <div class="section-heading">Introduction to Physics</div>    <div class="content">        <p class="topic">What is Physics?</p>        <p>            Physics is the branch of science that deals with the fundamental principles governing the behavior of matter and energy in the universe. It explores the nature of space, time, motion, and the forces that shape the world around us.        </p>        <p class="topic">Key Areas of Study in Physics</p>        <ul>            <li>Mechanics</li>            <li>Thermodynamics</li>            <li>Electromagnetism</li>            <li>Optics</li>            <li>Quantum Mechanics</li>            <li>Relativity</li>        </ul>        <p class="topic">Why Physics Matters</p>        <p>            Physics is the foundation of our understanding of the natural world and the basis for technological advancements. It enables us to explain the mysteries of the cosmos, from the smallest subatomic particles to the vastness of the universe.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to delve deeper into the wonders of physics? Explore fascinating articles and research on <a href="https://www.physics.org/" class="resource-link" target="_blank">Physics.org</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of Physics, let the golden threads of curiosity unravel the mysteries of the physical world and its intricate dance of forces.        </p>    </div></body></html>`,
    "psychology": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Psychology</title>    <style>        body {            background-color: antiquewhite;            margin: 0;            padding: 0;        }        #header {            text-align: center;            font-size: 36px;            font-weight: bold;            color: #8B4513; /* SaddleBrown color for header */            margin: 20px;        }        .lesson-content {            font-size: 18px;            line-height: 1.6;            margin: 20px;            padding: 20px;            background-color: #FFF8DC; /* Cornsilk color for lesson content */            border-radius: 10px;        }        .highlight {            color: #FFD700; /* Gold color for highlighted text */            font-weight: bold;        }    </style></head><body>    <div id="header">Welcome to the Infinite Academy - Psychology</div>        <div class="lesson-content">        <h2>The Fascinating World of Psychology</h2>                <p>Psychology is the scientific study of the mind and behavior. It explores the complexities of human thoughts, emotions, and actions, striving to understand the underlying processes that govern our experiences.</p>                <p>In this infinite academy, let's delve into a few key branches of psychology:</p>                <ul>            <li><span class="highlight">Cognitive Psychology:</span> Focuses on mental processes such as perception, memory, and problem-solving.</li>            <li><span class="highlight">Behavioral Psychology:</span> Examines observable behaviors and the impact of external stimuli on actions.</li>            <li><span class="highlight">Clinical Psychology:</span> Addresses mental health disorders and therapeutic interventions to improve well-being.</li>        </ul>        <p>Throughout our journey in this antique-themed academy, we'll uncover the rich history of psychological theories and their applications in understanding the human experience.</p>        <p>For further exploration, you can visit reputable sources like <a href="https://www.apa.org/" target="_blank">American Psychological Association (APA)</a> to stay updated on the latest developments in the field.</p>    </div></body></html>`,
    "astronomy": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Unveiling the Wonders of Astronomy</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Embarking on a Celestial Journey Through the Marvels of Astronomy</p>    </div>    <div class="section-heading">Introduction to Astronomy</div>    <div class="content">        <p class="topic">What is Astronomy?</p>        <p>            Astronomy is the scientific study of celestial objects, such as stars, planets, galaxies, and the entire universe. It explores the origins, evolution, and phenomena of celestial bodies, providing insights into the vastness of space and our place within it.        </p>        <p class="topic">Key Areas of Study in Astronomy</p>        <ul>            <li>Observational Astronomy</li>            <li>Planetary Science</li>            <li>Astrophysics</li>            <li>Cosmology</li>            <li>Exoplanet Research</li>            <li>Stellar Astronomy</li>        </ul>        <p class="topic">Why Astronomy Matters</p>        <p>            Astronomy allows us to explore the mysteries of the cosmos, understand the origins of the universe, and gain knowledge that contributes to advancements in technology and our understanding of life beyond Earth.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to delve deeper into the wonders of astronomy? Explore captivating articles and images on <a href="https://www.nasa.gov/" class="resource-link" target="_blank">NASA's official website</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of Astronomy, let the golden light of distant stars guide you through the celestial tapestry of the cosmos.        </p>    </div></body></html>`,
    "geology": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <style>        body {            margin: 0;            padding: 0;            background-color: antiquewhite;        }        .header {            font-size: 24px;            font-weight: bold;            text-align: center;            padding: 20px;        }        .content {            padding: 20px;                  }        .section-title {            font-size: 20px;            font-weight: bold;            margin-bottom: 10px;        }        .important-text {            color: #c49a6c; /* Old yellow color */            font-weight: bold;        }        .link {            color: #4b5d67; /* Subdued blue link color */            text-decoration: underline;        }    </style>    <title>Infinite Academy - Geology Lesson</title></head><body>    <div class="header">        Welcome to the Infinite Academy: Exploring the Wonders of Geology    </div>    <div class="content">        <div class="section-title">            The Earth's Dynamic Landscape        </div>        <p>            Geology is the study of the Earth's structure, composition, and processes that shape its features. The Earth, with its layers and geological forces, has a rich history that spans millions of years.        </p>        <div class="section-title">            Rock Types and Formations        </div>        <p>            Rocks are the building blocks of the Earth's crust. There are three main types: <span class="important-text">igneous</span>, <span class="important-text">sedimentary</span>, and <span class="important-text">metamorphic</span>. Each type tells a unique story of the Earth's history and processes.        </p>        <div class="section-title">            Geological Time Scale        </div>        <p>            The Earth's history is divided into eras, periods, and epochs, creating a vast geological time scale. Understanding this scale allows geologists to unravel the mysteries of ancient life forms and environmental changes. Explore more about the <a class="link" href="https://en.wikipedia.org/wiki/Geologic_time_scale" target="_blank">geological time scale</a>.        </p>        <div class="section-title">            Plate Tectonics        </div>        <p>            The Earth's outer shell, the lithosphere, is divided into plates that float on the semi-fluid asthenosphere beneath. Plate tectonics drive earthquakes, volcanic activity, and the formation of mountain ranges. Dive deeper into <span class="important-text">plate tectonics</span> to understand the Earth's dynamic movements.        </p>        <div class="section-title">            Resources for Further Exploration        </div>        <ul>            <li>Explore geological wonders on <a class="link" href="https://www.nationalgeographic.com/science/earth/" target="_blank">National Geographic</a></li>            <li>Learn about rocks and minerals on the <a class="link" href="https://geology.com/" target="_blank">Geology.com</a></li>        </ul>    </div></body></html>`,
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