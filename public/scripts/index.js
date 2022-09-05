// define class Question
class question {
    constructor(question_name){
        this.name = question_name;
        this.picked = 0;
        this.relevance = 0;
        this.final_score = 0;
        this.posneg = 1;
    }

    setpicked(){
        if (this.picked == 0) {
            this.picked = 1;
        } else {
            this.picked = 0;
        }
        return;
    }
    setname(name_question){
        this.name = name_question;
        return;
    }
    setrelevance(){   
    }
    setposneg(){
    }
}

function initiate_poll(){
    const Questionnaire = [];
    Questionnaire.id = "Questions";
        for (let index = 0; index < 12; index++) {
            const a_question = new question("ABH_"+[index+1]);
            Questionnaire.push(a_question);  
        }
        localStorage.setItem('Questionnaire', JSON.stringify(Questionnaire) );
        return ; 
}

document.getElementById("start_poll_basic_needs").addEventListener("click", initiate_poll);
  


//   document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('start_poll_basic_needs').addEventListener('click', initiate_poll);
//   });