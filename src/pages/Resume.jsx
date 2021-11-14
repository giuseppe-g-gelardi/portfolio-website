import React from 'react'
import { Container, Typography, Link } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// component to download resume pdf
// import ResumeDownload from '../components/ResumeDownload'

const useStyles = makeStyles({
  field: {
    marginTop: 50,
    marginBottom: 40,
  },
  heading: {
    display: 'flex',
    fontWeight: 600,
    flexGrow: 1,
  },
 
})


export default function Resume() {
  const theme = useTheme();
const classes = useStyles()

  const logger = () => {
    console.log(theme)
  }


  return (
    <div>
      {/* <ResumeDownload /> */}
    <button onClick={() => logger()}>logger</button>
    <Container className={classes.field}>
      <Typography className={`${classes.heading} ${classes.breakpoints}`} color='primary' variant='h2'> 
        Giuseppe Gelardi
      </Typography>

      <Typography style={{marginTop: 10, display: 'flex'}}>
        United States Army Veteran <br/>
        The Colony, Texas 75056
      </Typography>

      <Typography>
        Email: giuseppegelardi@icloud.com <br/>
        GitHub: <Link href='https://github.com/giuseppe-g-gelardi' color='secondary'>giuseppe-g-gelardi</Link><br/>
        LinkedIn: <Link href='https://www.linkedin.com/in/giuseppe-gelardi' color='secondary'>giuseppe-gelardi</Link><br/>
      </Typography>
    </Container>
    <Container>
      <Typography variant='h5' color='primary'>
        SKILLS
      </Typography>
      <Typography variant='h6'>
        Programming Languages and Technologies 
      </Typography> 
      <Typography>
        <ul>
          <li>Javascript, Typescript, React js, Node js, Python, Django, HTML/HTML5, CSS,</li>
          <li>Bootstrap, MaterialUI, JSON, Express js, JQuery, NPM, MongoDB, MySQL</li>
          <li>TOOLS/IDE's: Git, GitHub, Zoom, Slack, VSCode, IntelliJ IDEA</li>
          <li>Interests: Full-Stack Development, Web Development, UI/UX Design, Backend Development</li>
        </ul>
      </Typography>
      <Typography variant='h5' color='primary'>
        Education
      </Typography>
      <Typography variant='h6'>
        devCodeCamp
      </Typography> 
      <Typography variant='h6'display='flex' style={{flexGrow: 1}}>
        Microsoft Course
        </Typography> 
      <Typography>
        (06/2021 - 09/2021)
      </Typography>
      

    </Container>
    

    </div>
  )
}
