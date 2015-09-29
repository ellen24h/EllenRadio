echo "pull from git"
git pull origin master

echo "npm install"
npm install

echo "restart nginx"
sudo service nginx restart

echo "stop server"
forever stopall

echo "directory backup"
sudo cp -r . /usr/local/backup

echo "start server"
forever start ./bin/www

echo "restart nginx"
sudo service nginx restart
