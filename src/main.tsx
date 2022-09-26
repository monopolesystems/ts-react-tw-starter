import React from 'react'
import './index.css'
import { Example } from './example'

import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

if (!container) throw new Error('Could not find root element with id "root"')

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
)
