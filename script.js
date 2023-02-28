const today = new Date().toISOString().slice(0, 10);
let setDate1 = $('#input-start-day');
let setDate2 = $('#input-end-day');


$(document).ready(function () {
    
    $('#checkbox-start-day').change(function (e) { 
        e.preventDefault();
        if ($(this).is(':checked') == true) {
            $('#input-start-day' ).prop("disabled", true);
                setDate1.val(today);
        }
        else {
            $('#input-start-day' ).prop("disabled", false)}
    });
    $('#checkbox-end-day').change(function (e) { 
        e.preventDefault();
        if ($(this).is(':checked') == true) {
            $( '#input-end-day').prop("disabled", true);
              setDate2.val(today);
        }
        else {
            $('#input-end-day' ).prop("disabled", false)}
    });
    $('.confirm-date').click(function (e) { 
        e.preventDefault();
        let date1 = $('#input-start-day').val();;
        let date2 = $('#input-end-day').val();;
        let oneDay = 24*60*60*1000;
        let getdate1 = new Date(date1).getTime() ;
        let getdate2 = new Date(date2).getTime() ;
        let renderDate1 = Math.round(getdate1 / oneDay);
        let renderDate2 = Math.round(getdate2 / oneDay);
        let confirmdate =  renderDate2 - renderDate1;
        $('.render-date').text(confirmdate + " ngày!");
        
    });
});