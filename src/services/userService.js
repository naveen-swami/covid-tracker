// No symptoms, No travel history, No contact with covid positive patient - Risk = 5%
// Any one symptom, travel history or contact with covid positive patient is true - Risk = 50%
// Any two symptoms, travel history or contact with covid positive patient is true - Risk = 75%
// Greater than 2 symptoms, travel history or contact with covid positive patient is true - Risk = 95%


function riskFinder({symptoms, travelHistory, contactWithCovidPatient}) {
      if(symptoms.length === 0 && !travelHistory && !contactWithCovidPatient ) {
          return 5;
      } else if(symptoms.length === 1 && (travelHistory || contactWithCovidPatient)) {
        return 50;
      } else if(symptoms.length === 2 && (travelHistory || contactWithCovidPatient)) {
        return 75;
      } else{
        return 95;
      }          
}

// {"userId":"1","symptoms":["fever","cold","cough"],"travelHistory":true,"contactWithCovidPatient":true}


exports.riskFinder = riskFinder;