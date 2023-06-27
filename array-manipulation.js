```
function arrayManipulation(n, queries) {
      const arr = Array(n + 1).fill(0);

  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i];
    arr[a - 1] += k; 
    arr[b] -= k; 
  }

  let max = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    max = Math.max(max, sum);
  }

  return max;
}
```
