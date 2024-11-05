export const parseStarList = (data: string) => {
    const targets = [];
    const lines = data.split('\n');
  
    lines.forEach((line) => {
      if (!line.trim() || line.startsWith('#')) return;
  
      const tokens = line.split(/\s+/);
      const targetName = tokens[0];
      const ra = tokens.slice(1, 4).join(' ').trim();
      const dec = tokens.slice(4, 7).join(' ').trim();
      const equinox = tokens[7];
  
      targets.push({
        targetName,
        ra,
        dec,
        equinox,
      });
    });
  
    return targets;
  };