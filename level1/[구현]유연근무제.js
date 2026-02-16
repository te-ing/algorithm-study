// https://school.programmers.co.kr/learn/courses/30/lessons/388351

function solution(schedules, timelogs, startday) {
    const n = timelogs[0].length;
    const prize = Array(timelogs.length).fill(true);
    const goals = schedules.map((v) => {
        if((v+10)%100 >= 60){
            return v+50
        } else {
            return v+10
        }
    })

    for(i=0; i<n; i++){
        if((startday+i)%7 === 6 || (startday+i) % 7 === 0){
            continue;
        }
        for(let j=0; j<prize.length; j++){
            if(goals[j] < timelogs[j][i]){
                prize[j] = false;
            }
        }
    }

    return prize.filter(v=>v).length;
}
