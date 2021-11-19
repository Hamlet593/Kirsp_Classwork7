/*Create a CustomConsole class with following methods:*/

class CustomConsole {
  constructor(){
    this.historyList = [];
  }
  
  log(value){
    value = typeof value === 'object' ? JSON.stringify(value) : String(value);
    this.historyList.push(value)
    return value;
  }
  
  history(start = 0, end = this.historyList.length){
    return this.historyList.slice(start, end + 1);
  }
  
  clearHistory(){
    return this.historyList = [];
  }  
}

const obj = {
  name: 'Hamo',
  surName: 'Muradyan',
};

const myConsole = new CustomConsole();

myConsole.log(545);
myConsole.log(obj);
myConsole.log('225');
myConsole.log('afsdfds');
myConsole.log(false);
console.log(myConsole.history());
// myConsole.clearHistory()