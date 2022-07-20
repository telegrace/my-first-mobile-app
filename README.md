# my-first-mobile-app

### Install packages

`npm install`
yarn works too

### Check neccessary dependancies are installed

`yarn run appium-doctor`

Install Java if needed, recommended (link)[https://www.linuxuprising.com/2021/09/how-to-install-oracle-java-17-lts-on.html]
To get where Java is `java -XshowSettings:properties -version 2>&1 > /dev/null | grep 'java.home'`

### Install Android Studio

Follow the first two screen shots from these (instructions)[https://docs.expo.dev/workflow/android-studio-emulator/]

Open up terminal and change the following to your the correct path to the Android Sdk Location

`echo 'export ANDROID_HOME=/home/grace/Android/Sdk' >> ~/.bash_profile`
`echo 'export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools' >> ~/.bash_profile`

refresh in the terminal
`source ~/.bash_profile`

run `adb` to check it's running

### Create a device

Open Android Studio and find the tiny mobile icon
Click it to open the Device Manager
Create device > Phone > Pixel 4 > Q (download first) > AVD Name "Pixel4_API_29"
Click Play

In the terminal you should see there us a running emulator
`abd devices`

### Run the app with Android Studio and expo

`expo start --android`

Check Android Studio and you should see the phone
You can undock the phone to give you move ease of access in Android Studio
You can also download Expo Go on your android device and scan the QR code in the terminal to run the app on your phone

You can try changing the colour of the background to see if it will show up in your devices.
