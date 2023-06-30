document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorteio').addEventListener('submit', function(evento){
        evento.preventDefault();

        let numberMax = document.getElementById('numb-max').value;
        numberMax = parseInt(numberMax);

        let numberRandom = Math.random() * numberMax;
        numberRandom = Math.floor(numberRandom + 1);

        document.getElementById('resultado-valor').innerText = numberRandom;
        document.querySelector('.resultado').style.display = 'block'
    })
})