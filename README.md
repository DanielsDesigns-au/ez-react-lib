# Welcome to `ez-react-lib`

### About

`Description` - Helper package containing a variety of react based components to speed up and ease the development process.

`Author` - [Daniel Scott](https://github.com/DanielsDesigns-au)

### Features

- Typescript support 💪
- Testing support via jest 🧪
- Easy to use 🛠️
- Time saver ⌚

### Usage

```typescript
// Import component at head of file
import { Card } from 'ez-react-lib';
import styles from './index.module.scss';

// Render component inside jsx body
const Home: NextPage = ({ data }) => {
  const handleClick = () => {
    if (isMember) {
      window.location.push('/members-only');
    }
  };

  return (
    <>
      <Card
        name={'Merch to Sell'}
        category={'Shirts'}
        price={'420'}
        imgSrc={'your/mums/house'}
        classOverride={styles.sexyCard}
        onClick={handleClick}
      />
    </>
  );
};

export default Home;
```
