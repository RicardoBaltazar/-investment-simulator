# investiment-simulator    
  
![sdfsdfsdf](https://user-images.githubusercontent.com/56805229/83359951-0e41e000-a354-11ea-9087-7aff922af7a9.gif)  
  
## notes  

Projeto front-end de um simulador de investimento.  
Este projeto consulta uma api para realizar a fórmula matemática do juros composto.  
  
api utilizada  http://api.mathjs.org/v4/  
Utilizer a API fetch no javascriptpara acesar e manipular os dados da api de terceiros.  
Enviei os dados para a api via POST.  
```
    var body = { "expr": `${payment.value} * (((1 + 0.00517) ^ ${contributionTime.value} - 1) / 0.00517)` }
    
    fetch('http://api.mathjs.org/v4/', {
        method: 'POST',
        body: JSON.stringify(body)
    })
 ```  
   
#### Demo  
Veja a demo do projeto sem a api  
https://ricardobaltazar.github.io/-investment-simulator/
  
Utilizei para este projeto as tecnologias  
#### html, #### css, #### javascript, #### botstrap
 


