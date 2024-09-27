const name='m';
console.log(name);
const greet=(name)=>{
    console.log(`hello,${name}`);
}
greet('shri');
//module.export=name;
module.exports={
    name
};