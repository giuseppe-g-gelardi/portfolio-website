import React from 'react'
import resume from '../resume/resume.pdf'

export default function ResumeDownload() {

  const data = resume


  return (
    <div>
      <a href={data} download>
        <button>download resume</button>
      </a>
    </div>
  )
}

