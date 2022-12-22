#!/bin/bash

PASSPHRASE=$1

generate() {
    ENV_PREFIX=$1

    openssl genrsa -out rsa_2048_priv.pem -passout pass:"${PASSPHRASE}" 2048 &>/dev/null

    openssl rsa -pubout -in rsa_2048_priv.pem -out rsa_2048_pub.pem &>/dev/null

    if [[ "${OSTYPE}" == "darwin"* ]]; then
        PRIVATE_KEY=$(base64 <rsa_2048_priv.pem)
        PUBLIC_KEY=$(base64 <rsa_2048_pub.pem)
    else
        PRIVATE_KEY=$(base64 -w 0 <rsa_2048_priv.pem)
        PUBLIC_KEY=$(base64 -w 0 <rsa_2048_pub.pem)
    fi

    rm -f rsa_2048_priv.pem
    rm -f rsa_2048_pub.pem

    if ! test -f ".env"; then
        cp .env.development .env
    fi

    if [[ "${OSTYPE}" == "darwin"* ]]; then
        sed -i '' "s/^${ENV_PREFIX}_PRIVATE_KEY=.*/${ENV_PREFIX}_PRIVATE_KEY=${PRIVATE_KEY}/" .env
        sed -i '' "s/^${ENV_PREFIX}_PUBLIC_KEY=.*/${ENV_PREFIX}_PUBLIC_KEY=${PUBLIC_KEY}/" .env
    else
        sed -i "s/^${ENV_PREFIX}_PRIVATE_KEY=.*/${ENV_PREFIX}_PRIVATE_KEY=${PRIVATE_KEY}/" .env
        sed -i "s/^${ENV_PREFIX}_PUBLIC_KEY=.*/${ENV_PREFIX}_PUBLIC_KEY=${PUBLIC_KEY}/" .env
    fi

}

generate "JWT_ACCESS_TOKEN"
generate "JWT_REFRESH_TOKEN"
