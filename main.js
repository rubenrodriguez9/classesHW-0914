class stack {
    constructor(array){
      this.array = [];
    }
    push(item){
      this.array.push(item)
    }
    pop(item){
      this.array.pop(item)
    }
    peek(){
      console.log(this.array.slice(-1))
    }
    isEmpty(){
      if(this.array.length === 0){
        return true
      }else return false
    }
  }
  
  
  class queue {
    constructor(array){
      this.array = []
    }
    enqueue(item){
      this.array.push(item)
    }
    dequeue(){
      this.array.shift
    }
    front(){
      console.log(this.array[0])
    }
    isEmpty(){
      if(this.array.length === 0){
        return true
      }else return false
    }
    printQueue(){
      let str = ''
      for(const item in this.array){
        str += item + ','
        
      }
      console.log(str.slice(0, -1))
    }
  }
  