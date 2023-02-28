var today = new Date().toISOString().slice(0, 10);
var setDate1 = $('#input-start-day');
var setDate2 = $('#input-end-day');


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
        var date1 = $('#input-start-day').val();;
        var date2 = $('#input-end-day').val();;
        var oneDay = 24*60*60*1000;
        var getdate1 = new Date(date1).getTime() ;
        var getdate2 = new Date(date2).getTime() ;
        var renderDate1 = Math.round(getdate1 / oneDay);
        var renderDate2 = Math.round(getdate2 / oneDay);
        var confirmdate =  renderDate2 - renderDate1;
        $('.render-date').text(confirmdate + " ngày!");
        
    });
});