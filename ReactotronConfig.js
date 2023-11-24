import Reactotron from 'reactotron-react-native'
import mmkvPlugin from "reactotron-react-native-mmkv"
import { storage } from './src/services/storage'

Reactotron
    .configure({
        name: 'BRQ Movies',
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(mmkvPlugin({ storage }))
    .connect() // let's connect!