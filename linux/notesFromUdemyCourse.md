
********************************************** Linux**************************************************

Note: Original commits can be seen at this address: <https://github.com/note-repos/linux-notes/blob/main/linux.txt>, moved to this repo for completeness

ls -ltr : Reverse lists by creation date

find <directory path> -name "<directory name>" // exp : find . - name "yilmaz.txt"

locate yilmaz.txt // "updatedb" and make sure mlocate package installed. if not run yum install mlocate.

su - : to become root

passwd : change password // passwd username : change password by root

* : zero or more placeholder
? : single char
[] : range of chars
{a..b or 1..9} : patterns // cp {*.doc,*.txt} /home/yilmaz copy all files to home directory

////Section 5 ////

cd : directly to the home directory
rm -r : remove directory

---------------------------------
-rwxrw-r-- yilmaz

* : regular file
d : directory
l : link
c : special or device file
s : socket
p : named pipe
b : block device

u : user
g : group
o : other

r : read // 4
w : write // 2
x : execute // for directory means entering permission // 1

7 : rwx // 0 : ---

chmod : change permission // chmod g-w : -rwxr--r-- yilmaz // chmod a-r  : --wx------ yilmaz // chmod u+r : -rwx------ yilmaz
---------------------------------

chown : change the ownership of a file // chown root yilmaz
chgrp : change the group ownership of a file // chgrp root yilmaz

chown yilmaz:yilmaz yilmaz.txt // to change ownership and group in one command
  
---------------------------------

ACL : Access Control list

setfacl -m u:yilmaz:rwx path/to/file
setfacl -m g:familyyilmaz:rw path/to/file
setfacl -Rm u:yilmaz:rwx path/to/file (Inherit all files)
setfacl -x u:yilmaz:rwx path/to/file
setfacl -b path/to/file //remove all entries (!!!not permission)

getfacl : to see the information

for write permission, user can not delete file
---------------------------------

Mon Oct 31 09:37:19 CET 2022

echo "text" > yilmaz.txt // write a text with echo // single > overwrite everything // double >> add to file
cat : read content in a file
ls -l > yilmaz.txt // write listed items to yilmaz.txt
-------------

| tee : store and view // echo "text" | tee yilmaz.txt  // | tee -a for adding
rmdir : remove directory // rm -r // rm -Rf to remove subfolder and contents
su - : to become superuser
more yilmaz.txt // read page by page to quit press q
less yilmaz.txt // page by page with space and with c or k or up and down arrow line by line
head -2 yilmaz.txt // first 2 line
tail -2 yilmaz.txt // last 2 line
-------------

cut -c1 yilmaz.txt // show first char
cut -c1,2,4 yilmaz.txt // show 1 2 4 char
cut -c1-3 yilmaz.txt // show 1 2 3 char
cut -d. -f 3 // to show chars after third dot to next dot.
ls -l | cut -c2-4 : rwx //  
-------------

awk '{print $1 }' yilmaz.txt // show first column
ls -l | awk '{print $1,$3 }' // show first and third column
awk '{print $NF }' yilmaz.txt // show last column
awk '/linux/ {print}' yilmaz.txt // show the line which include the word
awk -F. '{print $1} yilmaz.txt // Shows between the first dot and the second dot in each row
cat yilmaz.txt | awk '{$2="yildiz"; print $0}' // $0 :show everything // replace second word with yildiz
-------------

grep germany yilmaz.txt // search germany in yilmaz.txt
grep -c germany yilmaz.txt // count  germany in yilmaz.txt
grep -i germany yilmaz.txt // search germany in yilmaz.txt and ignore case-sensitive
grep -n germany yilmaz.txt // search germany in yilmaz.txt and show line number
grep -vi germany yilmaz.txt // search and show the lines except lines which include germany
grep -i germany yilmaz.txt | awk '{print $1} // show first column of the results
ls -l | grep -i Desktop // search result for Desktop
egrep -i "germany|türkei" yilmaz.txt // search germany in yilmaz.txt
-------------

sort yilmaz.txt // sort alphabetical
sort -r yilmaz.txt // reverse sort alphabetical
sort -k2 yilmaz.txt // sort according to second field
uniq yilmaz.txt // show uniq lines // before always use sort
sort yilmaz.txt | uniq
sort yilmaz.txt | uniq -c // show uniq word with the duplicated number
sort yilmaz.txt | uniq -d // show only repeated lines
 -------------

