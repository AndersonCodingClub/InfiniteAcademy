// tree structure: [father, [child, [grandchild, great grandchild (virgin)], grandchild (virgin)], child (virgin)]
var programmingPath = [document.getElementById("subject-title"), [document.getElementById('stocks')], [document.getElementById('bonds')], [document.getElementById('mutual-funds')], [document.getElementById('real-estate')], [document.getElementById('commodities')], [document.getElementById('exchange-traded-funds')]];


var presetModules = {  // hardcoded HTML is included for modules we always want to be the same, namely the starting modules like Intro To XXX
    "subject-title": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Investing</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Embarking on the Art and Science of Investing</p>    </div>    <div class="section-heading">Understanding Investing</div>    <div class="content">        <p class="topic">What is Investing?</p>        <p>            Investing is the strategic allocation of resources, typically money, with the aim of generating a return over time. It involves making informed decisions about where to put your money to achieve financial goals, such as wealth growth, retirement planning, or funding education.        </p>        <p class="topic">Key Concepts to Explore</p>        <ul>            <li>Types of Investments (Stocks, Bonds, Real Estate)</li>            <li>Risk and Return</li>            <li>Asset Allocation</li>            <li>Market Analysis</li>            <li>Long-Term vs. Short-Term Investing</li>        </ul>        <p class="topic">Why Investing Matters</p>        <p>            Investing provides the opportunity to grow wealth over time, beat inflation, and achieve financial goals. It's a crucial aspect of financial planning that empowers individuals to make their money work for them.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to dive deeper into the world of investing? Explore valuable insights and resources on <a href="https://www.investopedia.com/" class="resource-link" target="_blank">Investopedia</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of Investing, let the golden principles of financial wisdom guide you on the path to financial success and prosperity.        </p>    </div></body></html>`,
    "stocks": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Stocks</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Navigating the World of Stocks</p>    </div>    <div class="section-heading">Understanding Stocks</div>    <div class="content">        <p class="topic">What are Stocks?</p>        <p>            Stocks represent ownership in a company. When you own a share of stock, you own a piece of that company and become a shareholder. Stocks are traded on stock exchanges, and their prices can fluctuate based on various factors.        </p>        <p class="topic">Key Concepts to Explore</p>        <ul>            <li>Stock Market Basics</li>            <li>Types of Stocks (Common and Preferred)</li>            <li>Buying and Selling Stocks</li>            <li>Stock Price Determinants</li>            <li>Risk and Return in Stock Investing</li>        </ul>        <p class="topic">Why Stocks Matter</p>        <p>            Investing in stocks offers the potential for long-term growth and financial returns. Understanding the stock market is essential for building wealth and achieving financial goals.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to dive deeper into the world of stocks? Explore real-time market data and educational resources on <a href="https://www.investopedia.com/" class="resource-link" target="_blank">Investopedia</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of Stocks, let the golden threads of financial knowledge weave through your understanding of wealth creation and investment.        </p>    </div></body></html>`,
    "bonds": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Bonds</title>    <style>        body {            margin: 0;            padding: 0;            background-color: antiquewhite;        }        .lesson-container {            max-width: 800px;            margin: 20px auto;            padding: 20px;            background-color: #fff;            border-radius: 8px;            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);        }        .topic-header {            font-size: 24px;            font-weight: bold;            color: #333;            text-align: center;        }        .summary {            font-size: 16px;            line-height: 1.6;            color: #555;        }        .external-link {            color: #0077cc;            text-decoration: none;            font-weight: bold;        }    </style></head><body><div class="lesson-container">    <header class="topic-header">        Understanding Bonds in Finance    </header>    <section class="summary">        <p>            Bonds are financial instruments that represent a debt obligation. When an entity, such as a government or corporation, needs to raise capital, they issue bonds to investors. Investors who purchase these bonds essentially lend money to the issuer in exchange for periodic interest payments and the return of the principal amount at maturity.        </p>        <p>            Bonds play a crucial role in diversifying investment portfolios and are considered safer than some other forms of investments. They come with different characteristics, including maturity dates, interest rates, and risk levels.        </p>        <p>            To learn more about bonds, you can explore resources like <a class="external-link" href="https://www.investopedia.com/bonds-4427690" target="_blank">Investopedia's guide on bonds</a>.        </p>    </section></div></body></html>`,
    "mutual-funds": `<!DOCTYPE html><html lang="en"><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <title>Infinite Academy - Mutual Funds Lesson</title>  <style>    body {      background-color: antiquewhite;    }    #header {      font-size: 24px;      font-weight: bold;      color: goldenrod;      text-align: center;      margin-top: 20px;    }    .lesson-content {      font-size: 18px;      margin: 20px;      line-height: 1.6;    }    #definition {      font-style: italic;      color: #b8860b;    }    .link {      color: #8b4513;      text-decoration: underline;    }  </style></head><body>  <div id="header">    Welcome to the Infinite Academy - Mutual Funds Lesson  </div>  <div class="lesson-content">    <p>      Mutual funds are a type of investment vehicle that pools money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.    </p>    <p id="definition">      A mutual fund is managed by a professional fund manager, who makes investment decisions on behalf of the investors.    </p>    <p>      One key advantage of mutual funds is their ability to offer diversification, spreading the risk across various assets. This can be beneficial for investors seeking a balanced and less volatile investment.    </p>    <p>      If you want to explore further, check out this <a href="https://www.investopedia.com/terms/m/mutualfund.asp" target="_blank" class="link">Investopedia link</a> for more in-depth information.    </p>  </div></body></html>`,
    "real-estate": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Real Estate Investing</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Unlocking the Secrets of Real Estate Investing</p>    </div>    <div class="section-heading">Understanding Real Estate Investing</div>    <div class="content">        <p class="topic">What is Real Estate Investing?</p>        <p>            Real estate investing involves the purchase, ownership, management, rental, or sale of real estate for profit. It's a strategic way to build wealth over time through various avenues within the real estate market.        </p>        <p class="topic">Key Concepts to Explore</p>        <ul>            <li>Types of Real Estate Investments (Residential, Commercial, Industrial)</li>            <li>Real Estate Market Analysis</li>            <li>Rental Property Management</li>            <li>Real Estate Financing</li>            <li>Risk and Return in Real Estate</li>        </ul>        <p class="topic">Why Real Estate Investing Matters</p>        <p>            Real estate investing provides opportunities for long-term wealth creation, diversification of investment portfolios, and passive income generation through rental properties.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to dive deeper into the world of real estate investing? Explore valuable insights and resources on <a href="https://www.biggerpockets.com/" class="resource-link" target="_blank">BiggerPockets</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of Real Estate Investing, let the golden keys of property wisdom unlock the doors to financial prosperity.        </p>    </div></body></html>`,
    "commodities": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Commodity Investing</title>    <style>        body {            background-color: antiquewhite;            margin: 0;            padding: 0;        }        #header {            text-align: center;            padding: 20px;            font-size: 24px;            font-weight: bold;        }        .lesson-content {            max-width: 800px;            margin: 20px auto;            padding: 20px;            background-color: #fff;            border-radius: 8px;            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);        }        #introduction {            font-size: 18px;            line-height: 1.6;        }        #commodity-definition {            margin-top: 20px;            font-size: 16px;        }        #examples {            margin-top: 20px;            font-size: 16px;        }        #conclusion {            margin-top: 20px;            font-size: 16px;        }    </style></head><body>    <div id="header">Welcome to the Infinite Academy - Commodity Investing</div>    <div class="lesson-content" id="introduction">        <h2>Introduction to Commodity Investing</h2>        <p>            Commodity investing involves putting money into raw materials or primary agricultural products with the expectation that their value will rise over time.        </p>        <p>            Commodity markets have a rich history, dating back to ancient civilizations that traded goods like spices, precious metals, and agricultural produce.        </p>    </div>    <div class="lesson-content" id="commodity-definition">        <h2>Understanding Commodities</h2>        <p>            Commodities can be broadly categorized into two types: hard commodities and soft commodities. Hard commodities include natural resources like gold, oil, and metals, while soft commodities comprise agricultural products such as wheat, coffee, and cotton.        </p>        <p>            Investors can participate in the commodity market through various financial instruments, including futures contracts and commodity-focused exchange-traded funds (ETFs).        </p>    </div>    <div class="lesson-content" id="examples">        <h2>Examples of Commodity Investing</h2>        <p>            Let's explore a few examples of popular commodities for investment:        </p>        <ul>            <li>Gold - often considered a safe-haven asset</li>            <li>Crude Oil - influenced by geopolitical events and supply-demand dynamics</li>            <li>Soybeans - a representative of agricultural commodities</li>        </ul>    </div>    <div class="lesson-content" id="conclusion">        <h2>Conclusion</h2>        <p>            Commodity investing can be a valuable addition to a diversified investment portfolio. However, it comes with its own set of risks and considerations. As with any investment, thorough research and understanding of market dynamics are crucial for success.        </p>        <p>            If you're interested in delving deeper into commodity investing, consider exploring reputable financial news websites such as <a href="https://www.bloomberg.com/markets/commodities" target="_blank">Bloomberg Commodities</a> for the latest market trends and insights.        </p>    </div></body></html>`,
    "exchange-traded-funds": `<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Infinite Academy - Exchange-Traded Funds (ETFs)</title>    <style>        body {            font-family: 'Times New Roman', serif;            margin: 20px;            padding: 20px;            background-color: antiquewhite;            color: #333;        }        #header {            font-size: 28px;            text-align: center;            color: #cc9900;            margin-bottom: 20px;        }        .section-heading {            font-size: 24px;            color: #cc9900;            margin-top: 20px;        }        .topic {            font-size: 18px;            margin-bottom: 10px;            color: #cc9900;        }        .content {            margin-bottom: 20px;        }        #conclusion {            font-style: italic;            color: #666;        }        .resource-link {            color: #0066cc;            text-decoration: underline;        }    </style></head><body>    <div id="header">        <h1>Infinite Academy</h1>        <p>Decoding the Magic of Exchange-Traded Funds (ETFs)</p>    </div>    <div class="section-heading">Understanding ETFs</div>    <div class="content">        <p class="topic">What are Exchange-Traded Funds (ETFs)?</p>        <p>            ETFs are investment funds that are traded on stock exchanges, similar to stocks. They typically hold a diversified portfolio of assets such as stocks, bonds, or commodities, providing investors with a convenient way to gain exposure to a broad market or sector.        </p>        <p class="topic">Key Features of ETFs</p>        <ul>            <li>Market Traded and Priced</li>            <li>Diversification</li>            <li>Low Expense Ratios</li>            <li>Passive and Active Management</li>            <li>Flexibility in Trading</li>        </ul>        <p class="topic">Why ETFs Matter</p>        <p>            ETFs offer investors a cost-effective and flexible way to build a diversified investment portfolio, whether they are looking for exposure to a specific sector, asset class, or the overall market.        </p>    </div>    <div class="section-heading">Explore Further in the Infinite</div>    <div class="content">        <p>            Ready to delve deeper into the world of ETFs? Explore educational resources and market insights on <a href="https://www.etf.com/" class="resource-link" target="_blank">ETF.com</a>.        </p>    </div>    <div id="conclusion">        <p>            As you step into the Infinite Academy of ETFs, let the golden threads of financial knowledge guide you through the maze of investment possibilities.        </p>    </div></body></html>`,
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