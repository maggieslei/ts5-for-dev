"use strict";
// narrow down classes: with instanceof
class CompanyFounder {
    giveLongSpeechAboutCompanyPast() {
        'It all started when...';
    }
}
class CompanyCEO {
    giveLongSpeechAboutHowTheTimesAreHard() {
        ' Things are hard but we can do it! ...';
    }
}
function giveLongSpeech(speechGiver) {
    if (speechGiver instanceof CompanyFounder) {
        speechGiver.giveLongSpeechAboutCompanyPast();
    }
    if (speechGiver instanceof CompanyCEO) {
        speechGiver.giveLongSpeechAboutHowTheTimesAreHard();
    }
}
giveLongSpeech(new CompanyFounder());
giveLongSpeech(new CompanyCEO());
