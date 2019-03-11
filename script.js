
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
    assistantDontKnow = {
        1 : 'I don\'t know what to answer',
        2 : 'Ask me later',
        3 : 'May be',
        4 : 'Я не знаю',
    }    
    let x = Object.keys(obj);  
    var y = 0;
    for (let i = 0; i < x.length; i++) {
        if (question == x[i]){
           console.log(obj[x[i]]);
           var y = 1;                                   
        }             
    }
    if(y == 0){
        console.log(assistantDontKnow[Math.floor(Math.random()*4+1)]);                        
    }
}

answer('Как тебя222 зовут?', russianAlice);
