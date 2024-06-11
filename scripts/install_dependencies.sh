#!/bin/bash

cd /home/ubuntu
sudo apt update
sudo apt install -y curl software-properties-common
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

