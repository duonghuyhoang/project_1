var today = new Date();

function checkStartDay(today) {
    var checkBox1 = document.getElementById("checkbox-start-day");
    var setDate1 = document.getElementById('input-start-day');
       
        if(checkBox1.checked == true){
            setDate1.valueAsDate = today;
            setDate1.disabled = true;
        }

    }
    
function checkEndDay(today) {
    var checkBox2 = document.getElementById("checkbox-end-day");
    var setDate2 = document.getElementById('input-end-day');
       
        if(checkBox2.checked == true){
            setDate2.valueAsDate = today;
            setDate2.disabled = true;
        }

    }

function dateCalculation(){
   var date1 = document.getElementById('input-start-day').value;
   var date2 = document.getElementById('input-end-day').value;
   var oneDay = 24*60*60*1000
   var getdate1 = new Date(date1).getTime() 
   var getdate2 = new Date(date2).getTime() 
   let renderDate1 = Math.round(getdate1 / oneDay);
   let renderDate2 = Math.round(getdate2 / oneDay);
   const confirmdate =  renderDate2 - renderDate1;
   document.querySelector(".render-date").innerHTML = confirmdate + " ngày!";
   
}




