
russianAlice = {
    'Как дела?' : 'норм',
    'Как тебя зовут?' : 'Алиса',
    'Как погода' : 'солнце',

    assistantDontKnow : {
        1 : 'возможно',
        2 : 'хз',
        3 : 'Спроси позже',
        4 : 'Я не знаю',
    }
}

englishSiri = {
    'I love you, Siri' : 'I know.',
    'Sing me a song.' : 'You know I can’t sing.',
    'sad' : "asd",
    'dsadsadsa' : "ccc", 

    assistantDontKnow : {
        1 : 'I don\'t know what to answer',
        2 : 'Ask me later',
        3 : 'May be',
        4 : 'I dont know',
    }       
}

var y = 0;
function answer(question, obj) {     
        
    let x = Object.keys(obj);    
    
    if(y == 2){
        console.log(obj.assistantDontKnow[Math.floor(Math.random()*4+1)]);                        
    } else {

    for (let i = 0; i < x.length; i++) {
        if (question == x[i]){
           console.log(obj[x[i]]);
           y = 1;                                   
        }             
    } }

    if(y == 0){
        console.log(obj.assistantDontKnow[Math.floor(Math.random()*4+1)]);                        
    }
    y = 2;
}

answer('Как дела?', russianAlice);
answer('Как дела?', russianAlice);
