function parseINI(iniConfig) {
  let entryPattern = /(\w*)=(\w*)/;
  const configEntries = iniConfig.split(/\r?\n/g);
  const configDictionary = {};
  for(let entry of configEntries) {
    console.log(entryPattern.exec(entry));
  }
};

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));