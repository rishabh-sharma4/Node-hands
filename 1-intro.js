// __dirname - path to current directory
console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);
const interval=setInterval(()=>{
    console.log("I will execute everytime");
},1000)
clearInterval(interval);