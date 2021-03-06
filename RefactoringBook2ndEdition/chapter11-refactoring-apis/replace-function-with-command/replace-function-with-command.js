function score(candidate, medicalExam, scoringGuide) {
    return new Score(candidate, medicalExam, scoringGuide).execute( )
}

class Score{
    constructor(candidate, medicalExam, scoringGuide){
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this.scoringGuide = scoringGuide;
    }
    execute(){
        let result = 0;
        let healthLevel = 0;
        let highMedicalRiskFlag = false;
        if (this._medicalExam.isSmoker) {
            healthLevel += 10;
            highMedicalRiskFlag = true;
        }
        let certificationGrade = "regular";
        if (this.scoringGuide.stateWithLowCertification(this._candidate.originState)) {
            certificationGrade = "low";
            result -= 5;
        }
// lots more code like this
        result -= Math.max(healthLevel - 5, 0);
        return result;
    }
}