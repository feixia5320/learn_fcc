//�ַ�������
function reverseString(str) {

  var arr = str.split('');
  arr.reverse();
  var tmp = arr.join('');
  return tmp;
}

reverseString("hello");

//һ�������Ľ׳�
function factorialize(num) {
  var total =1;
  while(num > 1){
    total = total * num;
    num--;
  }
  return total;
}

factorialize(5);