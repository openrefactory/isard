#
# Build phase
#
FROM golang:1.18-alpine AS build

RUN apk add --no-cache \
    git

WORKDIR /build

COPY go.mod /build
COPY go.sum /build

RUN go mod download

COPY testing/check-isardvdi/check-isardvdi.go /build/

RUN CGO_ENABLED=0 go build -o check-isardvdi check-isardvdi.go

#
# Testing
#
FROM jlesage/baseimage-gui:ubuntu-20.04

# Install dependencies
RUN apt-get update && apt-get install -y \
    xterm \
    jq \
    curl \
    wireguard-tools \
    virt-viewer \
    remmina \
    inetutils-ping \
    cowsay

COPY testing/check-isardvdi/isard.cow /isard.cow
COPY --from=build /build/check-isardvdi /usr/local/bin

RUN echo "#!/bin/sh\nsleep infinity" > /startapp.sh && chmod +x /startapp.sh

# Set the name of the application.
ENV APP_NAME="IsardVDI Testing"
ENV S6_LOGGING="1"
ENV USER_ID=0
ENV GROUP_ID=0
ENV PATH="$PATH:/usr/games"


ENTRYPOINT [ "/init" ]
CMD [ "check-isardvdi" ]
