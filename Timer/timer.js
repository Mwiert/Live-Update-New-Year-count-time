const YeniYil ='1 Jan 2022';
const DaysEl= document.getElementById('days');
const HoursEl= document.getElementById('hours');
const MinutesEl= document.getElementById('mins');
const SecondsEl= document.getElementById('seconds');

function countdown(){
    const newYdate = new Date(YeniYil);
    const currDate = new Date();

    const Tsecs = (newYdate-currDate) / 1000;
    const days = Math.floor(Tsecs/ 3600 /24 );
    const hours =Math.floor((Tsecs/3600)%24) ;
    const mins =Math.floor((Tsecs/60)%60) ;
    const seconds =Math.floor(Tsecs%60);

    DaysEl.innerHTML = days;
    HoursEl.innerHTML = hours;
    MinutesEl.innerHTML = mins;
    SecondsEl.innerHTML = seconds;
}
countdown();