wc yilmaz.txt // show lines words bytes
wc -l yilmaz.txt // show only lines
wc directory is not allowed
ls -l | wc -l // show count of folders
ls -l | grep drw | wc -l // counts  directories
-------------

diff yilmaz.txt yildiz.txt // show differences // line by line
cmp yilmaz.txt yildiz.txt // show differences with bytes // byte by byte
-------------

tar cvf yilmaz.tar /home/yilmaz // put the all folder in a file which has a tar type
tar xvf yilmaz.tar // execute the tar file
gzip yilmaz.tar // compress the file
gzip -d yilmaz.tar.gz // uncompressed // or gunzip
-------------

truncate -s 1234 yilmaz.txt // shrink the size of file and remove the rest
---------------------------------

 Tue Nov  1 12:21:12 CET 2022

sed 's/yildiz/yilmaz/g' yilmaz.txt // show (don't replace) all yildiz to yilmaz because of the g
sed -i 's/yildiz/yilmaz/g' yilmaz.txt // replace all yildiz to yilmaz inside of the yilmaz.txt and save it
sed 's/yildiz//g' yilmaz.txt // show yilmaz.txt without yildiz
sed 's/yildiz/d' yilmaz.txt // show lines which does not have yildiz
sed 's/^$/d' yilmaz.txt // dont show empty lines //
sed '1d' yilmaz.txt // dont show first line
sed 's/\t/ /g' yilmaz.txt // replace space instead of tab
sed -n 12,18p yilmaz.txt // show lineS between 12 and 18
sed 12,18d yilmaz.txt // Show lines without 12-18
sed G yilmaz.txt // put space between lines
sed '4!s/yildiz/yilmaz/g' yilmaz.txt // show lines with yilmaz instead of yildiz except line 4
 -------------

User Account Management
useradd fatih // id fatih //
groupadd familyyilmaz // cat /etc/group// to see groups
userdel fatih // userdel -r fatih to delete with home directory//
groupdel familyyilmaz //
usermod -G familyyilmaz fatih // add fatih to familyyilmaz // grep fatih /etc/group to see only fatih
chgrp -R familyyilmaz fatih // to change fatih's group
file /etc/shadow is related with the password
useradd -g familyyilmaz -s /bin/bash -c "the smallest member of the family" -m -d /home/salih salih // create user without setting password
passwd salih // to set a password for user salih
-------------

su - berat // switch user to berat
usermod -aG wheel berat // to run a sudo command
-------------

Monitor Users
who // how many people are logged in and when
last // give the information about all user in details
w // same as who but give more information
id // info about user
-------------

wall // broadcast message // after message press control + D to send
write username // write a message a specific user
-------------

uptime // how long the system up etc
hostname //
uname // name of the machine
uname -a // name of the machine more details
which // to know where command located
which pwd | ls -l // to see who can Access this command
cal // calender
bc // binary calculator
-------------

control+u // erase everything
control+z // suspend command
control+d // exit from an int eractive program
-------------

System Monitoring

top // cpu info
df // disk info // df -h for human :)
du // file storage
dmesg // see error and event
iostat // input and output statistic // iostat 1 refresh every one second
netstat // print network connection
free // physical memory
/proc/cpuinfo and /proc/meminfo
-------------

arch // architecture of cpu
dmidecode // OS information
-------------

shutdown//
init 0-6 // for reboot or shutdown
reboot//
halt// force to shutdown
-------------

hostnamectl set-hostname berat-yilmaz // shell must restarted
-------------

cron.daily// monthly , weekly// go directly and put script there // you can find in   /etc/cron.{name of the file}
-------------

script filename // save terminal activity // its keep going , to turn off write exit// best for troubleshooting
-------------

Process Management

control-z // stop Process
jobs // to see stopped Process
bg // to sent stopped Process to background
fg // to bring back the process
nohup command & // send to job to background and it can work even if the terminal closed
nohup command > /dev/null 2>&1 & // dont recieve a warning
nice -n 5 sleep 10 // to give a priority to certain command (-20 to 19)
-------------

logs

boot.log // booting message
chrony //
cron //
maillog //
secure //
messages //
-------------

Daemon : a process but working in background
systemctl // start or stop an application or list // restart , stop , enable as an option
systemctl enable application // app will start with the system
ps -ef // working application with details
systemctl status // to see status of running app
kill processid // kill the process
-------------

