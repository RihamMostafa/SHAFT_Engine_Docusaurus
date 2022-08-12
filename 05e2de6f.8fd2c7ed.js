(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),l=n(6),r=(n(0),n(96)),o={id:"Element_Actions",title:"Element Actions",sidebar_label:"Element Actions"},i={unversionedId:"Element_Actions",id:"Element_Actions",isDocsHomePage:!1,title:"Element Actions",description:"Click on an Element",source:"@site/docs/Element_Actions.md",permalink:"/SHAFT_Engine_Docusaurus/docs/Element_Actions",editUrl:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/Element_Actions.md",sidebar_label:"Element Actions",sidebar:"someSidebar",previous:{title:"Browser Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Browser_Actions"},next:{title:"Touch Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Touch_Actions"}},c=[{value:"Click on an Element",id:"click-on-an-element",children:[]},{value:"Click And Hold",id:"click-and-hold",children:[]},{value:"Double Click\u200b",id:"double-click",children:[]},{value:"Hover",id:"hover",children:[]},{value:"Hover and click",id:"hover-and-click",children:[]},{value:"Drag and drop",id:"drag-and-drop",children:[]},{value:"Get Tag name",id:"get-tag-name",children:[]},{value:"Get the value of an element attribute",id:"get-the-value-of-an-element-attribute",children:[]},{value:"Get the value of a CSS property",id:"get-the-value-of-a-css-property",children:[]},{value:"Get context handles",id:"get-context-handles",children:[]},{value:"Switching focus to a different context",id:"switching-focus-to-a-different-context",children:[]},{value:"Get window handles",id:"get-window-handles",children:[]},{value:"Switching focus to a different window",id:"switching-focus-to-a-different-window",children:[]},{value:"Handling IFrames",id:"handling-iframes",children:[]},{value:"Insert text into a text field",id:"insert-text-into-a-text-field",children:[]},{value:"Perform Clipboard action",id:"perform-clipboard-action",children:[]},{value:"Sample Code Snippet",id:"sample-code-snippet",children:[{value:"Get elements count",id:"get-elements-count",children:[]}]},{value:"Sample Code Snippet",id:"sample-code-snippet-1",children:[{value:"Get selected option from a drop down",id:"get-selected-option-from-a-drop-down",children:[]},{value:"Select an option from a drop down list",id:"select-an-option-from-a-drop-down-list",children:[]}]},{value:"Sample Code Snippet",id:"sample-code-snippet-2",children:[{value:"Get size of an element",id:"get-size-of-an-element",children:[]},{value:"Get elements text",id:"get-elements-text",children:[]},{value:"Get state of an element",id:"get-state-of-an-element",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"click-on-an-element"},"Click on an Element"),Object(r.b)("p",null,"In order to interact with elements appearing on web page you'll first need to locate the element using one of WebDriver's locating strategies(",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/By.html"}),"By methods"),") like ID, Class Name,\nXPath, CSS Selectors, link Text, Partial link text, Name, or Tag name."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\n//a By object is used to store the locator to your element\nprivate By elementLocator = By.id("sign_in_btn");\n//click on target element\ndriver.element().click(elementLocator);\n')),Object(r.b)("p",null,"The method click will wait for your target element to be interactable and then attempts to click on it using Selenium WebDriver, if that didn't work it will\nattempt to click using JavaScript"),Object(r.b)("h3",{id:"click-and-hold"},"Click And Hold"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"driver.element().clickAndHold(elementLocator);\n")),Object(r.b)("p",null,"Waits for the element to be clickable, and then clicks and holds it."),Object(r.b)("h3",{id:"double-click"},"Double Click\u200b"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\n//store the locator to your element\nBy elementLocator = By.className("double_click_btn");\n//Double click target element\ndriver.element().doubleClick(elementLocator);\n')),Object(r.b)("h3",{id:"hover"},"Hover"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import org.openqa.selenium.By;\n//The locator to your element\nBy elementLocator = By.tagName("span");\n//Hover over target element\ndriver.element().hover(elementLocator);\n')),Object(r.b)("h3",{id:"hover-and-click"},"Hover and click"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Hover over an element to show hover menue then click on one of the displayed options")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'By clickable = By.xpath("//a[contains(text(),\'Video Games \') ] ");\nBy hoverItem = By.linkText("Popular Toys");\n\ndriver.element().hoverAndClick(hoverItem, clickable);\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"for multi-level hover menus You need to hover on the category, then hover on a subcategory, and so on until you finally click on the clickable item.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class HoverAndClickDemo {\n    List<By> hoverLocators =new ArrayList<By>();\n    By clickable = By.linkText("Car");\n\n    @Test\n    public void demo() {\n        hoverLocators.add(By.linkText("Popular Toys"));\n        hoverLocators.add(By.xpath("//a[contains(text(),\'Video Games \') ] "));\n\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://phppot.com/demo/multilevel-dropdown-menu-with-pure-css/");\n        driver.element().hoverAndClick(hoverLocators, clickable);\n    }\n}\n')),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://live.staticflickr.com/65535/51627720576_1bd0cf9c6f_z.jpg",alt:"hoverAndClick"}))," ",Object(r.b)("br",null)),Object(r.b)("h3",{id:"drag-and-drop"},"Drag and drop"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Drag an element into a target element")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'By sourceElement = By.id("draggable");    // Locator to the element you want to drag\nBy targetElement = By.id("destination");  // Locator to the destination element\n\ndriver.element().dragAndDrop(sourceElement,targetElement);\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Drag an element to a specified position")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'By sourceElement = By.id("draggable");    // Locator to the element you want to drag\nint xPos= 500;\nint yPos= 500;\n\ndriver.element().dragAndDrop(sourceElement,xPos,yPos);\n')),Object(r.b)("h3",{id:"get-tag-name"},"Get Tag name"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"String TagName = driver.element().getTagName(ElementLocator);\n")),Object(r.b)("p",null,"Retrieves tag name from the target element and returns it as a string value."),Object(r.b)("h3",{id:"get-the-value-of-an-element-attribute"},"Get the value of an element attribute"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//The locator to your element\nBy googleSearchBox = By.cssSelector(".gLFyf.gsfi");\n//get the value of the \'name\' attribute\nString attributeValue = driver.element().getAttribute(googleSearchBox, "name");\n')),Object(r.b)("p",null,"Returns the value of the given attribute as a String,you will allso be able to see something like this\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://live.staticflickr.com/65535/51492494310_076bca3fdc.jpg",alt:"report"}))," ",Object(r.b)("br",null),"\nin the automatically generated Allure report, for more on that see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"Reporting"),"."),Object(r.b)("h3",{id:"get-the-value-of-a-css-property"},"Get the value of a CSS property"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'String propertyValue = driver.element().getCSSProperty\u200b(elementLocator, "width");\n')),Object(r.b)("h3",{id:"get-context-handles"},"Get context handle\\s"),Object(r.b)("p",null,"you need to get the context handle in order to be able to switch back to it"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Return the handle for currently active context.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"String currentContext = driver.element().getContext();\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Return a list of unique handles for all the currently open contexts.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"driver.element().getContextHandles();\n")),Object(r.b)("h3",{id:"switching-focus-to-a-different-context"},"Switching focus to a different context"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"driver.element().setContext(currentContext);\n")),Object(r.b)("h3",{id:"get-window-handles"},"Get window handle\\s"),Object(r.b)("p",null,"you need to get the window handle in order to be able to switch back to it"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Return the handle for currently active window.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"String currentWindow = driver.element().getWindowHandle();\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Return a list of unique handles for all the currently open windows.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"driver.element().getWindowHandles();\n")),Object(r.b)("h3",{id:"switching-focus-to-a-different-window"},"Switching focus to a different window"),Object(r.b)("p",null,"switch driver's focus to a different window using its name or handle"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"driver.element().switchToWindow();\n")),Object(r.b)("h3",{id:"handling-iframes"},"Handling IFrames"),Object(r.b)("p",null,"In order to interact with elements within IFrames you neeed to first change driver's focus to the IFrame, once done you will need to switch back to the original content"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Switching focus to an IFrame")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'By iFrameLocator = By.id("ifr_id");\ndriver.element().switchToIframe(iFrameLocator );\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"switching back to default content")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"driver.element().switchToDefaultContent();\n")),Object(r.b)("h3",{id:"insert-text-into-a-text-field"},"Insert text into a text field"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"clear text inside a text field (if any), and insert new text value")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'driver.element().type(textFieldLocator, "any text you would like to type");\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Append to existing text")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'driver.element().typeAppend(textFieldLocator, "text added to the end");\n')),Object(r.b)("h3",{id:"perform-clipboard-action"},"Perform Clipboard action"),Object(r.b)("p",null,"copy,cut or paste text"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'driver.element().clipboardActions(textFieldLocator, "copy");\n')),Object(r.b)("p",null,'supports the following actions "copy", "paste", "cut", "select all", "unselect"'),Object(r.b)("h2",{id:"sample-code-snippet"},"Sample Code Snippet"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\npublic class TypingDemo {\n    By textField = By.id("tinymce");\n    By textIFrame = By.id("mce_0_ifr");\n\n    @Test\n    void type() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://the-internet.herokuapp.com/tinymce");\n        // switch focus to IFrame containing the text field\n        driver.element().switchToIframe(textIFrame );\n        //append text to the end\n        driver.element().typeAppend(textField, "this is added text");\n        // copy the whole paragraph\n        driver.element().clipboardActions(textField,"select all");\n        driver.element().clipboardActions(textField, "copy");\n        //replace original text using type\n        driver.element().type(textField, "new text that overrides old content , ");\n        //paste previously copied paragraph\n        driver.element().clipboardActions(textField, "paste");\n\n    }\n}\n\n')),Object(r.b)("h3",{id:"get-elements-count"},"Get elements count"),Object(r.b)("p",null,"to find the number of elements matching a specific locator"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"int numOfElements = driver.element().getElementsCount(locatorToMultipleElements);\n")),Object(r.b)("h2",{id:"sample-code-snippet-1"},"Sample Code Snippet"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\npublic class Demo {\n    private By searchBox = By.name("q");\n    private By results = By.cssSelector("h3.LC20lb");\n\n    @Test\n    public void method() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://www.google.com");\n        driver.element().type(searchBox, "SHAFT_ENGINE");\n        driver.element().keyPress(searchBox, "ENTER");\n        int num = driver.element().getElementsCount(results);\n        System.out.println(num);\n\n    }\n}\n')),Object(r.b)("h3",{id:"get-selected-option-from-a-drop-down"},"Get selected option from a drop down"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//Locator to the Drop Down element\nBy dropDown = By.id("dropdown");\n//Retrieve selected text and store it in a string variable\nString SelectedItem = driver.element().getAttribute(googleSearchBox, "name");\n')),Object(r.b)("p",null,"Retrieves the selected text from the target drop-down list element and returns it as a string value."),Object(r.b)("h3",{id:"select-an-option-from-a-drop-down-list"},"Select an option from a drop down list"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//Locator to the Drop Down element\nBy dropDown = By.id("dropdown");\n//Retrieve selected text and store it in a string variable\ndriver.element().select(dropDown, "Option 1");\n')),Object(r.b)("h2",{id:"sample-code-snippet-2"},"Sample Code Snippet"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\n\npublic class DropDownDemo {\n\n    private By dropDown = By.id("dropdown");\n\n    @Test\n    public void method() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL(driver, "https://the-internet.herokuapp.com/dropdown");\n        driver.element().getSelectedText( dropDown);\n        driver.element().select(dropDown, "Option 1");\n        driver.element().getSelectedText(dropDown);\n\n    }\n\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To verify the results you can use traditional String variables, check SHAFT results in the Allure report (as shown in the image below), or\nyou can use other ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#"}),"verification")," techniques.\n",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"https://live.staticflickr.com/65535/51492098708_dd5f557495_z.jpg",alt:"report_2"}))," ",Object(r.b)("br",null))),Object(r.b)("h3",{id:"get-size-of-an-element"},"Get size of an element"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"String elementSize = driver.element().getSize(TargetElementLocator);\n")),Object(r.b)("p",null,"Retrieves element size from the target element and returns it as a string value."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An alternative to using ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#get-the-value-of-a-css-property"}),"getCSSProperty\u200b")," to get width and height values separately")),Object(r.b)("h3",{id:"get-elements-text"},"Get elements text"),Object(r.b)("p",null,"Retrieves text from the target text field and returns it as a string value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"String text = driver.element().getText(textBox);\n")),Object(r.b)("h3",{id:"get-state-of-an-element"},"Get state of an element"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check if an element is clickable")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class DynamicControlsDemo {\n    By textField=By.xpath("//form[@id=\'input-example\']/input");\n    By changeState=By.xpath("//form[@id=\'input-example\']/button");\n\n    @Test\n    public void alternate() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL(driver, "https://the-internet.herokuapp.com/dynamic_controls");\n        //--1-- check that initially the text box is not clickable\n        ReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n        //--2-- press the button to enable the text box\n        driver.element().click(changeState);\n        //--3-- check again whether the text box is clickable\n        ReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n        //--4-- attempt to click on the text box\n        driver.element().click(textField);\n        //--5-- finally verify the state of the check box\n        ReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n        driver.element().type( textField, "SHAFT is awesome !");\n    }\n}\n')),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://live.staticflickr.com/65535/51628756225_c75d0b22c3_z.jpg",alt:"clickable"}))," ",Object(r.b)("br",null)),Object(r.b)("p",null,"The text field is disabled by default,directly after clicking the enable button the isElementClickable method still returns false because the switching takes some time, ",Object(r.b)("b",null,"the click method waits for target element to be clickable")," and places the cursor inside the text field, by then the text field is naturally clicable as shown in the previous image captured from the Allure report."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check if an element is displayed")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"System.out.println(driver.element().isElementDisplayed(elementLocator));\n")),Object(r.b)("p",null,"returns a boolean indicating whether the element is displayed"))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),d=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||p[u]||r;return n?l.a.createElement(m,i(i({ref:t},b),{},{components:n})):l.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<r;b++)o[b]=n[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);