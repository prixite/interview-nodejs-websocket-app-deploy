#!/bin/bash

cd /home/ubuntu/test
sudo apt install npm
sudo npm install -g typescript
echo 'TEST_ENV_VARIABLE="amnazahid"' > .env