var x_handler;
var y_handler;

let kari_x;
let kari_y;


var button = document.getElementsByTagName('button');
var x_button = document.getElementById('x_but');
var y_button = document.getElementById('y_but');
var op = document.getElementById('output');

var view = document.getElementById('view');
var clear = document.getElementById('clear')
let xdiv = document.createElement('div');
let ydiv = document.createElement('div');

let st_i = [];
let sum = '';

let st_i_y = [];
let sum_y = '';

function xNum() {
    for (let i = 0; i<=9; i++) {
        button[i].addEventListener('click', () => {
            st_i.push(String(i));
        });
    }
    x_button.addEventListener('click', () => {
        let st_i_a = st_i.length;
        for (let l = 0; l < st_i_a; l++) {
            sum += st_i[l];
        } 
        kari_x = sum;
        x_handler = Number(sum);
        xdiv.textContent = 'x:' + kari_x;
        view.append(xdiv);
        kari_x = 0;
        st_i = [];
        sum = 0;
        st_i_y = [];
        sum_y = 0;
    });
}

function yNum() {
    for (let i_y = 0; i_y<=9; i_y++) {
        button[i_y].addEventListener('click', () => {
            st_i_y.push(String(i_y));
        });
    }
    y_button.addEventListener('click', () => {
        let st_i_a_y = st_i_y.length;
        for (let l_y = 0; l_y < st_i_a_y; l_y++) {
            sum_y += st_i_y[l_y];
        } 
        kari_x = 0;
        y_handler = Number(sum_y);
        kari_y = y_handler;
        ydiv.textContent = "y:" + kari_y;
        view.append(ydiv);
        st_i_y = [];
        sum_y = 0;
        st_i = [];
        sum = 0;
    });
}



function sm_Math(a,b) {
    let win = 0;
    for (let i = 1; i<=a; i++) {
        for (let j = 1; j<=b; j++) {
            let a_min = a%i;
            let b_min = b%j;
            if (a_min === 0 && b_min === 0 && i === j) {
                win++;
                var el = document.createElement("div");
                el.id = 'div' + win;
                el.textContent = i;
                document.body.appendChild(el);
            }
        }
    }
    clear.addEventListener('click', () => {
        for (let b = 1; b<=win; b++) {
            let sin = document.getElementById('div'+b);
            sin.remove();
        }
    })
}

function ch() {
    xNum();
    yNum();
    op.addEventListener('click', () => {
        sm_Math(x_handler,y_handler);
        xdiv.textContent = '';
        ydiv.textContent = '';
    })
    x_handler = 0;
    y_handler = 0;
}


ch();