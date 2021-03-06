window.onload = startup;

function startup(){
    copyExampleCode();
}

function copyExampleCode (){
    var exampleSections = document.getElementsByClassName('example-section');
    for(let section of exampleSections){
        copySnippet(section);
    }
    function copySnippet(sectionElement){
        var example = sectionElement.getElementsByClassName("example")[0];
        if(!example)
            return;
        var snippetElement = sectionElement.getElementsByClassName("example-code")[0];
        if(!snippetElement)
            return;
        snippetElement.value = cleanCode(example.innerHTML);
        snippetElement.style.height = (10 + snippetElement.scrollHeight) + "px"
    }

    function cleanCode(code){
        code = code.substring(1);
        var numberOfSpaces = code.indexOf('<');
        if(numberOfSpaces <= 0){
            return code;
        }
        var extraIndent = ' '.repeat(numberOfSpaces);
        code = code.replaceAll(extraIndent, "");
        return code;
    }
}