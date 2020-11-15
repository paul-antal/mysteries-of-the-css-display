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
        snippetElement.value = example.innerHTML;
    }
}