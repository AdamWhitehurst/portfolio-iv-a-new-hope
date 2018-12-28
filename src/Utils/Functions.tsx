export function GenerateRandomNums (count: number): number[] {
  const nums: number[] = [];
  for (let i = 0; i < count; i++) {
    nums.push(Math.random() * 100);
  }
  return nums;
}