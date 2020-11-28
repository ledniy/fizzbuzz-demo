# FizzBuzz demo application

Fizz buzz is a group word game for children to teach them about division. ... Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".

## How-to

### Run public image from hub.docker.com

`docker run --rm -d -p 3000:3000 ledniy:/fizzbuzz-demo:latest`

### Development mode

1. Install nodemon `npm i -g nodemon`
2. Install dependencies `npm i`
3. Run app `nodemon src/boot.js`

### Tests

To run tests just execute `npm run test`

### Build and deploy

1. Setup [docker](https://docs.docker.com/get-docker/) and [gcloud](https://cloud.google.com/sdk/docs/install)
2. Build image `docker build --tag gcr.io/${projectName}/fizzbuzz-demo:latest .`
3. Run locally `docker run --rm -d -p 3000:3000 gcr.io/${projectName}/fizzbuzz-demo:latest`
4. Push image to registry (gcr in our case) `docker push gcr.io/${projectName}/fizzbuzz-demo:latest`
5. Deploy to Cloud Run `gcloud run deploy ${serviceName} --image gcr.io/${projectName}/fizzbuzz-demo:latest --platform managed`

### Usage example

```bash
curl --location --request POST 'http://localhost:3000/fizzbuzz' \
  --header 'Content-Type: application/json' \
  --data-raw '{ "count": 15 }'
```

### TODO:

- [ ] Linter
- [ ] Prettier
- [ ] CI/CD
