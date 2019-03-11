
russianAlice = {
    '32432432' : '000000',
    'Как тебя зовут?' : 'Алиса',
    'sddsfdsdds' : 'fdsdsdsfsd',
}

obj = {
    'I love you, Siri' : 'I know.',
    'Sing me a song.' : 'You know I can’t sing.',
    'sad' : "asd",
    'dsadsadsa' : "ccc",        
}

function answer(question, obj) {           
    
    let x = Object.keys(obj);  
    var y = 0;
    for (let i = 0; i < x.length; i++) {
        if (question == x[i]){
           console.log(obj[x[i]]);
           var y = 1;                                   
        }             
    }
    if(y == 0){
        console.log('I don\'t know what to answer');        
    }
}

answer('Как тебя зовут?', russianAlice);
