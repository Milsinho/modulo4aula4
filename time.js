let time = [
    {
        nome:"Orlando",
        camisa: 10,

    },
    {
        nome:"Marcelo",
        camisa: 9,
    },{
        nome:"Neymar",
        camisa: 11,
    },{
        nome:"Edmilson",
        camisa:20,
    },{
        nome:"Gabriel",
        camisa: 30,
    },{
        nome:"Cristovan",
        camisa: 1,
    },
    {
        nome:"Vitor",
        camisa: 5,
    },{
        nome:"Hugo",
        camisa: 15,
    },{
        nome:"Pedro",
        camisa: 18,
    },{
        nome:"Mario",
        camisa: 03,
    },{
        nome:"Alex",
        camisa: 8,
    },{
        nome:"Andre",
        camisa: 7,
    },
]
    console.log(time.length)
    console.table(time)

    //for (let i = 0; < time. length: i++) {
        // console. log(i, time[i]);
    //}

    for (const i in time){
        console.log(i,time[i]);

    }
    for (const jogador of time) {
        console.log(jogador);        
    }

    console.table(time);