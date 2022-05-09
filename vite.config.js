import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@action': path.resolve(__dirname, './src/action'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@component': path.resolve(__dirname, './src/component'),
            '@page': path.resolve(__dirname, './src/app'),
            '@constant': path.resolve(__dirname, './src/constant'),
            '@tool': path.resolve(__dirname, './src/tool'),
            '@store': path.resolve(__dirname, './src/store'),
            '@style': path.resolve(__dirname, './src/style'),
            '@resource': path.resolve(__dirname, './src/resource'),
            '@media': path.resolve(__dirname, './src/media'),
            '@hook': path.resolve(__dirname, './src/hook'),
        }
    },
    plugins: [react()]
})