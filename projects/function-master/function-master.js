
function objectValues(data) {
    var arr = [];
    for(let i in data) {
        arr.push(data[i]);
    }
    return arr;
}

function keysToString(data) {
    var arr = Object.keys(data);
    var fin = arr.join(" ");
    
    return fin;
}

function valuesToString(data) {
    var arr = Object.values(data);
    var x = [];
    for(var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "string") {
            x.push(arr[i]);
        }
    }
    var fin = x.join(" ");
    
    return fin;
}

function arrayOrObject(arg) {
    if(Array.isArray(arg)) {
        return "array";
    } else if(typeof arg === "object") {
        return "object";
    }
}

function capitalizeWord(string) {
    // var s = string.slice(1);
    // var t = string[0].toUpperCase();
    // return t + s;
    
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAllWords(str) {
    return str.replace(/\S*/g, capitalizeWord);
}

function welcomeMessage(obj) {
    var cap = capitalizeWord(obj.name)
    return "Welcome " + cap + "!";
}

function profileInfo(obj) {
    var capn = capitalizeWord(obj.name);
    var caps = capitalizeWord(obj.species);
    return capn + " is a " + caps;
}

function maybeNoises(obj) {
    if(Array.isArray(obj.noises)) {
        if(obj.noises.length > 1) {
            return obj.noises.join(" ");
        } else {
            return "there are no noises";
        }
    }
    return "there are no noises";
}

function hasWord(string, word) {
    return string.includes(word);
}

function addFriend (name, obj) {
    obj.friends.push(name);
    return obj;
}

function isFriend(name, obj) {
    if(obj.friends) {
        for(var i = 0; i < obj.friends.length; i++) {
            if(obj.friends[i] === name) {
                return true;
            } 
        }
    }
    return false;
}

// data is an array
// data[i] is an object
// data.name is the name of the object
// data.friends is an array
// data.friends[j] refers to individual names in that array

function nonFriends(name, data) {
    var frList = [];
    
    for(let i in data) {
        frList.push(data[i].name);
    }
    console.log(frList);
    
    var nonFr = [];
  
    for(let i = 0; i < data.length; i++) {
        if(data[i].name === name) {
            console.log(name + " " + data[i].name);
                for(var k = 0; k < frList.length; k++) {
                    console.log(frList[k]);
                    console.log("Current prime name is " + data[i].name);
                    if (data[i].friends.indexOf(frList[k]) > -1) {
                      console.log("same hat " + frList[k]);
                    } else if(frList[k] === data[i].name && data[i].name === name) {
                      console.log("Current prime name is " + data[i].name);
                      console.log("same hat!!! " + frList[k]);
                    } else {
                      nonFr.push(frList[k]);
                    }
                }
            }
        }
    return nonFr;
}

function updateObject(obj, key, val) {
    obj[key] = val;
    return obj;
}

function removeProperties(obj, arr) {
    for(var i in arr) {
        var x = arr[i];
        delete obj[x];
    }
    return obj;
}

function dedup(arr) {
    let newArr = arr.sort();
    let finArr = [];
    for(var i = 0; i < newArr.length; i++) {
        if(newArr[i + 1] !== newArr[i]) {
            finArr.push(arr[i]);
        }
    }
    return finArr;
}