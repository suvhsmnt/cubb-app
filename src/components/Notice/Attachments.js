import React, { useEffect } from 'react';
// nodejs library that concatenates classes
import ScrollBar from 'components/ScrollBar/ScollBar';
import Button from 'components/CustomButtons/Button.js';
import { ToastContainer, toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function Attachments(props) {
  const [attachments, setAttachments] = React.useState(props.attachments);

  useEffect(() => {
    setAttachments(props.attachments);
  }, [props.attachments]);

  return (
    <ScrollBar height={550}>
      <ToastContainer />
      <div>
        {attachments != undefined && Object.entries(attachments).length == 0 && (
          <div style={{ textAlign: 'center', color: 'red', fontSize: '150%' }}> Sorry no data found.</div>
        )}
        {attachments.map((attachment) => (
          <Box boxShadow={3} bgcolor="background.paper" m={2} p={1}>
            <Grid container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Grid item xs={12} sm={12} md={6} lg={6} alignContent="flex-start" justify="flex-start">
                {attachment.title}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'end' }}>
                <Button color="custom" target="_blank" href={attachment.downloadLink}>
                  Download
                </Button>
              </Grid>
            </Grid>
          </Box>

          // <div
          //   className="rounded-0 shadow bg-white
          //  p-1"
          // >
          //   <GridContainer justify="center" color="info">
          //     <GridItem xs={12} sm={12} md={4} lg={4}>
          //       {event.title}
          //     </GridItem>
          //     <GridItem xs={12} sm={12} md={4} lg={4}>
          //       {event.fileType}
          //     </GridItem>
          //     <GridItem xs={12} sm={12} md={4} lg={4}>
          //       <Button onClick={() => console.log('test')} color="warning" target="_blank">
          //         Download
          //       </Button>
          //     </GridItem>
          //   </GridContainer>
          // </div>
        ))}
      </div>
    </ScrollBar>
  );
}
