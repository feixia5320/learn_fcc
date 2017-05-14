// --------------------字符串逆序----------------
function reverseString(str) {
    var arr = str.split('');
    arr.reverse();
    var tmp = arr.join('');
    return tmp;
}

reverseString('hello');

// -----------------一个整数的阶乘----------------
function factorialize(num) {
    var total = 1;
    while (num > 1) {
        total = total * num;
        num--;
    }
    return total;
}

factorialize(5);

// ------------------字符串是回文----------------
function palindrome(str) {
    var tmp = [];
    var t_str;
    t_str = str.replace(/\,  | \s | \. | \ - | \_/gi, '');
    t_str = t_str.replace(/\(/g, ')');
    t_str = t_str.toLowerCase();
    var t_str2 = reverseString(t_str);
    if (t_str2 == t_str) {
        return true;
    } else {
        return false;
    }
}

function reverseString(str) {
    var arr = str.split('');
    arr.reverse();
    var tmp = arr.join('');
    return tmp;
}

palindrome('0_0 (: /-\ :) 0-0');

// ----------------句子中最长的单词----------------
function findLongestWord(str) {
    var arr = [];
    arr = str.split(' ');
    var arr_len = [];
    var max = 0;
    arr.forEach(getlength);
    arr_len.forEach(getMax);

    function getlength(val, index, arr) {
        arr_len[index] = val.length;
        return arr_len;
    }

    function getMax(val, index, arr) {
        if (val > max) {
            max = val;
        }
        return max;
    }

    return max;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

// --------------单词首字母都大写-------------

function titleCase(str) {
    var arr = [];
    var str2 = str.toLowerCase();
    arr = str2.split(' ');
    arr.forEach(setUPCase);

    var str3 = arr_new.join(' ');
    return str3;
}

var arr_new = [];

function setUPCase(val, index, arr) {
    var tmp = val.charAt(0).toUpperCase();
    tmp += val.substr(1);
    arr_new[index] = tmp;
}

titleCase('sHoRt AnD sToUt');

// -------------找到每个小数组中的最大值------------
function largestOfFour(arr) {
    var n = arr.length;
    var arr_new = [];
    for (var i = 0; i < n; i++) {
        arr[i].forEach(getMax);
        arr_new[i] = max;
        max = 0;
    }
    return arr_new;
}

var max = 0;

function getMax(val, index, arr) {
    if (val > max) {
        max = val;
    }
    return max;
}

largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
// ------------------------指定的字符串(target)结尾------------
function confirmEnding(str, target) {
    var target_len = target.length;
    var str_len = str.length;
    var tmp = '';
    tmp = str.substr(str_len - target_len);
    if (tmp == target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding('Bastian', 'n');

// ----------------重复一个指定的字符串 num次--------------
function repeat(str, num) {
    if (num < 0) {
        return '';
    }
    var tmp = str;
    for (var i = 0; i < num - 1; i++) {
        tmp += str;
    }
    return tmp;
}

repeat('abc', 3);
// ----------------截断一个字符串---------------

function truncate(str, num) {
    var tmp = '';
    if (num <= 3) {
        tmp = str.substr(0, num);
        tmp += '...';
        return tmp;
    } else if (str.length <= num) {
        return str;
    }
    tmp = str.substr(0, num - 3);
    tmp += '...';
    return tmp;
}

truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length);

// -------------数组arr按照指定的数组大小size分割成若干个数组块-------
function chunk(arr, size) {
    var a = 0,
        b = 0;
    b = size;
    var arr_tmp = [];
    var len = arr.length / size;
    for (var i = 0; i < len; i++) {
        var tmp = [];
        tmp = arr.slice(a, b);
        arr_tmp.push(tmp);
        a += size;
        b += size;
    }

    return arr_tmp;
}

chunk([0, 1, 2, 3, 4, 5], 3);

// -------------一个数组被截断n个元素后还剩余的元素-----------------
function slasher(arr, howMany) {
    var arr_tmp = [];
    arr.splice(0, howMany);
    return arr;
}

slasher([1, 2, 3], 2);

// -------------第一个字符串元素包含了第二个字符串元素的所有字符--------
function mutation(arr) {
    var str = '';
    var str2 = '';
    str = arr[0];
    str = str.toLowerCase();
    str2 = arr[1];
    str2 = str2.toLowerCase();

    var n = 0;
    var count = 0;
    var str2_len = str2.length;
    for (var i = 0; i < str2_len; i++) {
        n = str.indexOf(str2.charAt(i));
        if (n == -1) {
            return false;
        } else {
            count++;
        }
        if (count == str2_len) {
            return true;
        }
    }
}

mutation(['hello', 'hey']);

// ---------------删除数组中的所有假值------------
function bouncer(arr) {
    var arr_tmp = [];
    arr_tmp = arr.filter(getNull);
    return arr_tmp;
}

function getNull(val, index, arr) {
    return Boolean(val);
}

bouncer([7, 'ate', '', false, 9]);

// ---------------删除第一个数组中的指定元素------------
function destroyer(arr) {
    var len = 0;
    len = arguments.length;
    var arr_tmp = arr;
    for (var i = 0; i < len - 1; i++) {
        a = arguments[i + 1];
        arr_tmp = arr_tmp.filter(del);
        count++;
    }
    return arr_tmp;
}
var count = 0;

function del(val, index, arr) {
    if (val == a) {
        return false;
    } else {
        return true;
    }
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// ---------数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引
function where(arr, num) {
    arr.push(num);
    arr.sort(setsort);
    a = num;
    var b = arr.findIndex(getInd);

    return b;
}

function setsort(a, b) {
    return a - b;
}

function getInd(val, index, arr) {
    return val >= a;
}

where([5, 3, 20, 3], 5);
// -----------移位密码也就是密码中的字母会按照指定的数量来做移位----

function rot13(str) {
    var a_charcode = 'A'.charCodeAt(0);
    var n_charcode = 'N'.charCodeAt(0);
    var z_charcode = 'Z'.charCodeAt(0);
    var new_chr = '';
    var str2 = '';
    var arr = [];
    arr = str.split('');

    for (var i = 0; i < str.length; i++) {
        if (a_charcode <= str.charCodeAt(i) && str.charCodeAt(i) < n_charcode) {
            new_chr = replace_code(str.charAt(i), 13);
            str2 += new_chr;
        } else if (str.charCodeAt(i) >= n_charcode && str.charCodeAt(i) <= z_charcode) {
            new_chr = replace_code(str.charAt(i), -13);
            str2 += new_chr;
        } else {
            str2 += str.charAt(i);
        }
    }

    return str2;
}

function replace_code(a, b) {
    var n = a.charCodeAt(0);
    return String.fromCharCode(n + b);
}

rot13('SERR PBQR PNZC');

// ---------返回这两个数字和它们之间所有数字的和---------
function sumAll(arr) {
    arr.sort(function (a, b) { return a - b; });
    var n = arr[1] - arr[0];
    var total = arr[0];
    var count = 1;
    for (var i = 0; i < n; i++) {
        total += arr[0] + count;
        count++;
    }
    return total;
}

sumAll([5, 10]);

// -----------最大公约数-----------
function big() {
    var u = 42;
    var v = 23;
    var temp = v;
    while (v != 0) {
        temp = u % v;
        u = v;
        v = temp;
    }
    // alert("最大公约数是" + u)
}
big();

// -------------数字反转---------------
function reversenum() {
    var num = 23871;
    var reverse = 0;
    do {
        var lastdigit = num % 10;
        reverse = (reverse * 10) + lastdigit;
        num = num / 10;
    } while (num > 0);

    return reverse;
}

reversenum();

// --------------找两个数组中独有的对象----------
function diff(arr1, arr2) {
    var tmp = [];
    tmp = tmp.concat(compar(arr1, arr2));
    tmp = tmp.concat(compar(arr2, arr1));
    return tmp;
}

function compar(arr1, arr2) {
    var newarr = [];
    arr1.forEach(function (item, index, arr) {
        var cont = 0;
        var len = arr2.length;
        for (var i = 0; i < len; i++) {
            if (item != arr2[i]) {
                cont++;
            } else {
                break;
            }
        }
        if (cont == len) {
            newarr.push(item);
        }
    });

    // Same, same; but different.
    return newarr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// ---------------------遍历对象，查找目标对象--------------
function where(collection, source) {
    var arr1 = [];
    var arr2 = [];
    var keys = [];
    keys = Object.keys(source);
    arr1 = abc(collection, source, 0);
    if (keys.length == 2) {
        arr2 = abc(arr1, source, 1);
        return arr2;
    } else {
        return arr1;
    }
}

function abc(collection, source, j) {
    var arrtmp = [];
    var keys = [];
    var n = 0;
    keys = Object.keys(source);
    n = collection.length;
    for (var i = 0; i < n; i++) {
        var element = collection[i];
        if (element.hasOwnProperty(keys[j])) {
            if (element[keys[j]] == source[keys[j]]) {
                arrtmp.push(element);
            }
        } else {
            continue;
        }
    }

    return arrtmp;
}

where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 });

// --------------------替换句子中的给定字符串---------------
function myReplace(str, before, after) {
    var strtmp = '';
    if (before.charCodeAt(0) < 'a'.charCodeAt(0)) {
        strtmp = after.charAt(0).toUpperCase();
        var tmp = after.substr(1);
        strtmp += tmp;

        after = strtmp;
    }
    var tmp2 = str.replace(before, after);

    return tmp2;
}
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');
myReplace('Let us go to the store', 'store', 'mall');

// ---------------一个英文单词的第一个辅音或辅音丛移到词尾-------------------
function translate(str) {
    var str1 = '';
    var arr1 = [];
    var n = 0;
    var tmp = '';
    if (yuanyin(str[0])) {
        str = str + 'way';
        return str;
    } else {
        for (var i = 0; i < str.length; i++) {
            str1 = str[i];
            if (!yuanyin(str1)) {
                arr1.push(str1);
            } else {
                break;
            }
        }
        n = arr1.length;
        tmp = arr1.join('');
        str = str.substr(n);
        str += tmp;
        str += 'ay';
        return str;
    }

}

function yuanyin(a) {
    var arr = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < 5; i++) {
        if (a == arr[i]) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

translate('consonant');

// ------------------字符转换，生物中碱基对转换--------------
function pair(str) {
    var arr1 = [];
    var tmp = [];
    var str2 = '';

    arr1 = str.split('');
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = [];
        str2 = arr1[i];
        arr2.push(str2);
        arr2.push(pat(str2));
        tmp.push(arr2);
    }

    return tmp;
}

function pat(a) {
    var pair = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    };
    var str = '';
    str = pair[a];
    return str;
}

pair('GCG');

// -----------字母序列中找到缺失的字母并返回它-------------
function fearNotLetter(str) {
    var str1 = '';
    var a = 0;
    var b = 0;
    var len = 0;
    len = str.length;
    a = str.charCodeAt(0);
    b = str.charCodeAt(len - 1);
    if (b - a == len - 1) {
        return undefined;
    } else {
        for (var i = 0; i < len; i++) {
            if (str.charCodeAt(i) == a) {
                a++;
            } else {
                return String.fromCharCode(a);
            }
        }
    }
}

fearNotLetter('acde');

// ----------检查一个值是否是基本布尔类型-----------
function boo(bool) {
    return typeof bool === 'boolean';
}

boo(null);

// 传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
function unite(arr1, arr2, arr3) {
    var arr = [];
    arr = arguments[0];

    for (var i = 0; i < arguments.length; i++) {
        arguments[i].forEach(function (ele) {
            if (!isinside(arr, ele)) {
                arr.push(ele);
            }
        }, this);
    }
    return arr;
}

function isinside(arr, a) {
    var flag = false;
    arr.forEach(function (item, index, arr) {
        if (item == a) {
            flag = true;
        }
    });
    return flag;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/**
 * Sorted Union
 * good
 * 
 */
// 传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。--2

function unite(arr1, arr2, arr3) {
    //将参数中的数组拼接起来
    var args = Array.from(arguments);
    //将参数中的数组拼接起来
    var arr = args.reduce(function (prev, cur, index, array) {
        return prev.concat(cur);
    });
    //去掉数组中的重复项
    return arr.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// ---------------将给定的数字转换成罗马数字-------------
function convert2(num) {
    var alpha = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
        roman = '',
        bit = 0;
    while (num > 0) {
        var tempnum = num % 10;
        switch (tempnum) {
            case 3:
                {
                    roman = alpha[bit] + roman;
                    tempnum--;
                }
            case 2:
                {
                    roman = alpha[bit] + roman;
                    tempnum--;
                }
            case 1:
                {
                    roman = alpha[bit] + roman;
                    break;
                }
            case 4:
                {
                    roman = alpha[bit + 1] + roman;
                    roman = alpha[bit] + roman;
                    break;
                }
            case 8:
                {
                    roman = alpha[bit] + roman;
                    tempnum--;
                }
            case 7:
                {
                    roman = alpha[bit] + roman;
                    tempnum--;
                }
            case 6:
                {
                    roman = alpha[bit] + roman;
                    tempnum--;
                }
            case 5:
                {
                    roman = alpha[bit + 1] + roman;
                    break;
                }
            case 9:
                {
                    roman = alpha[bit + 2] + roman;
                    roman = alpha[bit] + roman;
                    break;
                }
            default:
                {
                    break;
                }
        }
        bit += 2;
        num = Math.floor(num / 10);
    }
    return roman;
}

convert2(36);
/**
 * 将字符串中的字符 &、<、>、" 转换为它们对应的 HTML 实体。
 * 
 */

function convert3(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;");

}
convert3("Dolce & Gabbana");

/**
 * --2
 * 将字符串中的字符 &、<、>、" 转换为它们对应的 HTML 实体。--2
 * good
 */

function convert4(str) {
    var obj = {
        "&": '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    var arr = str.split('');
    var result = arr.map(function (val) {
        //判断对象中是否有某值
        if (obj.hasOwnProperty(val)) {
            return obj[val];
        } else {
            return val;
        }
    });
    return result.join("");
}

convert4("Dolce & Gabbana");

/**
 * Spinal Tap Case
 * 将字符串转换为 spinal case
 */
function spinalCase(str) {
    var len = str.length;
    var char_a = 'a'.charCodeAt();
    var char_z = 'z'.charCodeAt();
    var char_A = 'A'.charCodeAt();
    var char_Z = 'Z'.charCodeAt();
    var str1 = "";
    var str2 = "";
    var arr = [];
    for (var i = 0; i < len; i++) {
        if (str.charCodeAt(i) >= char_a && str.charCodeAt(i) <= char_z) {
            str1 += str[i];
        } else if (str.charCodeAt(i) >= char_A && str.charCodeAt(i) <= char_Z) {
            str1 += '&';
            str1 += str[i].toLowerCase();
        } else {
            str1 += '&';
        }
    }
    arr = str1.split("&");
    var tmp = arr.filter(function (val, index, arr) {
        return val.length > 0;
    });
    tmp = tmp.join("-");
    return tmp;

}
// spinalCase("thisIsSpinalTap");
spinalCase('This Is Spinal Tap');
/**
 * Sum All Odd Fibonacci Numbers
 * 返回小于或等于num的斐波纳契奇数之和。
 */
function sumFibs(num) {
    var arr = [1, 1];
    var sum = 0;
    //计算斐波纳契数字
    for (var i = 0; i < num; i++) {
        sum = arr[i] + arr[i + 1];

        if (sum <= num) {
            arr.push(sum);
        } else {
            break;
        }
    }
    //在数组中筛选出奇数
    var arr = arr.filter(function (val, index, arr) {
        return val % 2 == 1;
    });

    //数组求和
    var tmp = arr.reduce(function (pre, curval, index, arr) {
        return pre += curval;
    });
    return tmp;
}

sumFibs(4);
/**
 * Sum All Primes
 * 求小于等于给定数值的质数之和。
 */
function sumPrimes(num) {
    //求质数
    var arr = [];
    var total = 0;
    //求小于num的所有质数
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    //数组求和
    total = arr.reduce(function (pre, val, index, arr) {
        return pre += val;
    })
    return total;
}
//求质数
function isPrime(num) {
    var flag = true;
    for (var i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }

    }
    return flag;
}

sumPrimes(10);
/**
 * Smallest Common Multiple
 * 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
 */

function smallestCommons(arr) {
    var mina = arr[0] < arr[1] ? arr[0] : arr[1];
    var maxb = arr[0] > arr[1] ? arr[0] : arr[1];
    var arr1 = [];
    for (var i = mina; i <= maxb; i++) {
        arr1.push(i);
    }
    var cont = 0;
    for (var j = maxb; ; j++) {
        cont = 0;
        for (var k = 0; k < arr1.length; k++) {

            if (j % arr1[k] != 0) {
                break;
            } else {
                cont++;
            }
        }
        if (cont < arr1.length) {
            continue;
        } else {
            return j;
        }
    }

}


smallestCommons([2, 3]);
/**
 * Smallest Common Multiple--2
 * 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
 */

function smallestCommons2(arr) {
    //从小到大，获得最大最小值
    arr = arr.sort(function (a, b) { return a - b; });
    var min = arr[0];
    var max = arr[1];
    //所有连续数字值从大到小
    var arrtemp = [];
    for (var i = max; i >= min; i--) {
        arrtemp.push(i);

    }
    //获得最大公约数，辗转相除法：用小数除大数，如果余数不是零，就把余数和较小的数构成一组新数，继续上面的除法，知道大数被小数约尽，此时比较小的数就是最大公约数 80=36*2+8,36=8*4+4,8=4*2+0 
    function getCommons(a, b) {
        if (a % b === 0) return b;
        return getCommons(b, a % b);

    }
    //两个数之间的最小公倍数为两个数之积除以最大公约数。
    return arrtemp.reduce(function (m, n) {

    });

}

smallestCommons2([8, 2]);

/**
 * Finders Keepers
 * 浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。
 */
function find(arr, func) {
    var tmp = arr.filter(func);
    return tmp[0];
}

find([1, 2, 3, 4], function (num) { return num % 2 === 0; });
/**
 * Drop it
 * 如果返回fasle，继续抛出，直到返回true。
 */
function drop(arr, func) {
    // Drop them elements.
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i]) === false)
            arr.splice(i, 1, 'false');
        else break;
    }
    return arr.filter(function (vl) {
        return vl !== "false";
    });
}


