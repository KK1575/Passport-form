function passport(){
if(document.getElementById('apply1').checked){
	document.getElementById('reason1').disabled = false;
	document.getElementById('reason2').disabled = false;
	document.getElementById('reason3').disabled = false;
	document.getElementById('reason4').disabled = false;
	document.getElementById('reason5').disabled = false;
	document.getElementById('reason6').disabled = false;
	
	document.getElementById('change1').disabled = true;
	document.getElementById('change2').disabled = true;
	document.getElementById('change3').disabled = true;
	document.getElementById('change4').disabled = true;
	document.getElementById('change5').disabled = true;
	document.getElementById('change6').disabled = true;
	document.getElementById('change7').disabled = true;
	document.getElementById('change8').disabled = true;
	document.getElementById('change9').disabled = true;
	
	
	document.getElementById('o2').disabled = true;
	
	
	
	document.getElementById('pi').disabled = false;
	document.getElementById('di').disabled = false;
	document.getElementById('de').disabled = false;
	document.getElementById('place').disabled = false;
	
}
else
{
    document.getElementById('reason1').disabled = true;
	document.getElementById('reason2').disabled = true;
	document.getElementById('reason3').disabled = true;
	document.getElementById('reason4').disabled = true;
	document.getElementById('reason5').disabled = true;
	document.getElementById('reason6').disabled = true;
	
	document.getElementById('change1').disabled = true;
	document.getElementById('change2').disabled = true;
	document.getElementById('change3').disabled = true;
	document.getElementById('change4').disabled = true;
	document.getElementById('change5').disabled = true;
	document.getElementById('change6').disabled = true;
	document.getElementById('change7').disabled = true;
	document.getElementById('change8').disabled = true;
	document.getElementById('change9').disabled = true;
	
	
	document.getElementById('o2').disabled = true;
	
	document.getElementById('pi').disabled = true;
	document.getElementById('di').disabled = true;
	document.getElementById('de').disabled = true;
	document.getElementById('place').disabled = true;
}
}
 
function check(){
if(document.getElementById('reason5').checked)
{
    document.getElementById('change1').disabled = false;
	document.getElementById('change2').disabled = false;
	document.getElementById('change3').disabled = false;
	document.getElementById('change4').disabled = false;
	document.getElementById('change5').disabled = false;
	document.getElementById('change6').disabled = false;
	document.getElementById('change7').disabled = false;
	document.getElementById('change8').disabled = false;
	document.getElementById('change9').disabled = false;
	
}
else
{
    document.getElementById('change1').disabled = true;
	document.getElementById('change2').disabled = true;
	document.getElementById('change3').disabled = true;
	document.getElementById('change4').disabled = true;
	document.getElementById('change5').disabled = true;
	document.getElementById('change6').disabled = true;
	document.getElementById('change7').disabled = true;
	document.getElementById('change8').disabled = true;
	document.getElementById('change9').disabled = true;
	
}
}
function fun()
{
if(document.getElementById('change9').checked)
{
 document.getElementById('o2').disabled = false;
}
else
{
document.getElementById('o2').disabled = true;
}
}
function same()
{
if(document.getElementById('p2').checked)
{
	document.getElementById('f1').disabled = false;
	document.getElementById('add').disabled = false;
	document.getElementById('tn').disabled = false;
	document.getElementById('m1').disabled = false;
	document.getElementById('e1').disabled = false;
}
else
{
	document.getElementById('f1').disabled = true;
	document.getElementById('add').disabled = true;
	document.getElementById('tn').disabled = true;
	document.getElementById('m1').disabled = true;
	document.getElementById('e1').disabled = true;
}
}
function apple()
{
if(document.getElementById('ever').checked)
{
document.getElementById('ww').disabled = false;
}
else
{
document.getElementById('ww').disabled = true;
}
}

function validDate() {
            var today = new Date().toISOString().split('T')[0];
            document.getElementsByName("dateone")[0].setAttribute('max', today);
        }
function validDate1() {
            var today = new Date().toISOString().split('T')[0];
            document.getElementsByName("dateone1")[0].setAttribute('max', today);
        }
function cc() {
            var today = new Date().toISOString().split('T')[0];
            document.getElementsByName("d")[0].setAttribute('max', today);
        }		

