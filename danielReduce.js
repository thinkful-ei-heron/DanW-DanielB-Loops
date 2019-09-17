const testInput = "noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest"

function secretString(string){
  let secretArray = string.split(" ");
  let decoded = secretArray.reduce((acc, e) => {
    if(e.length === 3) return (acc += ' ');
    else return (acc += e.slice(-1));
  },(str = ''));

}

secretString(testInput);
