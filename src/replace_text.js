traverseDOM(document.body);

function traverseDOM(node)
{

    var child, sibling;

    // with a head tilt to goo.gl/s4D2JW
    switch (node.nodeType)
    {
        //skip these, we're not restructuring:
        case 1: // element
        case 9: // document
        case 11: // document fragmment
            child = node.firstChild;
            while (child)
            {
                sibling = child.nextSibling;
                traverseDOM(child);
                child = sibling; //they grow up so fast;
            }
            break;
        case 3: //text!
            processRegex(node);
            break;
        default: //skip types we don't explicitly handle
            break;
    }
} //processRegex()

function processRegex(textNodeType)
{
    //use vars so we can expand to a list of similar terms later
    var textNodeContent = textNodeType.nodeValue;
    var termOld = 'bitcoin';
    var termNew = 'dunning-kruggerrand';

    textNodeContent = textNodeContent.replace(/\bBitcoin\b/g, "Dunning-Kruggerrand");
    textNodeContent = textNodeContent.replace(/\bBitCoin\b/g, "Dunning-Kruggerrand");
    textNodeContent = textNodeContent.replace(/\bbitCoin\b/g, "Dunning-Kruggerrand");
    textNodeContent = textNodeContent.replace(/\bbitcoin\b/g, "Dunning-Kruggerrand");

    // '\b' : word boundary; '(?i)(term)' any case
    // i basically want replace(/\bbitcoin\b/g, meant), but for now:
    //var regExp = new RegExp(termOld, 'ig');
    //textNodeContent = textNodeContent.replace(regExp, termNew); //replace term
    textNodeType.nodeValue = textNodeContent; //and put it on the page
}