/*function bdate(){
window z;
var today = new Date();
var year = today.getUTCFullYear();
var month= today.getMonth();
var day= toady.getDate();
month++;
if(month<10){
month= "0" + month;
}
if(day<10){
day= "0" + day;
}
var cdate=year + "" + month + "" + day;
let x=document.getElementById('date1').value;
let y=x.replace(/\D/g,"");
cdate=cdate-31;
if(y>cdate)
{
z=true;
}
else
{
z=false;
}*/
function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("date1").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        // lblError.innerHTML = "Eligibility 1 years ONLY."
        lblError.innerHTML = "<a href=#date1>2.4 Eligibility 1 month ONLY.</a><br>";
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 0.1) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 0.1) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        // lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        lblError.innerHTML = "<a href=#date1>2.4 Enter date in DD/MM/YYYY format ONLY.</a><br>";
        return false;
    }
}
function validateform(){
var k=0;
// file no.
var file=document.getElementById("file").value;
if(file==""){
document.getElementById("error").innerHTML="<a href='#file'>Please fill file number</a><br>";
k=1;
}
else if(file.length<12 || file.length>12)
{
document.getElementById("error").innerHTML="<a href='#file'>File Number must be 12 Character.</a><br>";
k=1;
}
else if(!file.match(/^[A-Z]{5}[0-9]{5}[22]{2}$/))
{
document.getElementById("error").innerHTML="<a href='#file'>Please fill file number in Capital And Digit Formate.</a><br>";
k=1;
}
else{
document.getElementById("error").innerHTML="";
}
// 1.1 Applying For
var getSelectedValue = document.querySelector(   
                'input[name="apply"]:checked');   
                
            if(getSelectedValue == null) {   
                
                document.getElementById("error1").innerHTML   
                    ="<a href='#apply'>1.1 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error1").innerHTML="";
}
//1.2 If re-issue, specify reason(s)
if(document.getElementById('apply1').checked)
{
var getSelectedValue1 = document.querySelector(   
                'input[name="reason"]:checked');   
                
            if(getSelectedValue1 == null) {   
                
                document.getElementById("error2").innerHTML   
                    ="<a href='#reason1'>1.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error2").innerHTML="";
}
}
else
{
document.getElementById("error2").innerHTML="";
}
//1.3 If change in existing personal particulars, specify reason(s)
if(document.getElementById('reason5').checked)
{
var getSelectedValue2 = document.querySelector(   
                'input[name="change"]:checked');   
                
            if(getSelectedValue2 == null) {   
                
                document.getElementById("error3").innerHTML   
                    ="<a href='#change1'>1.3 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error3").innerHTML="";
}
}
else
{
document.getElementById("error3").innerHTML="";
}
//Other 
if(document.getElementById('change9').checked)
{
var o2=document.getElementById("o2").value;
if(o2==""){
document.getElementById("error81").innerHTML="<a href='#o2'>Please fill Other Field. </a><br>";
k=1;
}
else if(!o2.match(/^[A-Z]*$/))
{
document.getElementById("error81").innerHTML="<a href='#o2'>Please fill Other Field in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error81").innerHTML="";
}
}else
{
document.getElementById("error81").innerHTML="";
}

//1.4 Type of Application
var getSelectedValue3 = document.querySelector(   
                'input[name="type"]:checked');   
                
            if(getSelectedValue3 == null) {   
                
                document.getElementById("error4").innerHTML   
                    ="<a href='#type'>1.4 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error4").innerHTML="";
}
//1.5 Type of Passport Booklet
var getSelectedValue4 = document.querySelector(   
                'input[name="book"]:checked');   
                
            if(getSelectedValue4 == null) {   
                
                document.getElementById("error5").innerHTML   
                    ="<a href='#book'>1.5 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error5").innerHTML="";
}
//1.6 Validity Required
var getSelectedValue5 = document.querySelector(   
                'input[name="valid"]:checked');   
                
            if(getSelectedValue5 == null) {   
                
                document.getElementById("error6").innerHTML   
                    ="<a href='#valid'>1.6 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error6").innerHTML="";
}
//photo
var text=document.getElementById("text").value;
if(text==""){
document.getElementById("error7").innerHTML="<a href='#text'>Please select a photo</a><br>";
k=1;
}

else{
document.getElementById("error7").innerHTML="";
}
//Sign.
var text1=document.getElementById("text1").value;
if(text1==""){
document.getElementById("error8").innerHTML="<a href='#text1'>Please select a Sign</a><br>";
k=1;
}
else{
document.getElementById("error8").innerHTML="";
}
//2.1 Applicant's Given Name
var app=document.getElementById("app").value;
if(app==""){
document.getElementById("error9").innerHTML="<a href='#app'>2.1 Please fill Applicant Name</a><br>";
k=1;
}
else if(!app.match(/^[A-Z]*$/))
{
document.getElementById("error9").innerHTML="<a href='#app'>2.1 Please fill Applicant Name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error9").innerHTML="";
}
//2.1.1 Surname
var sur=document.getElementById("sur").value;
if(sur==""){
document.getElementById("error10").innerHTML="<a href='#sur'>2.1.1 Please fill Surname. </a><br>";
k=1;
}
else if(!sur.match(/^[A-Z]*$/))
{
document.getElementById("error10").innerHTML="<a href='#sur'>2.1.1 Please fill Surname in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error10").innerHTML="";
}
//2.2 Are you known by any other names (aliases)?
var getSelectedValue6 = document.querySelector(   
                'input[name="7"]:checked');   
                
            if(getSelectedValue6 == null) {   
                
                document.getElementById("error11").innerHTML   
                    ="<a href='#7'>2.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error11").innerHTML="";
}
//2.3 Have you ever changed your name?
var getSelectedValue7 = document.querySelector(   
                'input[name="8"]:checked');   
                
            if(getSelectedValue7 == null) {   
                
                document.getElementById("error12").innerHTML   
                    ="<a href='#8'>2.3 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error12").innerHTML="";
}
//2.4 Date of Birth (DD-MM-YYYY) 
var date=document.getElementById("date1").value;
if(date==""){
document.getElementById("error13").innerHTML="<a href='#date1'>2.4 Please fill Date in Form of DD-MM-YYYY . </a><br>";
k=1;
}
/*else if(z)
{
document.getElementById("error13").innerHTML="<a href='#date1'> bddddd.</a><br>"
k=1;
}*/

