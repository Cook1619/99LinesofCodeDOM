

let button = document.querySelector('button');

button.addEventListener("click", function () {
    let friends = ['Mike', 'Cody', 'Aaron', 'Tom', 'Erik']
    for (let i = 0; i < friends.length; i++) {
        let div = document.createElement('div');
        div.className = 'friends';
        let h3 = document.createElement('h3');
        h3Text = document.createTextNode(`${friends[i]}`)
        h3.appendChild(h3Text);
        div.appendChild(h3);
        document.body.appendChild(div);
        for (let j = 99; j > 0; j--) {
            if (j === 1) {
                
                let divText = document.createTextNode(`${friends[i]}`
                    + `: ${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, ${j} line of code in the file. `);
                div.appendChild(divText);
                document.body.appendChild(div);

            } else  {

                divElse = document.createTextNode(`${friends[i]}`
                    + `: ${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j} lines of code in the file. `)
                div.appendChild(divElse);
                document.body.appendChild(div)
            }
            
        }

    }
})


// let divText = '';
// if (j === 1) {
//     divText = `${friends[i]}`
//         + `: ${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, ${j} line of code in the file. `;
// } else if (j !== 1) {
//     divText = `${friends[i]}`
//         + `: ${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j} lines of code in the file. \n`;
// }

// div.appendChild(document.createTextNode(divText));