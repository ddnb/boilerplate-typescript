import { spawn } from 'child_process'
import SuperTest from 'supertest'
import Path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import main from './main.js'
import { createRequire } from 'module'
const require = createRequire(import.meta.url) // To use require in an ES module, you need to create a function to handle it:

describe('Example Test', function () {
  it('should GET / with 200 OK', function () {
    return SuperTest(main(0))
      .get('/')
      .expect(response => {
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Hello, World!')
      })
  })

  it('should init without errors', async function () {
    process.env.PORT = '0'

    const dir = dirname(fileURLToPath(import.meta.url))
    const index = Path.resolve(dir, 'index.ts')
    const tsNodePath = Path.dirname(require.resolve('ts-node'))
    const tsNodeExe =
      process.platform === 'win32'
        ? Path.resolve(tsNodePath, '../../.bin/ts-node.cmd')
        : Path.resolve(tsNodePath, '../../.bin/ts-node')

    console.log(`Resolved ts-node path: ${tsNodeExe}`)

    if (!fs.existsSync(tsNodeExe)) {
      throw new Error(`ts-node executable not found at ${tsNodeExe}`)
    }

    const proc = spawn(tsNodeExe, [index])

    proc.on('error', err => {
      console.error('Failed to start subprocess:', err)
    })

    expect(proc.pid).toBeDefined()

    process.kill(proc.pid || 0, 'SIGTERM')
  })
})
