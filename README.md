# BRQ Movies

## Tecnologias

- React Native CLI
- Styled Components
- React Navigation
- React Hook Form
- MMKV
- Zod
- Phosphor Icons
- FlashList
- FastImage
- Jest

## Como executar

- Criar o arquivo de variáveis de ambiente
```shell
cp .env.example .env
```
- Criar definir a API Key de acesso a api do IMDB, que pode ser obtida no [site oficial](https://www.themoviedb.org).
- Instalar as dependencias
```shell
npm i
// ou
yarn
```
- Executar em modo localmente
```
npm run android
npm run start
```

<!--
https://instamobile.io/android-development/generate-react-native-release-build-android/

 ```shell
keytool -genkey -v -keystore <keystore_name_file>.keystore -alias <alias_keystore_key> -keyalg RSA -keysize 2048 -validity 10000
mv <keystore_name_file>.keystore android/app

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

cd android
./gradlew assembleRelease
``` -->