else{
document.getElementById("error13").innerHTML="";
}
//2.5 Place of Birth (Village or Town or City)
var city=document.getElementById("9").value;
if(city==""){
document.getElementById("error14").innerHTML="<a href='#9'>2.5 Please fill City name . </a><br>";
k=1;
}
else if(!city.match(/^[A-Z]*$/))
{
document.getElementById("error14").innerHTML="<a href='#9'>2.5 Please fill City name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error14").innerHTML="";
}
//2.5.1 District
var dis=document.getElementById("10").value;
if(dis==""){
document.getElementById("error15").innerHTML="<a href='#10'>2.5.1 Please fill District name . </a><br>";
k=1;
}
else if(!dis.match(/^[A-Z]*$/))
{
document.getElementById("error15").innerHTML="<a href='#10'>2.5.1 Please fill District name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error15").innerHTML="";
}
//2.5.2 State
var state=document.getElementById("11").value;
if(state==""){
document.getElementById("error16").innerHTML="<a href='#11'>2.5.2 Please fill State name . </a><br>";
k=1;
}
else if(state==dis)
{
document.getElementById("error16").innerHTML="<a href='#11'>2.5.2 Invalid . </a><br>";
}
else if(!state.match(/^[A-Z]*$/))
{
document.getElementById("error16").innerHTML="<a href='#11'>2.5.2 Please fill State name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error16").innerHTML="";
}
//2.5.3 Country
var cy=document.getElementById("12").value;
if(cy==""){
document.getElementById("error78").innerHTML="<a href='#12'>2.5.3 Please fill Country name . </a><br>";
k=1;
}
else if(cy==state || cy==dis)
{
document.getElementById("error78").innerHTML="<a href='#12'>2.5.3 Invalid . </a><br>";
}
else if(!cy.match(/^[A-Z]*$/))
{
document.getElementById("error78").innerHTML="<a href='#12'>2.5.3 Please fill Country name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error78").innerHTML="";
}
//2.6 Gender
var getSelectedValue8 = document.querySelector(   
                'input[name="gender"]:checked');   
                
            if(getSelectedValue8 == null) {   
                
                document.getElementById("error17").innerHTML   
                    ="<a href='#gender'>2.6 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error17").innerHTML="";
}
//2.7 Marital Status
var getSelectedValue9 = document.querySelector(   
                'input[name="status"]:checked');   
                
            if(getSelectedValue9 == null) {   
                
                document.getElementById("error18").innerHTML   
                    ="<a href='#status'>2.7 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error18").innerHTML="";
}
//2.8 Citizenship of India byy
var getSelectedValue10 = document.querySelector(   
                'input[name="citi"]:checked');   
                
            if(getSelectedValue10 == null) {   
                
                document.getElementById("error19").innerHTML   
                    ="<a href='#citi'>2.8 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error19").innerHTML="";
}
// Pan Card
var pan=document.getElementById("pan").value;
var pan1=/^[A-Z]{5}[0-9]{4}[A-Z]$/;
if(pan==""){
document.getElementById("error71").innerHTML="<a href='#pan'>2.9 Please fill Pan no.. </a><br>";
k=1;
}
else if(pan.length<10 || pan.length>10)
{
document.getElementById("error71").innerHTML="<a href='#pan'>2.9 Pan Number must be in 10 Character.</a><br>";
k=1;
}
else if(!pan.match(pan1))
{
document.getElementById("error71").innerHTML="<a href='#pan'>2.9 Invalid Pan Number.</a><br>";
k=1;
}
else{
document.getElementById("error71").innerHTML="";
}
// Voter ID
var vote=document.getElementById("vote").value;
var v2=/^[A-Z]{3}[0-9]{7}$/;
if(vote==""){
document.getElementById("error72").innerHTML="<a href='#vote'>2.10 Please fill Voter Id Number. </a><br>";
k=1;
}
else if(vote.length<10 || vote.length>10)
{
document.getElementById("error72").innerHTML="<a href='#vote'>2.10 Voter Id Number must be in 10 Character.</a><br>";
k=1;
}
else if(!vote.match(v2))
{
document.getElementById("error72").innerHTML="<a href='#vote'>2.10 Invalid Voter Id Number.</a><br>";
k=1;
}
else{
document.getElementById("error72").innerHTML="";
}
//2.11 Employment Type
var getSelectedValue11 = document.querySelector(   
                'input[name="emp"]:checked');   
                
            if(getSelectedValue11 == null) {   
                
                document.getElementById("error20").innerHTML   
                    ="<a href='#emp'>2.11 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error20").innerHTML="";
}
// 2.12
var eg=document.getElementById("eg").value;
if(eg==""){
document.getElementById("error74").innerHTML="<a href='#eg'>2.12 Please fill organization name . </a><br>";
k=1;
}
else if(eg.length>60)
{
document.getElementById("error74").innerHTML="<a href='#eg'>2.12 Max 60 Character limit.</a><br>";
k=1;
}
else if(!eg.match(/^[A-Z\s]*$/))
{
document.getElementById("error74").innerHTML="<a href='#eg'>2.12 Please fill organization name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error74").innerHTML="";
}
//2.13 Is either of your parent (in case of minor)/ spouse, a government servant?
var getSelectedValue12 = document.querySelector(   
                'input[name="gp"]:checked');   
                
            if(getSelectedValue12 == null) {   
                
                document.getElementById("error21").innerHTML   
                    ="<a href='#gp'>2.13 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error21").innerHTML="";
}
//2.14 Educational Qualification
var getSelectedValue13 = document.querySelector(   
                'input[name="eq"]:checked');   
                
            if(getSelectedValue13 == null) {   
                
                document.getElementById("error22").innerHTML   
                    ="<a href='#eq'>2.14 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error22").innerHTML="";
}
//2.15 Are you eligible for Non-ECR category?
var getSelectedValue14 = document.querySelector(   
                'input[name="en"]:checked');   
                
            if(getSelectedValue14 == null) {   
                
                document.getElementById("error23").innerHTML   
                    ="<a href='#en'>2.15 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error23").innerHTML="";
}
//2.16 Visible Distinguishing Mark 
var ds=document.getElementById("ds").value;
if(ds==""){
document.getElementById("error73").innerHTML="<a href='#ds'>2.16 Please fill Visible Distinguishing Mark. </a><br>";
k=1;
}
 else if(ds!="NOSE" && ds!="CHIN" && ds!="FACE" && ds!="HAND")
{
document.getElementById("error73").innerHTML="<a href='#ds'>2.16 Invalid Visible Distinguishing Mark. </a><br>";
k=1;
}
 
