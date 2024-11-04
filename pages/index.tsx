// pages/index.tsx
import { Guider } from '../components';
import { Target } from '../components'

const starList = `
# Sample star list
Sirius        06 45 08.9 -16 42 58.0 2000.00
Canopus       06 23 57.1 -52 41 44.0 2000.00
Arcturus      14 15 39.7 +19 10 56.7 2000.00
Vega          18 36 56.3 +38 47 01.3 2000.00
Capella       05 16 41.4 +45 59 52.0 2000.00
Rigel         05 14 32.3 -08 12 06.7 2000.00
Procyon       07 39 18.1 +05 13 29.6 2000.00
Betelgeuse    05 55 10.3 +07 24 25.4 2000.00
Aldebaran     04 35 55.2 +16 50 12.4 2000.00
Antares       16 5 10.0 -26 25 55.0 2000.00
`;

const parseStarList = (data: string) => {
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

const Home = () => {
  const parsedStarList = parseStarList(starList);

  return (
    <div>
      <h1>Telescope Control</h1>
      <Guider />
      <h1>Target</h1>
      <Target starList={parsedStarList} />
    </div>
  );
};

export default Home;
