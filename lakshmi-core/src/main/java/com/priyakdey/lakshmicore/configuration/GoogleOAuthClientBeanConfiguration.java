/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.configuration;

import com.priyakdey.lakshmicore.configuration.properties.GoogleOAuthClientProviderProperties;
import com.priyakdey.lakshmicore.configuration.properties.GoogleOAuthClientRegistrationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistration.ProviderDetails;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;

import java.util.Set;

/**
 * @author Priyak Dey
 */
@Configuration
public class GoogleOAuthClientBeanConfiguration {

    @Bean
    public GoogleOAuthClientRegistrationProperties googleOAuthClientProperties(
            ClientRegistrationRepository clientRegistrationRepository) {
        ClientRegistration google =
                clientRegistrationRepository.findByRegistrationId("google");
        String clientName = google.getClientName();
        String clientId = google.getClientId();
        String clientSecret = google.getClientSecret();
        Set<String> scopes = google.getScopes();
        String redirectUri = google.getRedirectUri();

        return new GoogleOAuthClientRegistrationProperties(clientName, clientId,
                clientSecret, scopes, redirectUri);
    }

    @Bean
    public GoogleOAuthClientProviderProperties googleOAuthClientProviderProperties(
            ClientRegistrationRepository clientRegistrationRepository) {
        ClientRegistration google =
                clientRegistrationRepository.findByRegistrationId("google");
        ProviderDetails providerDetails = google.getProviderDetails();
        String authorizationUri = providerDetails.getAuthorizationUri();
        String tokenUri = providerDetails.getTokenUri();

        return new GoogleOAuthClientProviderProperties(authorizationUri,
                tokenUri);
    }

}
