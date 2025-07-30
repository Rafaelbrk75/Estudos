const dayjs = require("dayjs")

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year');
    const nextBithday = birthday.add(ageInYears + 1, "year");
    const daysToNextBithday = nextBithday.diff(today, 'day') + 1;

    console.log(`Idade: ${ageInYears}`)
    console.log(`Proximo aniversário: ${nextBithday.format("DD/MM/YYYY")}`);
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBithday}`);
}

birthday("2006-01-03");