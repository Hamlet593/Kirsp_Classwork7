class Shiritori {
  constructor(){
    this.words = [];
    this.game_over = false;
  }
  
  play(value){
    
    
    if(!this.words.length){
      this.words.push(value);
      return this.words;
    }
    
    const lastWord = this.words[this.words.length - 1];
    const lastChar = lastWord[lastWord.length - 1]
    
    if(!this.words.includes(value) && lastChar === value[0]){
      this.words.push(value);
      return this.words;
    }
    else{
      this.game_over = true;
      return 'game over';
    }
    
  }
  
  restart(){
    this.words = [];
    this.game_over = false;
    return 'game resatrted';
  }

}

let myShiritori = new Shiritori();
console.log(myShiritori.play('city'));
console.log(myShiritori.play('yuru'));
console.log(myShiritori.play('ujan'));
console.log(myShiritori.play('ujan'));
console.log(myShiritori.restart());
console.log(myShiritori.play('ujan'));
console.log(myShiritori.play('najar'));