drop([0, 1, 0, 1], function (n) { return n === 1; });

/**
 * Drop it --2
 */
function drop2(arr, func) {
    for (var i = 0; i < arr.length;) {
        if (func(arr[0]) === false)
            arr.shift();
        else break;
    }
    return arr;
}

drop2([1, 2, 3, 4], function (n) { return n > 5; });

/**
 * Steamroller
 * 对嵌套的数组进行扁平化处理
 */
function steamroller(arr) {
    var ayy = [];
    function test(ay) {
        for (var i = 0; i < ay.length; i++) {
            if (Array.isArray(ay[i]) === true) test(ay[i]);
            else ayy.push(ay[i]);
        }
        return ayy;
    }

    return test(arr);
}

steamroller([1, [2], [3, [[4]]]]);
/**
 * Binary Agents
 * 二进制字符串，翻译成英语句子
 */
function binaryAgent(str) {
    var arr = [];
    var arr1 = [];
    arr = str.split(" ");
    var str1 = '';
    for (var i = 0; i < arr.length; i++) {
        //二进制转换为十进制
        arr1[i] = parseInt(arr[i], 2);
        str1 += String.fromCharCode(arr1[i]);
    }
    // console.log(str1);
    return str1;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/**
 * 十进制转换为2进制
 */
function toBin(intNum) {
    var answer = "";
    if (/\d+/.test(intNum)) {
        while (intNum != 0) {
            answer = Math.abs(intNum % 2) + answer;
            intNum = parseInt(intNum / 2);
        }
        if (answer.length == 0)
            answer = "0";
        // console.log(answer);
        return answer;
    } else {
        return 0;
    }
}
toBin(5);

/**
 * Everything Be True
 * every函数,所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。
 */

function every(collection, pre) {
    var arr = [];
    var flg = true;
    var len = collection.length;
    for (var i = 0; i < len; i++) {
        var keys = [];
        //获取对象中的所有key值
        keys = Object.keys(collection[i]);
        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            //获取对象key值对应的属性
            var tmp = collection[i][key];
            if (!collection[i].hasOwnProperty(pre)) {
                flg = false;
                return flg;
            }
            if (!Boolean(tmp)) {
                flg = false;
                return flg;
            }
        }
    }
    return flg;
}
every([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");

/**
 * Everything Be True --2
 * 
 */
function every2(collection, pre) {
    // Is everyone being true?
    return collection.every(function (item, index, array) {
        return item[pre];
    });
}
every2([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age");
/**
 * Arguments Optional
 * 计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果
 */

function add() {
    //对象类型判断
    if (typeof arguments[0] !== "number" || (arguments.length > 1 && typeof arguments[1] !== "number")) {
        return undefined;
    }
    if (arguments.length == 1) {
        var arg0 = arguments[0];
        //返回函数，第二个函数的输入参数为（参数）
        return function (num) {
            if (typeof num !== "number") {
                return undefined;
            }
            return arg0 + num;
        };
    } else {
        return arguments[0] + arguments[1];
    }
}
add(2, 3);
add(2)(3);
add(2)([3]);
/**
 * Validate US Telephone Numbers
 * 有效的美国电话号码
 */
function telephoneCheck(str) {
    // Good luck!
    var reg = /^(1\s?)?\(?\d{3}\)?(\s|-)?\d{3}(\s|-)?\d{4}/;   //正则规则

    var index1 = str.indexOf("(");
    var index2 = str.indexOf(")");   //查询到两个括号

    if ((index1 != -1 && index2 != -1) || (index1 == -1 && index2 == -1)) {   //存在双括号或者没有括号
        if (index2 != index1 && index2 - index1 != 4) {  //如果存在双括号，且序号间的字符有3个
            return false;
        }
        var str2 = str.replace(/[\(\)\s-]/g, "");  //将括号和空格和“-”全局替换成空，便于统计数字长度
        if (str2.length == 11 && str2.substr(0, 1) != 1) {
            return false;
        }

    } else {
        return false;
    }

    return reg.test(str);
}

telephoneCheck("27576227382");

/**
 * Symmetric Difference
 * 数组的对等差分
 */
function sym(args) {
    for (var k = 0; k < arguments.length; k++) {
        arguments[k] = filter_same(arguments[k]);
    }

    var arr_1 = [];
    arr_1 = sys_arr(arguments[0], arguments[1]);
    for (var j = 0; j < arguments.length; j++) {
        if (j + 2 < arguments.length) {
            arr_1 = sys_arr(arr_1, arguments[j + 2]);
        }
    }
    return arr_1;
}

function sys_arr(args) {
    var arrs = Array.from(arguments);
    var arr = arrs.reduce(function (prev, cur, index, array) {
        return prev.concat(cur);
    });
    var count = 0;
    arr.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count = 2;
            arr.splice(i, count);
            i--;
        } else if (arr[i] == arr[i + 2]) {
            count = 3;
            arr.splice(i, count);
            i--;
        } else if (arr[i] == arr[i + 3]) {
            count = 4;
            arr.splice(i, count);
            i--;
        }
    };

    return arr;
}
function filter_same(arr) {
    return arr.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
}

sym([1, 2, 3], [5, 2, 1, 4]);

/**
 * Exact Change
 * 收银程序 找零钱
 */

function checkCashRegister(price, cash, cid) {
    var change;
    change = cash - price;
    var res = [];

    var PENNY_n = cid[0][1] / 0.01;
    var NICKEL_n = cid[1][1] / 0.05;
    var DIME_n = cid[2][1] / 0.1;
    var QUARTER_n = cid[3][1] / 0.25;
    var ONE_n = cid[4][1] / 1;
    var FIVE_n = cid[5][1] / 5;
    var TEN_n = cid[6][1] / 10;
    var TWENTY_n = cid[7][1] / 20;
    var HUNDRED_n = cid[8][1] / 100;
    var flg = "";
    for (var PENNY = 0; PENNY < PENNY_n; PENNY++) {
        for (var NICKEL = 0; NICKEL < NICKEL_n; NICKEL++) {
            for (var DIME = 0; DIME < DIME_n; DIME++) {
                for (var QUARTER = 0; QUARTER < QUARTER_n; QUARTER++) {
                    for (var ONE = 0; ONE < ONE_n; ONE++) {
                        for (var FIVE = 0; FIVE < FIVE_n; FIVE++) {
                            for (var TEN = 0; TEN < TEN_n; TEN++) {
                                for (var TWENTY = 0; TWENTY < TWENTY_n; TWENTY++) {
                                    for (var HUNDRED = 0; HUNDRED < HUNDRED_n; HUNDRED++) {
                                        var totle = 0;
                                        totle = HUNDRED * 100 + TWENTY * 20 + TEN * 10 + FIVE * 5 + ONE + QUARTER * 0.25 + DIME * 0.1 + NICKEL * 0.05 + PENNY * 0.01;
                                        if (totle == change) {
                                            res.push(["ONE HUNDRED", HUNDRED * 100]);
                                            res.push(["TWENTY", TWENTY * 20]);
                                            res.push(["TEN", TEN * 10]);
                                            res.push(["FIVE", FIVE * 5]);
                                            res.push(["ONE", ONE]);
                                            res.push(["QUARTER", QUARTER * 0.25]);
                                            res.push(["DIME", DIME * 0.1]);
                                            res.push(["NICKEL", NICKEL * 0.05]);
                                            res.push(["PENNY", PENNY * 0.01]);
                                            flg = 'suc';
                                            break;
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }
    }
    if (flg != 'suc') {
        return 'Insufficient Funds';
    } else {
        return res;
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01], 0.01
// ["NICKEL", 2.05], 0.05
// ["DIME", 3.10], 0.1
// ["QUARTER", 4.25], 0.25
// ["ONE", 90.00], 1
// ["FIVE", 55.00], 5
// ["TEN", 20.00], 10
// ["TWENTY", 60.00],  20
// ["ONE HUNDRED", 100.00]] 100

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
