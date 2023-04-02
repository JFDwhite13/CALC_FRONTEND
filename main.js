
const sum = document.getElementById("suma");

sum.addEventListener('click',async (event)=>{
    event.preventDefault();
    console.log("suma");
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;

    const response = await fetch(
        'http://localhost:3000/suma',
        {
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body":JSON.stringify({Num1,Num2})
            
        }
    );

    const data = await response.json();
    const div_result = document.getElementById("result");
    div_result.innerHTML =data;
})

const rest = document.getElementById("resta");

rest.addEventListener('click',async (event)=>{
    event.preventDefault();
    console.log("resta");
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;

    const response = await fetch(
        'http://localhost:3000/resta',
        {
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body":JSON.stringify({Num1,Num2})
        }
    );
    const data = await response.json();
    const div_result = document.getElementById("result")
    div_result.innerHTML = data;
})

const mult = document.getElementById("multiplicacion");
mult.addEventListener('click',async (event)=>{
    event.preventDefault();
    console.log("multiplicacion");
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;

    const response = await fetch(
        'http://localhost:3000/multiplicacion',
        {
            "method": "POST",
            "headers":{
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({Num1,Num2})
        }
    );
    const data = await response.json();
    const div_result = document.getElementById("result");
    div_result.innerHTML = data;
})

const div = document.getElementById("division");

div.addEventListener('click',async (event)=>{
    event.preventDefault();
    console.log("division");
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;

    if(Num2==0){
        const div_result = document.getElementById("result");
        div_result.innerHTML = "Syntax error"
        
    }else{   
        const response = await fetch(
            'http://localhost:3000/div',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify({Num1,Num2})
            }
        );

        const data = await response.json();
        const div_result = document.getElementById("result");
        div_result.innerHTML = data;
    }

    
})