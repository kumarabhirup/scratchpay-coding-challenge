const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

require('./lib/__mocks__/localStorageMock')

enzyme.configure({ adapter: new Adapter() })
