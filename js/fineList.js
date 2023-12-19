"use strict";

window.fineList = {
    searchFines: searchFines
};

let DB = data.finesData;

function searchFines(searchKey) {
    if (!searchKey) {
        alert('Введите номер или тип штрафа');
        return [];
    }
    const numberRegex = /^\d+$/;
    const typeRegex = /^(Перевищення швидкості|Невірне паркування|Їзда у не тверезому стані)$/i;
    const isMatch = (fine) => {
        return (
            (numberRegex.test(searchKey) && fine.номер.includes(searchKey)) ||
            (typeRegex.test(searchKey) && fine.тип.toLowerCase() === searchKey.toLowerCase())
        );
    };
    const result = DB.filter(isMatch);

    if (result.length === 0) {
        alert('Штраф с таким номером или типом не найден');
    }

    return result;
}
