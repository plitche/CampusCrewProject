package com.project.resignation.controller.loginController;

import com.github.scribejava.core.builder.api.DefaultApi20;

// Scribe library용 Naver Login 구현체
public class naverLoginApi extends DefaultApi20 {
 
    protected naverLoginApi() {
    	
    }
 
    private static class InstanceHolder{
        private static final naverLoginApi INSTANCE = new naverLoginApi();
    }
 
 
    public static naverLoginApi instance() {
    	return InstanceHolder.INSTANCE;
    }
    
    @Override
    public String getAccessTokenEndpoint() {
        return "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code";
    }                   
 
    @Override
    protected String getAuthorizationBaseUrl() {
        return "https://nid.naver.com/oauth2.0/authorize";
    }   
 
}
