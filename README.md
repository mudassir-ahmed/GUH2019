Inspired by CityAirbus, and looking towards the future of personal transport, we developed a web application to represent the dashboard for the Airbus CityAirbus quadrotor. Using two devices in tandem, a tablet would display information about the journey (representing the on-board dashboard!), which could be controlled using a mobile device, controlling functions such as temperature and autonomous flight. This project was developed at GreatUniHack 2019 (Hackathon).

## Demo

![Dashboard](/press/demo--dash.png "Dashboard")

See what the aircraft is seeing whilst you control it using the device orientation sensors in your mobile device...
![alt text](/press/demo--camera.png "Control the aircraft using your mobile device")

You can also see a video demo at https://youtu.be/ZHqwPK20-Q4.

## Installation

In-depth guide coming soon. However, the main ideas are running the web socket server and then the front-end vue application. Then make sure you change the `URL` and `PORT` value at `https://github.com/mudassir-ahmed/GUH2019/blob/master/vue-app/src/assets/project-config.json` to one representing the web socket server you are running. The web socket server can be found in `/dashboard-server/`.

## About

Please also see https://devpost.com/software/cityairbus-dashboard (and please leave a like if you enjoyed the project or looking at the repo).

### Tech stack (and/or keywords)

HTML5, CSS3, JavaScript ES6+, Node.js, web sockets, Docker, Bash, Vue.js, SCSS, BEM, Git, Ubuntu, pm2, Adobe XD

### Team

Mudassir Ahmed - Project Leader / Developer

Adam Hoskinson - Developer

Haodong Hu - Developer

guocongyun - Developer

🚀 Designed and developed as a team

### Where next?

- The proect is ready to be integrated in Aircrafts or more realisticly Drone APIs
- The UI can be used in home automation systems

### Designs

You can find these in this repo

### Developer Report

Inspired by CityAirbus, and looking towards the future of personal transport, we developed a web application to represent the dashboard for the Airbus CityAirbus quadrotor. Using two devices in tandem, a tablet would display information about the journey (representing the on-board dashboard!), which could be controlled using a mobile device, controlling functions such as temperature and autonomous flight.

We designed the initial concepts for our program using Adobe XD to rapidly build out our layouts and design ethos. To implement our design, we decided as a team to utilise a socketed web application. We used HTML and JavaScript(VueJS to handle components) to build the design and function of the website, and server requests handled using Node.js and socket.io. We also hosted our application on a ubuntu server by using pm2, Docker and bash scripts.

In our original designs, we planned to allow the user to simulate controlling the vehicle using their phones gyroscope however, due to security updates in current web browsers, we were not able to implement this without using a https server (This took a large chunk of our time). As it would have been too time consuming during the hackathon to attain an ssl certficate, we were forced to deprecate this code. We also envisioned using a media api to allow music playback to be controlled and this too could not be implemented due to security restrictions.

From the offset, this project was a learning experience for our group. Meeting for the first time at the event, it was two of our member's first hackathons, introducing them to collaborative design and coding. We have also gained knowledge in HTML and JavaScript programming, and learned new concepts such as Node.js and socket programming. For some of our members, this was their first Client-Server project, learning to troubleshoot and debug issues related to these tasks. We were also new to using Adobe XD in the design of our application, which helped us produce a more professional UX.
