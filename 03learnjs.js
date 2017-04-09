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