

footballPlayers = [
    {id: 1, name: 'Heymar jr', age: 31, status: 'online'},
    {id: 2, name: 'Messi', age: 35, status: 'ofline'},
    {id: 3, name: 'C.Ronaldo', age: 37, status: 'online'},
    {id: 4, name: 'Mudryk', age: 25, status: 'ofline'},
    {id: 5, name: 'Lewandowski', age: 30, status: 'online'},
    {id: 6, name: 'Kross', age: 35, status: 'ofline'},
    {id: 7, name: 'Benzema', age: 34, status: 'online'},
    {id: 8, name: 'Mbape', age: 26, status: 'online'},
    {id: 9, name: 'Militao', age: 25, status: 'ofline'},
    {id: 10, name: 'Vinicius jr', age: 23, status: 'ofline'},
];

let fnPlayers = function (players) {
    for (const player of players) {
        document.write(`<div class="player-block"> id: ${player.id} -- name: ${player.name} -- age: ${player.age} </div>`)

    }

};

fnPlayers(footballPlayers);