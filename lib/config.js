import getConfig from 'next/config'
import axios from 'axios'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
const mergedConfig = { ...publicRuntimeConfig, ...serverRuntimeConfig }
export default mergedConfig
