import { Image, List } from './Gallery.styled';

export const Gallery = ({ images }) => {
  return (
    <List>
      {images.map((item, idx) => (
        <li key={idx}>
          <Image src={item} alt={idx} />
        </li>
      ))}
    </List>
  );
};
