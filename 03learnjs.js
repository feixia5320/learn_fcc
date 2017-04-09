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
