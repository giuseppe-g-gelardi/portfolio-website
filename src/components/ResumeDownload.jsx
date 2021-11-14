import React from 'react'
import { saveAs } from 'file-saver'

export default function ResumeDownload() {

  const savefile = () => {
    saveAs(
      'https://github.com/giuseppe-g-gelardi/portfolio-website/blob/main/src/resume/resume.pdf'
    )
  }

  return (
    <div>
      <button onClick={savefile}>download</button>
    </div>
  )
}

