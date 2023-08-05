function findUniq(arr) {
    const formatted = arr.map(str => {
        const arr = str.trim().toLowerCase().split('');
        return [...new Set(arr)].sort().join('');
    });
  
    for (let i = 0; i < formatted.length; i++) {
        if (formatted.indexOf(formatted[i]) === formatted.lastIndexOf(formatted[i])) {
            return arr[i];
        }
    }
}