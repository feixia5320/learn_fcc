//--------------------字符串逆序----------------
function reverseString(str) {

  var arr = str.split('');
  arr.reverse();
  var tmp = arr.join('');
  return tmp;
}

reverseString("hello");

//-----------------一个整数的阶乘----------------
function factorialize(num) {
  var total =1;
  while(num > 1){
    total = total * num;
    num--;
  }
  return total;
}

factorialize(5);

//------------------字符串是回文----------------
function palindrome(str) {
  var tmp=[];
  var t_str;
  t_str = str.replace(/\,|\s|\.|\-|\_/gi,'');
  t_str = t_str.replace(/\(/g,')');
  t_str = t_str.toLowerCase();
  var t_str2 = reverseString(t_str);
  if(t_str2==t_str){
    return true;
  }else{
    return false;
  }
  
}

function reverseString(str) {
  var arr = str.split('');
  arr.reverse();
  var tmp = arr.join('');
  return tmp;
}

palindrome("0_0 (: /-\ :) 0-0");

//----------------句子中最长的单词----------------
function findLongestWord(str) {
  var arr = [];
  arr = str.split(' ');
  var arr_len = [];
  var max = 0;
  arr.forEach(getlength);
  arr_len.forEach(getMax);

function getlength(val,index,arr) {
    arr_len[index] = val.length;
    return arr_len;
}
function getMax(val,index,arr) {
    if(val > max){
      max = val;
    }
    return max;
}

  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//--------------单词首字母都大写-------------

function titleCase(str) {
  var arr = [];
  var str2 = str.toLowerCase();
  arr = str2.split(' ');
  arr.forEach(setUPCase);

  var str3 = arr_new.join(' ');
  return str3;
}

var arr_new =[];

function setUPCase(val,index,arr){
  var tmp = val.charAt(0).toUpperCase();
  tmp +=val.substr(1);
  arr_new[index] = tmp;
}

titleCase("sHoRt AnD sToUt");

//-------------找到每个小数组中的最大值------------
function largestOfFour(arr) {
  var n = arr.length;
  var arr_new = [];
  for(var i=0; i<n; i++){
    arr[i].forEach(getMax);
    arr_new[i] = max;
    max = 0;
  }
  return arr_new;
}

var max = 0;
function getMax(val,index,arr) {
    if(val > max){
      max = val;
    }
    return max;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//------------------------指定的字符串(target)结尾------------
function confirmEnding(str, target) {
  var target_len = target.length;
  var str_len = str.length;
  var tmp = '';
  tmp = str.substr(str_len - target_len);
  if (tmp == target) {
    return true;
  }else{
    return false;
  }
}

confirmEnding("Bastian", "n");

//----------------重复一个指定的字符串 num次--------------
function repeat(str, num) {
  if (num<0) {
    return '';
  }
  var tmp=str;
  for (var i = 0; i < num - 1; i++) {
    tmp +=str;
  }
  return tmp;
}

repeat("abc", 3);
//----------------截断一个字符串---------------

function truncate(str, num) {
  var tmp = '';
  if (num <= 3) {
    tmp = str.substr(0,num);
    tmp +='...';
    return tmp;
  }else if(str.length <= num){
    return str;
  }
  tmp = str.substr(0,num - 3);
  tmp +='...';
  return tmp;

}

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

//-------------数组arr按照指定的数组大小size分割成若干个数组块-------
function chunk(arr, size) {
  var a =0,b = 0;
  b = size;
  var arr_tmp = [];
  var len = arr.length/size;
for (var i = 0; i < len; i++) {
  var tmp = [];
  tmp = arr.slice(a,b);
  arr_tmp.push(tmp);
  a += size;
  b += size;
  }
    
  return arr_tmp;
}

chunk([0, 1, 2, 3, 4, 5], 3);

//-------------一个数组被截断n个元素后还剩余的元素-----------------
function slasher(arr, howMany) {
  var arr_tmp = [];
  arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2);

//-------------第一个字符串元素包含了第二个字符串元素的所有字符--------
function mutation(arr) {
  var str = '';
  var str2 = '';
  str = arr[0];
  str = str.toLowerCase();
  str2 = arr[1];
  str2 = str2.toLowerCase();

  var n =0;
  var count = 0;
  var str2_len = str2.length;
  for (var i = 0; i < str2_len; i++) {
    n = str.indexOf(str2.charAt(i));
    if ( n == -1 ) {
      return false;
    }else{
      count++;
  }
  if (count == str2_len) {
    return true;
  }
  }
}

mutation(["hello", "hey"]);

//---------------删除数组中的所有假值------------
function bouncer(arr) {
  var arr_tmp = [];
  arr_tmp = arr.filter(getNull);
  return arr_tmp;
}

function getNull(val,index,arr){
  return Boolean(val);
}

bouncer([7, "ate", "", false, 9]);

//---------------删除第一个数组中的指定元素------------
function destroyer(arr) {
  var len = 0;
  len = arguments.length;
  var arr_tmp= arr;
  for (var i = 0; i < len -1; i++) {
    a = arguments[i+1];
    arr_tmp = arr_tmp.filter(del);
    count++;
  }
  return arr_tmp;
}
var count =0;
function del(val,index,arr){
  if (val == a) {
    return false;
  }else{
    return true;
  }
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//---------数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引
function where(arr, num) {
  arr.push(num);
  arr.sort(setsort);
  a = num;
  var b = arr.findIndex(getInd);

  return b;
}
function setsort(a,b){
  return a-b;
}
function getInd(val,index,arr){
  return val >= a;
}

where([5, 3, 20, 3], 5);
//-----------移位密码也就是密码中的字母会按照指定的数量来做移位----

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
      new_chr = replace_code(str.charAt(i),13);
      str2 +=  new_chr;
    }else if(str.charCodeAt(i) >= n_charcode && str.charCodeAt(i) <=z_charcode){
      new_chr = replace_code(str.charAt(i),-13);
      str2 +=  new_chr;
    }else{
      str2 +=  str.charAt(i);
    }
  }
  
  return str2;
}

function replace_code(a,b){
  var n = a.charCodeAt(0);
  return String.fromCharCode(n + b);
}

rot13("SERR PBQR PNZC");


//---------返回这两个数字和它们之间所有数字的和---------
function sumAll(arr) {
  arr.sort(function(a,b){return a-b});
  var n = arr[1] - arr[0];
  var total = arr[0];
  var count = 1;
  for (var i = 0; i < n; i++) {
    total +=arr[0] + count;
    count++;

  }
  return total;


}

sumAll([5, 10]);


//-----------最大公约数-----------
function big(){
	
	var u=42;
	var v=23;
	var temp=v;
	while (v!=0)
	{
		temp =u%v;
		u=v;
		v=temp;
	}
	alert("最大公约数是"+u);
}
big()

//-------------数字反转---------------
function reversenum(){
	

var num = 23871;
var reverse = 0;
do{
	var lastdigit = num % 10;
	reverse = (reverse*10) + lastdigit;
	num =num / 10;
	
}while(num >0 );

return reverse;
}

reversenum();

//--------------找两个数组中独有的对象----------
function diff(arr1, arr2) {
	var tmp = [];
	tmp =tmp.concat(compar(arr1,arr2));
	tmp = tmp.concat(compar(arr2,arr1));
	return tmp;
}

function compar(arr1, arr2) {
	var newarr = [];
	arr1.forEach(function(item, index, arr) {
		var cont = 0;
		var len = arr2.length;
		for(var i = 0; i < len; i++) {
			if(item != arr2[i]) {
				cont++;
			} else {
				break;
			}
		}
		if(cont == len) {

			newarr.push(item);
		}
	});

	// Same, same; but different.
	return newarr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//---------------------遍历对象，查找目标对象--------------
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

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

//--------------------替换句子中的给定字符串---------------
function myReplace(str, before, after) {
    var strtmp = "";
    if (before.charCodeAt(0) < "a".charCodeAt(0)) {
        strtmp = after.charAt(0).toUpperCase();
        var tmp = after.substr(1);
        strtmp += tmp;

        after = strtmp;
    }
    var tmp2 = str.replace(before, after);

    return tmp2;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("Let us go to the store", "store", "mall")

//---------------一个英文单词的第一个辅音或辅音丛移到词尾-------------------
function translate(str) {
    var str1 = "";
    var arr1 = [];
    var n = 0;
    var tmp = "";
    if (yuanyin(str[0])) {
        str = str + "way";
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
        tmp = arr1.join("");
        str = str.substr(n);
        str += tmp;
        str += "ay";
        return str;
    }



    return str;
}

function yuanyin(a) {
    var arr = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < 5; i++) {
        if (a == arr[i]) {
            return true;
        } else {
            continue;
        }

    }
    return false;
}


translate("consonant");

//------------------字符转换，生物中碱基对转换--------------
function pair(str) {
    var arr1 = [];
    var tmp = [];
    var str2 = "";



    arr1 = str.split("");
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
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    var str = "";
    str = pair[a];
    return str;
}

pair("GCG");


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

