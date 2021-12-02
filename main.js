
// =================================================
//  কিভাবে Array এর মধ্যে থেকে সবছেয়ে বড় Word টি এবং
//  এর অবস্থান নির্ণয় করা যায় ।।
// =================================================

function longestString(names){
    let longestWord = "";
    for(let name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
};

console.log(longestString(["sumit sha","learning with sumit","pranta","onmoy","suborna"]));
