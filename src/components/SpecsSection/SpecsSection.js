import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { PiPlusCircleBold, PiMinusCircleBold } from 'react-icons/pi';

import jacketSpecs from '../../assets/images/jacket-specs.png';

import SpecsSectionLogic from './SpecsSectionLogic';
import Palette from '../../theme/palette';

function SpecsSection() {
  const { specs, openAccordionId, handleAccordionChange } = SpecsSectionLogic();
  const { NIGHT, STATE_GREY, RED } = Palette();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: 'row',
        },
        alignItems: 'center',
        maxWidth: '1100px',
        gap: {
          xs: 4,
          sm: '15%',
        },
      }}
    >
      <Box>
        {specs.map((spec, id) => {
          const selected = openAccordionId === id;
          return (
            <Accordion
              sx={{
                backgroundColor: 'transparent',
              }}
              elevation={0}
              expanded={selected}
              onChange={handleAccordionChange(id)}
              key={id}
            >
              <AccordionSummary
                expandIcon={
                  selected ? (
                    <PiMinusCircleBold color={RED} />
                  ) : (
                    <PiPlusCircleBold color={NIGHT} />
                  )
                }
                aria-controls={id + '-content'}
                id={id}
              >
                <Typography
                  color={selected ? 'primary' : NIGHT}
                  variant='body2'
                >
                  {spec.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={STATE_GREY} variant='body2'>
                  {spec.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <Box
        component='img'
        src={jacketSpecs}
        sx={{ width: { xs: '70vw', sm: '200%' }, maxWidth: '400px' }}
      />
    </Box>
  );
}

export default SpecsSection;