else{
document.getElementById("error73").innerHTML="";
}
//2.17 Aadhaar Number 
var as=document.getElementById("as").value;
if(as==""){
document.getElementById("error24").innerHTML="<a href='#as'>2.17 Please fill Aadhar Number . </a><br>";
k=1;
}
else if(isNaN(as))
{
document.getElementById("error24").innerHTML="<a href='#as'>2.17 Invalid Aadhar No.</a><br>";
k=1;
}
else if(as.length<12 || as.length>12)
{
document.getElementById("error24").innerHTML="<a href='#as'>2.17 Aadhar No must be in 12 digit.</a><br>";
k=1;
}
else{
document.getElementById("error24").innerHTML="";
}
//3.1 Father's Given Name
var fn=document.getElementById("fn").value;
if(fn==""){
document.getElementById("error25").innerHTML="<a href='#fn'>3.1 Please fill Father's Name . </a><br>";
k=1;
}
else if(fn.length>500)
{
document.getElementById("error25").innerHTML="<a href='#fn'>3.1 Fathers Name character limit 500.</a><br>";
k=1;
}
else if(!fn.match(/^[A-Z]*$/))
{
document.getElementById("error25").innerHTML="<a href='#fn'>3.1 Please fill Father's name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error25").innerHTML="";
}
//3.1.1 Surname
var s=document.getElementById("s").value;
if(s==""){
document.getElementById("error26").innerHTML="<a href='#s'>3.1.1 Please fill Surname . </a><br>";
k=1;
}
else if(s.length>500)
{
document.getElementById("error26").innerHTML="<a href='#s'>3.1.1 Surname character limit 500.</a><br>";
k=1;
}
else if(!s.match(/^[A-Z]*$/))
{
document.getElementById("error26").innerHTML="<a href='#s'>3.1.1 Please fill Surname in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error26").innerHTML="";
}
//3.2 Mother's Given Name 
var mn=document.getElementById("mn").value;
if(mn==""){
document.getElementById("error27").innerHTML="<a href='#mn'>3.2 Please fill Mother's Name . </a><br>";
k=1;
}
else if(mn.length>500)
{
document.getElementById("error27").innerHTML="<a href='#mn'>3.2 Mothers Name character limit 500.</a><br>";
k=1;
}
else if(!mn.match(/^[A-Z]*$/))
{
document.getElementById("error27").innerHTML="<a href='#mn'>3.2 Please fill Mother's name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error27").innerHTML="";
}
// 3.2.1 Surname
var s2=document.getElementById("s2").value;
if(s2==""){
document.getElementById("error28").innerHTML="<a href='#s2'>3.2.1 Please fill Surname. </a><br>";
k=1;
}
else if(s2.length>500)
{
document.getElementById("error28").innerHTML="<a href='#s2'>3.2.1 Surname character limit 500.</a><br>";
k=1;
}
else if(!s2.match(/^[A-Z]*$/))
{
document.getElementById("error28").innerHTML="<a href='#s2'>3.2.1 Please fill Surname in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error28").innerHTML="";
}
//FAther Passport
var fp=document.getElementById("fp").value;
var fp2=/^[A-Z0-9]*$/;
if(fp==""){
document.getElementById("error76").innerHTML="<a href='#fp'>3.5.1 Please fill fathers Passport Number. </a><br>";
k=1;
}
else if(fp.length<8 || fp.length>8)
{
document.getElementById("error76").innerHTML="<a href='#fp'>3.5.1  fathers Passport Number must be in 8 Character.</a><br>";
k=1;
}
else if(!fp.match(fp2))
{
document.getElementById("error76").innerHTML="<a href='#fp'>3.5.1 Invalid fathers Passport Number.</a><br>";
k=1;
}
else{
document.getElementById("error76").innerHTML="";
}
//Father Nationality
var fi=document.getElementById("fi").value;
if(fi==""){
document.getElementById("error79").innerHTML="<a href='#fi'>3.5.2 Please fill Father/ Legal Guardian's Nationality,</a><br>";
k=1;
}
else if(!fi.match(/^[A-Z]*$/))
{
document.getElementById("error79").innerHTML="<a href='#fi'>3.5.2 Please fill Father/ Legal Guardian's Nationality, in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error79").innerHTML="";
}
// MOther Passport
var mp=document.getElementById("mp").value;
var mp2=/^[A-Z0-9]*$/;
if(mp==""){
document.getElementById("error77").innerHTML="<a href='#mp'>3.5.3 Please fill mothers Passport Number. </a><br>";
k=1;
}
else if(mp.length<8 || mp.length>8)
{
document.getElementById("error77").innerHTML="<a href='#mp'>3.5.3  mothers Passport Number must be in 8 Character.</a><br>";
k=1;
}
else if(!mp.match(mp2))
{
document.getElementById("error77").innerHTML="<a href='#mp'>3.5.3 Invalid Passport/ Identity Certificate Number.</a><br>";
k=1;
}
else{
document.getElementById("error77").innerHTML="";
}
//Mother Nationality
var mi=document.getElementById("mi").value;
if(mi==""){
document.getElementById("error80").innerHTML="<a href='#mi'>3.5.4 Please fill Mother/ Legal Guardian's Nationality,</a><br>";
k=1;
}
else if(!app.match(/^[A-Z]*$/))
{
document.getElementById("error80").innerHTML="<a href='#mi'>3.5.4 Please fill Father/ Legal Guardian's Nationality, in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error80").innerHTML="";
}
//4.1 House No. and Street Name
var hs=document.getElementById("hs").value;
if(hs==""){
document.getElementById("error29").innerHTML="<a href='#hs'>4.1 Please fill House no. & Street name.  </a><br>";
k=1;
}
else if(hs.length<10 || hs.length>500)
{
document.getElementById("error29").innerHTML="<a href='#hs'>4.1 PIn No must be in 10 digit to 500 digit.</a><br>";
k=1;
}

