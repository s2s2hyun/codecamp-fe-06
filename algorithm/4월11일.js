function solution(participant, completion) {
    const answer= {} ;
    
    // 1. 참가한 선수의 이름과 참가자 수를 정리해준거 
    
    for (let i = 0 ; i < participant.length; i++){
            answer[ participant[i] === undefined]
           ?  answer [ participant[i] ] = 1 
           : answer [participant[i]] ++;
        
    }
    // 2. 완주한 명단에서 제거를 해주는것이다. 
    for ( let i = 0 ; i < completion.length; i++ ){
       if( answer[completion[i]] ) {
            answer[ completion[i]] -- ;
            }
        }
    // 3. 완주하지 못한 선수의 이름을 리턴
    for(let key in answer ){
        if(answer[key],key ! ==0 )
                return key;
    }
    }
