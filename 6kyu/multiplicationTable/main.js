function multiplicationTable(size){
    const res = [];
    for (let i = 1; i <= size; i++) {
      const row = [];
      for (let j = 1; j <= size; j++)
        row.push(i * j);
      res.push(row);
    }
    return res;
}