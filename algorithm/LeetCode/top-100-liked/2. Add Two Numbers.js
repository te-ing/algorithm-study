/**
 * @링크
 * https://leetcode.com/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * Node를 진행하면서 10 ** cnt, cnt++ 을 통해 숫자를 뒤집는다.
 * 최대 100의 자리까지 진행할 수 있어서 BigInt를 사용하였다.
 * @다른사람의_풀이
 * 뒤집는 과정 없이 10의 자리만 넘는 상황을 처리하여 O(n)으로 진행하였다.
*/

var addTwoNumbers = function(l1, l2) {
  let l1Num = 0n;
  let l2Num = 0n;
  let cnt = 0n;
  while(l1){
      l1Num+= BigInt(l1.val) * (10n ** cnt);
      cnt++;
      l1 = l1.next;
  }
  cnt = 0n;
  while(l2){
      l2Num+= BigInt(l2.val) * (10n ** cnt);
      cnt++;
      l2 = l2.next;
  }
  
  let arr = String(l1Num+l2Num).split('');
  const head = new ListNode();
  let curr = head;
  while(arr.length){
      val = Number(arr.pop());
      curr.val = val;
      curr.next = arr.length ? new ListNode() : null;
      curr = curr.next;
  }
  return head
};
