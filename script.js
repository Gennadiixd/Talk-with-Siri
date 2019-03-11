

function answer(question) {

    obj = {
        'I love you, Siri' : 'I know.',
        'Sing me a song.' : 'You know I can’t sing.',
        'sad' : "asd",
        'dsadsadsa' : "ccc",        
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
        console.log('I don\'t know what to answer');        
    }

}

answer('dsadsssssadsa');
