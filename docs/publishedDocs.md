
## Goals: 

Overall goal: 
1. Create an aesthetic website that serves as as evidence of my compentency as a developer. It should also be a place where I can show a little of my creative side and let my personality and beliefs show a bit.

Additional goals:
1. Build the website in TS >> hopefully I will eventually host some more interactive frontend projects on this website as well, so building the thing in TS will have some utility, otherwise its just a simple website so TS is unneccesary?
2. Automate CI/CD pipelines with docker and something like github actions.
3. Incoorperate some way of saving and analyzing traffic to the site. 




### Overview of Logging 

- I want to track web traffic to my website. 
- In order to do that I can log specific information. 
  
- I had a few options for logging, 2 that I seriously considered:
  - 1. Use AWS logging services
    - This includes things like cloudwatch and other services within AWS. 
    - PROS: 
    - More robust logging system with built out infastructure, 
    - probably easier to set up, 
    - Comes with built in alert system in real time. 
    - CONS: 
    - More expensive
  - 2. Use Raw Nginx logs
    - This involves setting up a logging specifification in my nginx config file. 
    - Then we specify where to to dump like this: `access_log /var/log/nginx/access.log portfolio;`
    - PROS: 
    - Cost savings -> avoid aws costs associated with cloudwatch. 
    - Learning Opportonity -> parsing and analyzing logs will provide me a deeper understanding of how logging works
    - Customization -> i have full end to end control over how logs are stored processed and saves 
    - no vendor lock in
    - CONS:
    - MUCH more manual effort requred 
    - scalabilty -> might prove difficult to manage large logs at scale. 
    - lack of advanced features like alerting
  
I ended up going with nginx logs as its a good opportunity for me to learn more about how logs are written end to end.