$('#header_dd_start').dropdown();
$('#header_dd_challenge').dropdown();
$('#header_dd_deal').dropdown();
$('#header_dd_event').dropdown();
$('#header_dd_account').dropdown();
$('#frequency_dd').dropdown();

$('#cb_preiseins').change(function() {
    $('#preiseins').attr('disabled',!this.checked)
});
$('#cb_preiszwei').change(function() {
    $('#preiszwei').attr('disabled',!this.checked)
});
$('#cb_preisdrei').change(function() {
    $('#preisdrei').attr('disabled',!this.checked)
});
$('#cb_preisalle').change(function() {
    $('#preisalle').attr('disabled',!this.checked)
});
