/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.security.algorithm;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.priyakdey.lakshmicore.security.TokenAlgorithmStrategy;
import com.priyakdey.lakshmicore.security.TokenMetadata;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.function.Function;

/**
 * @author Priyak Dey
 */
public class Hmac256TokenAlgorithmStrategy<T> implements TokenAlgorithmStrategy<T> {

    private final Function<T, Map<String, ?>> serializer;
    private final Function<DecodedJWT, T> deserializer;
    private final Algorithm algorithm;
    private final Map<String, Object> headerClaims;

    public Hmac256TokenAlgorithmStrategy(String secret,
                                         Function<T, Map<String, ?>> serializer,
                                         Function<DecodedJWT, T> deserializer) {
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.algorithm = Algorithm.HMAC256(secret);
        this.headerClaims = Map.of(
                "alg", algorithm.getName(),
                "type", "JWT"
        );
    }

    @Override
    public String sign(T payload, TokenMetadata tokenMetadata) {

        Instant iat = Instant.now();
        Instant eat = iat.plus(tokenMetadata.expiration(), ChronoUnit.SECONDS);

        return JWT.create()
                .withHeader(headerClaims)
                .withIssuer(tokenMetadata.issuer())
                .withIssuedAt(iat)
                .withExpiresAt(eat)
                .withPayload(serializer.apply(payload))
                .sign(algorithm);
    }

    @Override
    public T verify(String token, TokenMetadata metadata) {
        JWTVerifier verifier = JWT.require(algorithm)
                .withIssuer(metadata.issuer())
                .acceptLeeway(10)
                .build();
        DecodedJWT decodedJWT = verifier.verify(token);
        return deserializer.apply(decodedJWT);
    }
}
