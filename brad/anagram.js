function isAnagram(str1, str2){
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')// equal all , what outer bracers
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = isAnagram;