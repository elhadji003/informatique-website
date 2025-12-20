import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage({ contenue }) {
  return (
    <div className="mt-6">
      {contenue.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography component="div" className="text-sm text-gray-700">
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
