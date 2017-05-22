FROM registry.access.redhat.com/rhscl/nodejs-6-rhel7

COPY app.js package.json $HOME/

CMD ["node","app.js"]
