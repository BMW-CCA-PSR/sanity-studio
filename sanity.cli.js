// sanity.cli.js
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'clgsgxc0',
    dataset: 'production'
  },
  studioHost: 'https://bmwccapsr.sanity.studio/'
})
