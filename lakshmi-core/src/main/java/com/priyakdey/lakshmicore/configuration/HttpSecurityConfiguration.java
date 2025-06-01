/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.configuration;

import com.priyakdey.lakshmicore.configuration.properties.GoogleOAuthStateTokenProperties;
import com.priyakdey.lakshmicore.configuration.properties.JwtAuthTokenProperties;
import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.security.TokenService;
import com.priyakdey.lakshmicore.security.filter.JwtAuthTokenFilter;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsUtils;

import static org.springframework.http.HttpMethod.GET;

/**
 * @author Priyak Dey
 */
@Configuration
@EnableWebSecurity
@EnableConfigurationProperties({JwtAuthTokenProperties.class,
        GoogleOAuthStateTokenProperties.class})
public class HttpSecurityConfiguration {

    @Bean
    public JwtAuthTokenFilter jwtAuthTokenFilter(TokenService<ProfileDto> authTokenService) {
        return new JwtAuthTokenFilter(authTokenService);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http, JwtAuthTokenFilter jwtAuthTokenFilter) throws Exception {
        // TODO: dedup whitelisted url, fetch from config
        return http
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)  // TODO: enable later
                .authorizeHttpRequests(req -> req
                        .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
                        .requestMatchers(GET, "/api/auth/google/initiate").permitAll()
                        .requestMatchers(GET, "/api/auth/google/callback").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthTokenFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

}
