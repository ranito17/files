const fs= require('fs');//request the fs module for managing files
const path=require('path');//request the path module for changing file path
const files=[
    'input.txt1',
    'input.txt2',
    'input.txt3',
    'input.txt4',
    'input.txt5',
    'input.txt6',
    'input.txt7',
    'input.txt8',
    'input.txt9',
    'input.txt10',
]//an array of said files that we want to take text from
for(let i=1;i<=files.length;i++)   //loop for each file
{   
    const inputPath=path.join(__dirname,`/text/input.txt${i}`);//change the path
    const text=fs.readFileSync(inputPath,'utf-8');//read and safe content from the inputpath  
    const arr=text.split('\r\n');//split the content from the input path into lines with indexes for each line(start from index 0)
    for(let j=0;j<i;j++){//loop to copy i lines from file i
        fs.appendFileSync(`${__dirname}/newFile.txt`,`${arr[j]}\n`);  
    }
}
const textIn=fs.readFileSync(`${__dirname}/newFile.txt`,'utf-8');//check if we got the correct output
console.table(textIn);