import path from 'path'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { telefunc } from 'telefunc/vite'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), vike(), telefunc()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  }
}

export default config
