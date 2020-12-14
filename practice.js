
function myFunction(event) {
    var x = event.which || event.keyCode;
    var id;
    // alert(x);
    if (x === 32) {
        id = 'space'
    }
    else if (x === 188) {
        id = 'less'
    }
    else if (x === 190) {
        id = 'more'
    }
    else if (x === 8) {
        id = 'delete'
    }
    else if (x === 189) {
        id = 'sub'
    }
    else if (x === 187) {
        id = 'plus'
    }
    else if (x === 192) {
        id = '`'
    }
    else if (x === 219) {
        id = "["
    }
    else if (x === 221) {
        id = "]"
    }
    else if (x == 186) {
        id = ";"
    }
    else if (x === 222) {
        id = "''"
    }
    else {
        var id = String.fromCharCode(x);
    }
    console.log(x);
    var button = document.getElementById(id);
    var button2 = document.getElementsByClassName(id);


    console.log(button2);

    if (button) {
        var oldColor1 = button.style.backgroundColor;
        button.style.backgroundColor = "";
        setTimeout(() => {
            button.style.backgroundColor = oldColor1;
        }, 500);
    }

    if (button2.length) {
        var oldColor2 = button2[button2.length - 1].style.backgroundColor;
        button2[button2.length - 1].style.backgroundColor = "";
        setTimeout(() => {
            button2[button2.length - 1].style.backgroundColor = oldColor2;
        }, 500);
    }
    var oldColor2 = button2[button2.length - 1].style.backgroundColor;
    var text_pattern = document.getElementById("text_pattern").innerHTML;

    //  alert(text_pattern)
    let array = ['s', 't', 'k', 'p', 'r', 'h', 'n', 'h', 's', '*', 'i', 'u', 'o', 'e', 'a', 'w', 'y', 'j', 'n', 'g', 't', 'k']
    let i = array.findIndex((char) => char === text_pattern)
    console.log('aaa', text_pattern, i)
    if (i > -1) {
        //  alert('helel')
        document.getElementById("text_pattern").innerHTML = array[++i];

    }
}
console.log(screen.width);