else if(!hs.match(/^[A-Z0-9]*$/))
{
document.getElementById("error29").innerHTML="<a href='#hs'>4.1 Please fill house no. in Proper Formate.</a><br>";
k=1;
}
else{
document.getElementById("error29").innerHTML="";
}
//4.1.1Village or Town or City
var vi=document.getElementById("vi").value;
if(vi==""){
document.getElementById("error30").innerHTML="<a href='#vi'>4.1.1 Please fill Village or Town or City. </a><br>";
k=1;
}
else if(!vi.match(/^[A-Z]*$/))
{
document.getElementById("error30").innerHTML="<a href='#vi'>4.1.1 Please fill Village or Town Or City in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error30").innerHTML="";
}
//4.1.2 District
var dt=document.getElementById("dt").value;
if(dt==""){
document.getElementById("error31").innerHTML="<a href='#dt'>4.1.2 Please fill District. </a><br>";
k=1;
}
else if(!dt.match(/^[A-Z]*$/))
{
document.getElementById("error31").innerHTML="<a href='#dt'>4.1.2 Please fill District name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error31").innerHTML="";
}
//4.1.3 State/ UT
var st=document.getElementById("st").value;
if(st==""){
document.getElementById("error32").innerHTML="<a href='#st'>4.1.3 Please fill State. </a><br>";
k=1;
}
else if(st==dt)
{
document.getElementById("error32").innerHTML="<a href='#11'>4.1.3 Invalid . </a><br>";
}
else if(!st.match(/^[A-Z]*$/))
{
document.getElementById("error32").innerHTML="<a href='#st'>4.1.3 Please fill State name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error32").innerHTML="";
}
//4.1.4 PIN
var pin=document.getElementById("pin").value;
if(pin==""){
document.getElementById("error33").innerHTML="<a href='#pin'>4.1.4 Please fill pin. </a><br>";
k=1;
}
else if(mobile.length<6 || mobile.length>6 )
{
document.getElementById("error33").innerHTML="<a href='#pin'>4.1.4 PIn No must be in 10 digit.</a><br>";
k=1;
}
else if(!pin.match(/^[0-9]*$/))
{
document.getElementById("error33").innerHTML="<a href='#pin'>4.1.4 Please fill PIn  in Digit Formate.</a><br>";
k=1;
}
else{
document.getElementById("error33").innerHTML="";
}
//4.1.5 Mobile Number
var mobile=document.getElementById("mobile").value;
if(mobile==""){
document.getElementById("error34").innerHTML="<a href='#mobile'>4.1.5 Please fill Mobile No.. </a><br>";
k=1;
}
else if(isNaN(mobile))
{
document.getElementById("error34").innerHTML="<a href='#mobile'>4.1.5 Invalid Mobile No.</a><br>";
k=1;
}
else if(mobile.length<10 || mobile.length>10 )
{
document.getElementById("error34").innerHTML="<a href='#mobile'>4.1.5 Mobile No must be in 10 digit.</a><br>";
k=1;
}
else{
document.getElementById("error34").innerHTML="";
}
//4.1.6 Email
var email=document.getElementById("email").value;
if(email==""){
document.getElementById("error35").innerHTML="<a href='#email'>4.1.6 Please fill Email ID. </a><br>";
k=1;
}
else if(!email.match(/^([a-z0-9]+)@([a-z0-9]+).([a-z]+)$/))
{
document.getElementById("error35").innerHTML="<a href='#email'>4.1.6 Please fill Email ID in proper Formate.</a><br>";
k=1;
}
else{
document.getElementById("error35").innerHTML="";
}
//4.1.7 Police Station
var ps=document.getElementById("ps").value;
if(ps==""){
document.getElementById("error70").innerHTML="<a href='#ps'>4.1.7 Please fill Police Station Detail. </a><br>";
k=1;
}
else{
document.getElementById("error70").innerHTML="";
}
//4.2 Is permanent address same as present address? 
var getSelectedValue15 = document.querySelector(   
                'input[name="p1"]:checked');   
                
            if(getSelectedValue15 == null) {   
                
                document.getElementById("error75").innerHTML   
                    ="<a href='#p2'>4.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error75").innerHTML="";
}
//5.1 Name
if(document.getElementById('p2').checked)
{
var f1=document.getElementById("f1").value;
if(f1==""){
document.getElementById("error36").innerHTML="<a href='#f1'>5.1 Please fill Name. </a><br>";
k=1;
}
else if(!f1.match(/^[A-Z]*$/))
{
document.getElementById("error36").innerHTML="<a href='#f1'>5.1 Please fill name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error36").innerHTML="";
}
//5.2 Address
var add=document.getElementById("add").value;
if(add==""){
document.getElementById("error37").innerHTML="<a href='#add'>5.2 Please fill Address. </a><br>";
k=1;
}
else{
document.getElementById("error37").innerHTML="";
}
//5.3 Mobile No
var m1=document.getElementById("m1").value;
if(m1==""){
document.getElementById("error38").innerHTML="<a href='#m1'>5.3 Please fill Mobile no. </a><br>";
k=1;
}
else if(isNaN(m1))
{
document.getElementById("error38").innerHTML="<a href='#m1'>5.3 Invalid Mobile No.</a><br>";
k=1;
}
else if(m1.length<10 || m1.length>10 )
{
document.getElementById("error38").innerHTML="<a href='#m1'>5.3 Mobile No must be in 10 digit.</a><br>";
k=1;
}
else{
document.getElementById("error38").innerHTML="";
} 
//5.4 Email ID
var e1=document.getElementById("e1").value;
if(e1==""){
document.getElementById("error39").innerHTML="<a href='#e1'>5.4 Please fill Email ID. </a><br>";
k=1;
}
else if(!e1.match(/^([a-z0-9]+)@([a-z0-9]+).([a-z]+)$/))
{
document.getElementById("error39").innerHTML="<a href='#e1'>5.4 Please fill Email ID in proper Formate.</a><br>";
k=1;
}
else{
document.getElementById("error39").innerHTML="";
}
}
else
{
document.getElementById("error36").innerHTML="";
document.getElementById("error37").innerHTML="";
document.getElementById("error38").innerHTML="";
document.getElementById("error39").innerHTML="";
}

