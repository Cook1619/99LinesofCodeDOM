

let button = document.querySelector('button');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');

div1.className = 'friend';
div2.className = 'friend';
div3.className = 'friend';
div4.className = 'friend';
div5.className = 'friend';





button.addEventListener("click", function () {
    var friend1 = 'Mike'
    var friend2 = 'Cody'
    var friend3 = 'Ahmed'
    var friend4 = 'Tom'
    var friend5 = 'Erik'
    // for (var i = 0; i < 1; i++) {
        for (var j = 99; j > 0; j--) {
            if (j === 1) {
                let h3 = document.createElement('h3');
                let h3Text = document.createTextNode(friend1);
                h3.appendChild(h3Text);
                document.body.appendChild(h3);
                let div1Text = document.createTextNode(`${friend1}`
                    + `: ${j} line of code in the file, ${j} line of code; ${friend1} strikes one out, clears it all out, ${j} line of code in the file. `)
                div1.appendChild(div1Text);
                document.body.appendChild(div1);
            } else if (j !== 1) {
                let div1ElseText = document.createTextNode(`${friend1}`
                    + `: ${j} lines of code in the file, ${j} lines of code; ${friend1} strikes one out, clears it all out, ${j} lines of code in the file `)
                div1.appendChild(div1ElseText);
                document.body.appendChild(div1);
            }
        }

    // }
    // for (var i = 1; i < 2; i++) {
        for (var j = 99; j > 0; j--) {
            if (j === 1) {
                let h3 = document.createElement('h3');
                let h3Text = document.createTextNode(friend2);
                h3.appendChild(h3Text);
                document.body.appendChild(h3);
                let div2Text = document.createTextNode(`${friend2}`
                    + `: ${j} line of code in the file, ${j} line of code; ${friend2} strikes one out, clears it all out, ${j} line of code in the file. `)
                div2.appendChild(div2Text);
                document.body.appendChild(div1);
            } else if (j !== 1) {
                let div2ElseText = document.createTextNode(`${friend2}`
                    + `: ${j} lines of code in the file, ${j} lines of code; ${friend2} strikes one out, clears it all out, ${j} lines of code in the file. `)
                div2.appendChild(div2ElseText);
                document.body.appendChild(div2);
               
            }
        }
    // }
})
// console.log(`${friends[i]}`
//     + `: ${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, ${j} line of code in the file`)

// console.log(`${friends[i]}`
//     + `: ${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j} lines of code in the file`);