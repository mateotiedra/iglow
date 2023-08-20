import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { PiPlusCircleBold, PiMinusCircleBold } from 'react-icons/pi';

import FAQSectionLogic from './FAQSectionLogic';
import Palette from '../../theme/palette';

function FAQSection() {
  const { questions, openAccordionId, handleAccordionChange } =
    FAQSectionLogic();
  const { NIGHT, STATE_GREY, RED } = Palette();

  return (
    <Box>
      {questions.map((spec, id) => {
        const selected = openAccordionId === id;
        return (
          <Accordion
            sx={{
              backgroundColor: 'transparent',
            }}
            elevation={0}
            expanded={selected}
            onChange={handleAccordionChange(id)}
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
              <Typography color={selected ? 'primary' : NIGHT} variant='body2'>
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
  );
}

export default FAQSection;
