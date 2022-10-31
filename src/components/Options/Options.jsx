import { List, Title } from './Options.styled';
import { Option } from 'components/Option/Option.styled';

export const Options = ({ options, title, params }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <List>
        {options.map((item, idx) => (
          <li key={idx}>
            <Option {...params}>{item}</Option>
          </li>
        ))}
      </List>
    </>
  );
};
