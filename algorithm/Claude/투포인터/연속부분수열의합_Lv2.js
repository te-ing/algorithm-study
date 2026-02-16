/**
 * 연속 부분 수열의 합 (Lv.2)
 *
 * [문제 설명]
 * 양의 정수로 이루어진 배열 arr와 목표 합 S가 주어집니다.
 * 배열에서 연속된 부분 수열의 합이 S와 같은 경우의 수를 구하세요.
 *
 * [제한 사항]
 * - 1 <= arr.length <= 1,000,000
 * - 1 <= arr[i] <= 10,000
 * - 1 <= S <= 1,000,000,000
 *
 * [입출력 예]
 * arr = [1, 2, 3, 4, 5], S = 5  →  2
 *   - [2, 3], [5]
 *
 * arr = [1, 1, 1, 1, 1], S = 3  →  3
 *   - [1, 1, 1] (인덱스 0~2), [1, 1, 1] (인덱스 1~3), [1, 1, 1] (인덱스 2~4)
 *
 * arr = [2, 4, 2, 6, 8, 4, 2], S = 12  →  3
 *   - [2, 4, 2, 6] (인덱스 0~3) 은 합이 14이므로 X
 *   - [4, 2, 6] (인덱스 1~3), [6, 8] (인덱스 3~4)은 합이 12와 14이므로 [4, 2, 6]만 해당 -> 다시 계산
 *   - [4, 2, 6] = 12 ✓, [2, 6, 4] = 12 ✓, [8, 4] = 12 ✓
 *
 * [힌트]
 * - 배열의 원소가 모두 양의 정수라는 점에 주목하세요.
 * - 투 포인터(Two Pointers) 기법을 활용해 보세요.
 */

function solution(arr, S) {
  let left = 0;
  let right = 0;
  let sum = arr[0];
  let result = 0;

  while (right < arr.length) {
    if (left > right) {
      sum += arr[++right];
    } else if (sum === S) {
      result++;
      sum += arr[++right];
      sum -= arr[left++];
    } else if (sum > S) {
      sum -= arr[left++];
    } else if (sum < S) {
      sum += arr[++right];
    }
  }
  return result;
}
function bestSolution(arr, S) {
  let left = 0;
  let sum = 0;
  let result = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= S) {
      if (sum === S) result++;
      sum -= arr[left++];
    }
  }

  return result;
}
// 테스트
console.log(solution([1, 2, 3, 4, 5], 5)); // 2
console.log(solution([1, 1, 1, 1, 1], 3)); // 3
console.log(solution([2, 4, 2, 6, 8, 4, 2], 12)); // 3
