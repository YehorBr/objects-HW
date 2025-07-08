const bankAccount = {
    ownerName: "Yehor",
    accountNumber: "1234", 
    balance: 50, 
    deposit: function(amount){
        if(amount> 0){
            this.balance += amount
            alert(`Ви поповнили рахунок на ${amount} грн. Баланс: ${this.balance} грн`)
        }
    },
    withdraw: function(amount){
        if(amount > 0){
            this.balance -= amount
            alert(`Ви зняли ${amount} грн. Баланс: ${this.balance} грн`)
        }
    }
}

if(confirm("Бажаєтє поповнити рахунок?")){
    const depositBalance = parseInt(prompt("Введіть суму поповнення:"))
    bankAccount.deposit(depositBalance)
}
else if(confirm("Бажаєте зняти гроші?")){
    const withdrawBalance = parseInt(prompt("Введіть суму зняття:"))
    bankAccount.withdraw(withdrawBalance)
}
else {
      alert(`Поточний баланс: ${bankAccount.balance} грн.`);
    } 

const weather = {
    temperature: null,
    humidity: 40,
    windSpeed: 8,
    belowZero: function (){
        return this.temperature < 0
    } 
}

const whatTemp = prompt("Яка температура у вас?")
weather.temperature = parseInt(whatTemp)

if(weather.belowZero()){
    alert("температура нижче 0 градусів Цельсія")
}else{
    alert("температура вище 0 або дорівнює градусів Цельсія")
}

const user = {
    name: "user12",
    email: "user12@gmail.com",
    password: "user12pass",
    login: function(inputEmail, inputPassword){
            return inputEmail === this.email && inputPassword === this.password;
        }
}

const enterYourEmail = prompt("Введіть email:")
const enterYourPassword = prompt("Введіть пароль:")

if(user.login(enterYourEmail, enterYourPassword)){
alert(`Вітаємо, ${user.name}! Вхід виконано успішно.`)  
}else{
    alert("Невірний email або пароль. Спробуйте ще раз.")
}

const movie = {
    title:"movie",
    director: "director of movie",
    year: 2025,
    rating: 9.51,
    isHigherThanEight: function(){
        return this.rating > 8
    } 
}

console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);

console.log("Чи вище оцінка за 8?", movie.isHigherThanEight());