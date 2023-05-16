console.log("hello world")

const function1 = (a, b) => a * b;

const function2 = (i) => i % 2 === 0 ? console.log('chẵn') : console.log('lẽ')

const function2_2 = (i) => console.log(i % 2 ? "le" : "chan")

const function3 = (name) => console.log('Xin chao ' + name)

const function4 = (name, age) => console.log('Xin chao ' + name + ' ' + age + ' Tuoi')

const function5 = (n) => {
    switch (true){
        case n >= 0 && n < 5:
            console.log('khong dat')
            break
        case n >= 5 && n < 6.5:
            console.log('dat')
            break
        case n >= 6.5 && n < 8:
            console.log('kha')
            break
        case n >= 8 && n <= 10:
            console.log('Gioi')
            break
        default:
            console.log('Diem khong hop le')
    }
}

// vòng lặp

const function6 = (i) => {
    if(i <= 0){
        return console.log('khong hop le')
    }
    for(let x = 0; x <= i; x++){
        console.log(x)
    }
}

const function7 = (n = 100) => {
    let s = 0
    for(let i = 1; i <= n; i++){
        s += i
    }
    console.log(s)
}

const function8 = (n = 9) => {
    for(let i = 1; i <= 10; i++){
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