//Passport/ Identity Certificate Number
if(document.getElementById('apply1').checked)
{
var pi=document.getElementById("pi").value;
var pi2=/^[A-Z0-9]*$/;
if(pi==""){
document.getElementById("error40").innerHTML="<a href='#pi'>6.1 Please fill Passport/ Identity Certificate Number. </a><br>";
k=1;
}
else if(pi.length<8 || pi.length>8)
{
document.getElementById("error40").innerHTML="<a href='#pi'>6.1 Passport/ Identity Certificate Number must be in 8 Character.</a><br>";
k=1;
}
else if(!pi.match(pi2))
{
document.getElementById("error40").innerHTML="<a href='#pi'>6.1 Invalid Passport/ Identity Certificate Number.</a><br>";
k=1;
}
else{
document.getElementById("error40").innerHTML="";
}
//Date of Issue (DD-MM-YYYY)
//var di=document.getElementById("di").value;
//if(di==""){
//document.getElementById("error41").innerHTML="<a href='#di'>6.1.1 Please fill Date of Issue (DD-MM-YYYY). </a><br>";
//k=1;
//}
//else{
//document.getElementById("error41").innerHTML="";
//}
//Date of Expiry (DD-MM-YYYY)
//var de=document.getElementById("de").value;
//if(de==""){
//document.getElementById("error42").innerHTML="<a href='#de'>6.1.2 Please fill Date of Expiry (DD-MM-YYYY). </a><br>";
//k=1;
//}
//else{
//document.getElementById("error42").innerHTML="";
//}
var di = new Date(document.getElementById("di").value);
var de = new Date(document.getElementById("de").value);
if (di > de) {
        document.getElementById("error41").innerHTML = "<a href=#di>6.1.2  Issue is Greter than Expire</a><br>";
        k = 1;
    }
    else if (di < de) {
        document.getElementById("error41").innerHTML = "";
        k = 1;
    }
    else {
        document.getElementById("error41").innerHTML = "<a href=#di>6.1.2 Enter Date Issue and Expire Date</a><br>";
		}

//Place of Issue
var place=document.getElementById("place").value;
if(place==""){
document.getElementById("error43").innerHTML="<a href='#place'>6.1.3 Please fill Place of Issue.</a><br>";
k=1;
}
else if(!place.match(/^[A-Z]*$/))
{
document.getElementById("error43").innerHTML="<a href='#place'>6.1.3 Please fill Place Of Isuue Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error43").innerHTML="";
}
}
else
{
document.getElementById("error40").innerHTML="";
document.getElementById("error41").innerHTML="";
document.getElementById("error42").innerHTML="";
document.getElementById("error43").innerHTML="";
}
//6.2 Have you ever applied for passport, but not issued?
var getSelectedValue16 = document.querySelector(   
                'input[name="ever"]:checked');   
                
            if(getSelectedValue16 == null) {   
                
                document.getElementById("error44").innerHTML   
                    ="<a href='#ever1'>6.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error44").innerHTML="";
}
//Name of passport office where applied
if(document.getElementById('ever').checked)
{
var ww=document.getElementById("ww").value;
if(ww==""){
document.getElementById("error45").innerHTML="<a href='#ww'>6.2.1 Please fill Name of passport office where applied. </a><br>";
k=1;
}
else if(!ww.match(/^[A-Z]*$/))
{
document.getElementById("error45").innerHTML="<a href='#ww'>6.2.1 Please fill passport office name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error45").innerHTML="";
}
}
else
{
document.getElementById("error45").innerHTML="";
}
//
var getSelectedValue17 = document.querySelector(   
                'input[name="o"]:checked');   
                
            if(getSelectedValue17 == null) {   
                
                document.getElementById("error46").innerHTML   
                    ="<a href='#o'>7.1.1 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error46").innerHTML="";
}
//
var getSelectedValue18 = document.querySelector(   
                'input[name="o1"]:checked');   
                
            if(getSelectedValue18 == null) {   
                
                document.getElementById("error47").innerHTML   
                    ="<a href='#o1'>7.1.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error47").innerHTML="";
}
//
var getSelectedValue19 = document.querySelector(   
                'input[name="o2"]:checked');   
                
            if(getSelectedValue19 == null) {   
                
                document.getElementById("error48").innerHTML   
                    ="<a href='#o2'>7.1.3 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error48").innerHTML="";
}
//
var getSelectedValue20 = document.querySelector(   
                'input[name="o3"]:checked');   
                
            if(getSelectedValue20 == null) {   
                
                document.getElementById("error49").innerHTML   
                    ="<a href='#o3'>7.1.4 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error49").innerHTML="";
}
//
var getSelectedValue21 = document.querySelector(   
                'input[name="o4"]:checked');   
                
            if(getSelectedValue21 == null) {   
                
                document.getElementById("error50").innerHTML   
                    ="<a href='#o4'>7.2.1 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error50").innerHTML="";
}
//
var getSelectedValue22 = document.querySelector(   
                'input[name="o5"]:checked');   
                
            if(getSelectedValue22 == null) {   
                
                document.getElementById("error51").innerHTML   
                    ="<a href='#o5'>7.3.1 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error51").innerHTML="";
}
//
var getSelectedValue23 = document.querySelector(   
                'input[name="o6"]:checked');   
                
            if(getSelectedValue23 == null) {   
                
                document.getElementById("error52").innerHTML   
                    ="<a href='#o6'>7.3.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error52").innerHTML="";
}
//
var getSelectedValue24 = document.querySelector(   
                'input[name="o7"]:checked');   
                
            if(getSelectedValue24 == null) {   
                
                document.getElementById("error53").innerHTML   
                    ="<a href='#o7'>7.3.3 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error53").innerHTML="";
}
//
var getSelectedValue25 = document.querySelector(   
                'input[name="o8"]:checked');   
                
            if(getSelectedValue25 == null) {   
                
                document.getElementById("error54").innerHTML   
                    ="<a href='#o8'>7.4.1 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error54").innerHTML="";
}
//
var getSelectedValue26 = document.querySelector(   
                'input[name="o9"]:checked');   
                
            if(getSelectedValue26 == null) {   
                
                document.getElementById("error55").innerHTML   
                    ="<a href='#o9'>7.4.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error55").innerHTML="";
}
//
var getSelectedValue27 = document.querySelector(   
                'input[name="o0"]:checked');   
                
            if(getSelectedValue27 == null) {   
                
                document.getElementById("error56").innerHTML   
                    ="<a href='#o0'>7.4.3 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error56").innerHTML="";
}
//
var getSelectedValue28 = document.querySelector(   
                'input[name="o11"]:checked');   
                
            if(getSelectedValue28 == null) {   
                
                document.getElementById("error57").innerHTML   
                    ="<a href='#o11'>7.4.4 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error57").innerHTML="";
}
//
var getSelectedValue29 = document.querySelector(   
                'input[name="o12"]:checked');   
                
            if(getSelectedValue29 == null) {   
                
                document.getElementById("error58").innerHTML   
                    ="<a href='#o12'>7.5.1 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error58").innerHTML="";
}
//
var getSelectedValue30 = document.querySelector(   
                'input[name="o13"]:checked');   
                
            if(getSelectedValue30 == null) {   
                
                document.getElementById("error59").innerHTML   
                    ="<a href='#o13'>7.5.2 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error59").innerHTML="";
}
//
var getSelectedValue31 = document.querySelector(   
                'input[name="o14"]:checked');   
                
            if(getSelectedValue31 == null) {   
                
                document.getElementById("error60").innerHTML   
                    ="<a href='#o14'>7.5.3 You have not selected any option.</a><br>";
                k=1;					
            }
			else{
document.getElementById("error60").innerHTML="";
}
//8.1 Fee amount in (Rs)
var fa=document.getElementById("fa").value;
if(fa==""){
document.getElementById("error61").innerHTML="<a href='#fa'>8.1 Please fill Fee Amount. </a><br>";
k=1;
}
else if(!fa.match(/^[0-9]*$/))
{
document.getElementById("error61").innerHTML="<a href='#fa'>8.1 Please fill Fee Amount in Digit Formate.</a><br>";
k=1;
}
else{
document.getElementById("error61").innerHTML="";
}
//8.2 If paid by Demand Draft (DD), provide the following details
var dd=document.getElementById("dd").value;
if(dd==""){
document.getElementById("error62").innerHTML="<a href='#dd'>8.2 Please fill DD No.. </a><br>";
k=1;
}
else if(!dd.match(/^[0-9]*$/))
{
document.getElementById("error62").innerHTML="<a href='#dd'>8.2 Please fill DD No in Digit Formate.</a><br>";
k=1;
}
else{
document.getElementById("error62").innerHTML="";
}
/*Date of Issue (DD-MM-YYYY)
var di1=document.getElementById("di1").value;
if(di1==""){
document.getElementById("error63").innerHTML="<a href='#di1'>8.2.1 Please fill Date of Issue (DD-MM-YYYY) . </a><br>";
k=1;
}
else{
document.getElementById("error63").innerHTML="";
}
//Date of Expiry (DD-MM-YYYY)
var de1=document.getElementById("de1").value;
if(de1==""){
document.getElementById("error64").innerHTML="<a href='#de1'>8.2.2 Please fill Date of Expiry (DD-MM-YYYY). </a><br>";
k=1;
}
else{
document.getElementById("error64").innerHTML="";
}*/
var di1 = new Date(document.getElementById("di1").value);
var de1 = new Date(document.getElementById("de1").value);
if (di1 > de1) {
        document.getElementById("error63").innerHTML = "<a href=#di1>8.2.2  Issue is Greter than Expire</a><br>";
        k = 1;
    }
    else if (di1 < de1) {
        document.getElementById("error63").innerHTML = "";
        k = 1;
    }
    else {
        document.getElementById("error63").innerHTML = "<a href=#di1>8.2.2 Enter Date Issue and Expire Date</a><br>";
		}

