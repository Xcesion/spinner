process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = ["|", " /", "-", "\\", "|", " /", "-", "\\"]
let delay = 100;
for (const spin of spinner) {
  setTimeout(() =>{
    process.stdout.write(`\r${spin}   `);
  }, delay += 200); 
}

setTimeout(()=> {
  console.log("")
}, delay += 50)

