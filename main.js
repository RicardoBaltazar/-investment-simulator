var n = document.querySelector(`#name`)
var payment = document.querySelector(`#payment`)
var contributionTime = document.querySelector(`#options`)
var form = document.querySelector(`form`)

document.querySelector('.result').style.display = 'none'


form.addEventListener('submit',function(e){
    e.preventDefault()
    
    document.querySelector('.result').style.display = 'block'
    document.querySelector('.form-group').style.display = 'none'
    
    var body = { "expr": `${payment.value} * (((1 + 0.00517) ^ ${contributionTime.value} - 1) / 0.00517)` }
    
    fetch('http://api.mathjs.org/v4/', {
        method: 'POST',
        body: JSON.stringify(body)
    })
    
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        var result = data.result
        result = parseFloat(result).toFixed()        
        console.log(n.value)
        console.log(payment.value)
        console.log(contributionTime.value)
        console.log(result)
        
        document.querySelector('#name2').innerHTML = n.value
        document.querySelector('#value').innerHTML = payment.value
        document.querySelector('#res').innerHTML = result
        document.querySelector('#temp').innerHTML = contributionTime.value
    }) 
})

document.querySelector('#btn2').addEventListener('click', function(){
    document.querySelector('.result').style.display = 'none'
    document.querySelector('.form-group').style.display = 'block'
    n.value = ''
    payment.value = ''
    n.focus()
})














  
