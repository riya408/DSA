function anagram(str, str1) {
  let freq = {};
  let freq1 = {};
  if (str.length !== str1.length) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    freq[x] = freq[x] || 0 + 1;
  }
  for (let i = 0; i < str1.length; i++) {
    let y = str1[i];
    freq1[y] = freq1[y] || 0 + 1;
  }
  for (key in freq) {
    if (!key in freq1) {
      return false;
    }
    if (freq1[key] !== freq[key]) {
      return false;
    }
  }

  return true;
}
console.log(anagram("abc", "acba"));
