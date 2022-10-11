

const pingApi = ()=>{
    fetch('/api/ping?' + new URLSearchParams({value: document.getElementById('range').value}))
    .then(res => res.json())
    .then(data=>{
        for(let i = 0; i < data.value; i++){
            document.getElementById('Boom').innerHTML += `<img src="https://media2.giphy.com/media/SLAe6QZljBbd6/giphy.gif?cid=ecf05e47pse6gkhjdiibiqbzxs06xoxyib8oagpynofno8bt&rid=giphy.gif&ct=g"
            alt="">`
        }
        alert(data.message);
        Boom.currentTime = 0
        Boom.play();
    })
}

const updateButton = ()=>{
    document.getElementById('button').innerHTML = document.getElementById('range').value + ' TIC-TAC';
}