Wed Nov  2 13:32:17 CET 2022

Root password recovery

1. F12 to boot setup
2. find ro and delete it.
3. place rw init=sysroot/bin/sh
4. control+x
5. chroot /sysroot
6. passwd root
7. touch /.autorelabel
8. exit
9. reboot

-------------

sosreport // collect and package diagnostic and support data
case id is given from red hat
-------------

printenv or env // to see environment
echo $SHELL //
cd $HOME // to go home directory
export berat=1 // to set variable temporary

set a perminent variable for me

1. cp .bashrc .bashrc.orig // to recovery
2. vi .bashrc
2. berat='yilmaz'
4. export berat
5. save and exit

-------------
Shell script

# !/bin/bash // to defining bash script

chmod a+x yilmaz // to make executable
./yilmaz // to run command

# // to add comment

echo // to make a space between command
single quote to define variable
read // read name // for user input // name = what the user typed
wiht $ sign , to use variable
backticks `` for command output // `hostname`
if[] then else fi//
start script with clear to easy red
-e something // if exist

for i in 1 2 3 4 5
do
echo "Welcome $i times"
done

-lt // less than

while [condition] do done
$1 : first argument for script

read choices
case  $choices in
a) date;;
b) ls;;
c) who;;
*) invalid choice
esac

$? // returns 0 or 1 according to our command // run successfully=0  or not=1// good for if statement
-eq // equal
$0-The filename of the current script.
$#-The number of arguments supplied to a script.
$$-The process number of the current shell. For shell scripts, this is the process ID under which they are executing.
if i dont want to any message which comes from command on terminal screen i can use &>/dev/null after command
ping -c1 // for one time

alias // short version of command // its fantastic// before $ sing put \ otherwise shell accept that as a variable
alias d = "df -h | awk '{print \$6}' | cut -c1-4"
unalias d // to remove
for user aliases /home/user/.bashrc
for global aliases /etc/bashrc

to make it user
vi .bashrc
modify it

to make it global
vi /etc/bashrc
shift+g // go to end of the file
write alias hh="hostname"
save and exit

history // to see history of command
!123 // run 123.command
home/user/.bash_history

to see another users history
su -
cat /home/username/.bash_history

----------------
Thu Nov  3 11:53:42 CET 2022

Network Files

/etc/nsswithc.conf // info about ip, hostname password etc

/etc/hosts // define your ip adress and hostname // 192.169.1.14 mylinuxOS

/etc/sysconfig/network //modify hostname

/etc/sysconfig/network-scripts // interfaces infos

/etc/resolv.conf // specify dns server

ifconfig // to see interfaces

ifup // to up network // to down ifdown command

netstat -rnv// gateway and traffic

tcpdump -i // traces transactions in or out

------------------
NIC = Network Interface Card

lo // local
virbo0 / Virtual Bridge 0
ethtool interface-name // to see info about specific interface info

to bond nic
1.modinfo bonding // to see bonding driver in description
2.create vi /etc/sysconfig/network-scripts/ifcfg-bond0
3.DEVICE=bond0
  TYPE=bond0
  NAME=bond0
  BONDING MASTER=yes
  BOOTPROTO=none // if static ip write static
  IPADDR=192.168.1.80
  NETMASK=255.255.255.0
  GATEWAY=192.168.1.1 // Ip addres of modem
  BONDING_OPTS="mod=5 miimon=100" // look google for meaning
4.save and exit
5.Edit first NIC File
6.cd /etc/sysconfig/network-scripts/
7.vi ifcfg-interfacename
8.delete all
9.  
  TYPE=Ethernet
  DEVICE=interfacename
  HWADDR=macadress of interface
  MASTER=bond0
  SLAVE=yes
  BONDING MASTER=yes
  BOOTPROTO=none
10.save and exit
11.copy and change mac and device for second nic
12.systemctl restart network
13. to verify cat /proc/net/bonding/bond0
-----------  

wget // download from website  //
yum // to install app
curl // for url check // curl -O for download from webpage
ping // for server check
-----------

ftp = file transfer Protocol
look google to add client and remote server

n after grep take the cursor next result

look google to set up ftp server with client side

scp // add to security and authentication to ftp

rsync // Remote Synchronization (port 22)

Default SCP Port = 22(same as SSH)

Fri Nov  4 11:24:03 CET 2022
