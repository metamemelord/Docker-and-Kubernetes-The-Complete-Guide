FROM ubuntu
RUN apt-get update
RUN apt-get install -y wget
RUN apt-get install -y build-essential
RUN wget http://download.redis.io/releases/redis-5.0.4.tar.gz
RUN tar xzf redis-5.0.4.tar.gz
RUN cd /redis-5.0.4 && make
ENV PATH="redis-5.0.4/src:${PATH}"
CMD ["redis-server"]
