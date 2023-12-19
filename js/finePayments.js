"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");
//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;
/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"
2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"
3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"
4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".
Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
var validationPassportData = /^[а-їА-ЯЇІЄ]{2}\d{6}$/ //символы украинского алфавита. В Аске таблице отсутствуют заглавные Ї І и Є
var validationCardNumber = /^\d{16}$/
var validationCvv = /^\d{3}$/
buttonSubmit.addEventListener('click',payFine);
function payFine(){ 
  if (!passport.value.match(validationPassportData))  alert("Не вірний паспортний номер");
  else{
  if (!creditCardNumber.value.match(validationCardNumber)) alert("Не вірна кредитна картка");
  else{
    if (!cvv.value.match(validationCvv)) alert("Не вірний cvv");
    else{
    var i = 0;
    var numberFound = false;
while (i<DB.length)
{ 
    if (DB[i]["номер"]!==fineNumber.value) i++;
    else {
        if(DB[i]["сума"]!=amount.value){ alert ("Сума не співпадає");numberFound=true; break}
        else  {
            alert("Ваш штраф "+ DB[i]["номер"]+" був успішно оплачено")
            numberFound=true;
            DB.splice(i,1);
            break
        }
    }
} 
if (!numberFound) alert("Номер не співпадає")
}}}
}