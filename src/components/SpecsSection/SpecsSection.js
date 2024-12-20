import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { PiPlusCircleBold, PiMinusCircleBold } from 'react-icons/pi';

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
        alignItems: 'start',
        maxWidth: '1100px',
        gap: 3,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxwidth: '500px',
        }}
      >
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
                <Box
                  component='img'
                  src={specs[openAccordionId].image}
                  sx={{
                    position: 'inline',
                    display: { xs: 'block', sm: 'none' },
                    width: '100%',
                    right: 0,
                    marginBottom: 2,
                  }}
                />
                <Typography color={STATE_GREY} variant='body2'>
                  {spec.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <Box
        sx={{
          width: '100%',
          flex: 1,
        }}
      />
      <Box
        component='img'
        src={specs[openAccordionId].image}
        sx={{
          position: { xs: 'inline', sm: 'absolute' },
          display: { xs: 'none', sm: 'inline' },
          width: { xs: '100%', sm: '50%' },
          right: 0,
          transform: {
            xs: '',
            sm:
              'translateY(-' +
              ((openAccordionId / specs.length) * 100)
                .toString()
                .split('.')[0] +
              '%)',
          },
          top:
            ((openAccordionId / specs.length) * 100).toString().split('.')[0] +
            '%',
          transition: 'top 0.4s',
        }}
      />
    </Box>
  );
}

export default SpecsSection;
