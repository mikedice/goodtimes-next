To backup the database from dev machine
Run bitnami admin tool
Pick 'Open phpMyAdmin'
In phpMyAdmin pick campgoodtimes_dev on the left
On the top pick Export and export the database. It will land in ~/Downloads

Copy the database to the cloud server
scp ~/Downloads/campgoodtimes_dev.sql mikedice@104.210.35.159:~/downloads/campgoodtimes_dev.sql
<type the password for mikedice logon on the cloud server>

log into the cloud server
ssh mikedice@104.210.35.159
<type the password for mikedice logon on the cloud server>

To restore the database on the cloud server
mysql -u root -p
<type the password for mysql user named root>

mysql>drop database campgoodtimes_dev;
mysql>create database campgoodtimes_dev;
mysql>quit

mysql -u root -p<password> campgoodtimes_dev <~/downloads/campgoodtimes_dev.sql