//Bank Name
var bn=document.getElementById("bn").value;
if(bn==""){
document.getElementById("error65").innerHTML="<a href='#bn'>8.2.3 Please fill Bank Name. </a><br>";
k=1;
}
else if(!bn.match(/^[A-Z]*$/))
{
document.getElementById("error65").innerHTML="<a href='#bn'>8.2.3 Please fill Bank Name in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error65").innerHTML="";
}
//Enclosure
var e11=document.getElementById("e11").value;
if(e11==""){
document.getElementById("error66").innerHTML="<a href='#e11'>9 Please Attach Enclosure. </a><br>";
k=1;
}
else{
document.getElementById("error66").innerHTML="";
}
//10 Place
var pz=document.getElementById("pz").value;
if(pz==""){
document.getElementById("error67").innerHTML="<a href='#pz'>10.1 Please Fill Place. </a><br>";
k=1;
}
else if(!pz.match(/^[A-Z]*$/))
{
document.getElementById("error67").innerHTML="<a href='#pz'>10.1 Please fill Place in Capital Formate.</a><br>";
k=1;
}
else{
document.getElementById("error67").innerHTML="";
}
//10 sign
var s11=document.getElementById("s11").value;
if(s11==""){
document.getElementById("error68").innerHTML="<a href='#s11'>10.2 Please Select Sign. </a><br>";
k=1;
}
else{
document.getElementById("error68").innerHTML="";
}
//10 date
var d7=document.getElementById("d7").value;
if(d7==""){
document.getElementById("error69").innerHTML="<a href='#d7'>10.3 Please Fill date. </a><br>";
k=1;
}
else{
document.getElementById("error69").innerHTML="";
}
if(k==1)
{
return false;
}
else{
document.getElementById("error").innerHTML="";
}
k=0;
}
