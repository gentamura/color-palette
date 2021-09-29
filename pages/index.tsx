import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

// 背景色とテキストカラーの関係
// https://stackoverflow.com/a/3943023

const calLightness = (hex: string) => {
  const c = parseInt(hex, 16) / 255.0;

  if (c <= 0.03928) {
    return c / 12.92;
  } else {
    return Math.pow((c + 0.055) / 1.055, 2.4);
  }
};

const lightness = (colorCode: string) => {
  const num = colorCode.replace('#', '');
  const r = calLightness(num[0] + num[1]);
  const g = calLightness(num[2] + num[3]);
  const b = calLightness(num[4] + num[5]);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const Palette = ({ color }: { color: string }) => {
  const isLight = lightness(color) > 0.179;

  return (
    <div className={isLight ? styles.baseBlack : styles.baseWhite} style={{ backgroundColor: color }}>
      {color}
    </div>
  )
};

const types = [
  {
    type: 'Red',
    colorCode: (num: string) => `#${num}0000`,
  },
  {
    type: 'Green',
    colorCode: (num: string) => `#00${num}00`,
  },
  {
    type: 'Blue',
    colorCode: (num: string) => `#0000${num}`,
  },
  {
    type: 'Magenta',
    colorCode: (num: string) => `#ff${num}ff`,
  },
  {
    type: 'Yellow',
    colorCode: (num: string) => `#ffff${num}`,
  },
  {
    type: 'Chien',
    colorCode: (num: string) => `#${num}ffff`,
  },
  {
    type: 'Grey',
    colorCode: (num: string) => `#${num}${num}${num}`,
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      {
        types.map(({ type, colorCode }) => (
          <div key={type}>
            {type}

            {Array(256).fill(0).map((_, i) => {
              const hex = i.toString(16);
              const num = hex.length === 1 ? `0${hex}` : hex;
              const color = colorCode(num);

              return <Palette key={color} color={color} />;
            })}
          </div>
        ))
      }
    </div>
  );
}

export default Home;
