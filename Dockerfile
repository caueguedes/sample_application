FROM ruby:2.7.1-alpine3.11

LABEL maintainer="caue.guedes91@gmail.com"

RUN apk update && apk add --no-cache bash \
    build-base \
    nodejs \
    yarn \
    postgresql-dev \
    netcat-openbsd \
    tzdata


COPY Gemfile* /usr/src/app/
WORKDIR /usr/src/app

ENV BUNDLE_PATH /gems

RUN bundle install

COPY . /usr/src/app/

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["bin/rails", "s", "-b", "0.0.0.0"]
