import { JobInfo } from 'components/JobInfo/JobInfo';
import { Navigate, useLocation } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { BsBookmark, BsShareFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Button, Container, Item, List, StyledLink } from './Details.styled';
import { Options } from 'components/Options/Options';
import { Gallery } from 'components/Gallery/Gallery';
import { MapCard } from 'components/MapCard/MapCard';
import { useEffect } from 'react';

export const Details = () => {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!state) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <div>
        <Section title="Job Details">
          <List>
            <Item>
              <BsBookmark /> Save to my list
            </Item>
            <Item>
              <BsShareFill /> Share
            </Item>
          </List>

          <Button>Apply now</Button>
          <JobInfo item={state.item} />
          <Button>Apply now</Button>
        </Section>
        <Section title="Additional Info">
          <Options
            options={state.item.employment_type}
            title="Employment type"
            params={{
              background: 'rgba(161, 177, 219, 0.317343)',
              border: 'rgba(85, 105, 158, 0.3)',
              color: '#55699E',
            }}
          />
          <Options
            options={state.item.benefits}
            title="Benefits"
            params={{
              background: 'rgba(255, 207, 0, 0.15)',
              border: '#FFCF00',
              color: '#988B49',
            }}
          />
        </Section>
        <Section title="Attached images">
          <Gallery images={state.item.pictures} />
        </Section>
        <StyledLink to="/">
          <MdOutlineKeyboardArrowLeft size={24} /> RETURN TO JOB BOARD
        </StyledLink>
      </div>
      <MapCard item={state.item} />
    </Container>
  );
};
