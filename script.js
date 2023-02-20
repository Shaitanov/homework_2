const student = "Шайтанов Максим Сергеевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...


const lessons1 = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);

const session1 = Array(1).fill([0, 0, 2, 2, 0, 0, 0]);

const lessons2 = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);

const session2 = Array(1).fill([0, 0, 2, 2, 2, 0, 0]);

const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);

const array = [lessons1, session1, holidays, lessons2, session2];



const ticket = 100;    // стоимость билента

const be = 5000;  // cтоимость приставки 

const mft = 200; // деньги на билет

const mfl = 500;  // деньги на обед

let mebt = mft - ticket; // оставшиеся деньги с проезда
let pb = 0; // в копилке

let day = 0;
let week = 0;




for (let i = 0; i < array.length; i++) {

  for (let l = 0; l < array[i].length; l++) {
    
    week = week + 1;
    
    console.log('Номер Недели: ' + week);

    for (let s = 0; s < array[i][l].length; s++) {

      let element = array[i][l][s];
      
      day = day + 1;
      
      console.log('Номер Дня: ' + day);
      
      if (element > 0) {
        
        pb = pb + mebt;
        
        if (element <= 3) {
          
            pb = pb + mfl;
          
            console.log('Остаток: ' + pb)
        }
        
      }
      
      if(be <= pb) break
    
    }
    
    if(be <= pb) break
 
}
  
if(be <= pb) break

}

if(be <= pb){console.log('Вы купили приствку!', pb, day )

}

else{
  
    console.log('Вы не смогли купить приставку', day, pb);

}

