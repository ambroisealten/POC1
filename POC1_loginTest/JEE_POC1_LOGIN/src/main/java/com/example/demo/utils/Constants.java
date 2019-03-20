package com.example.demo.utils;

public class Constants {

	public static final String er401 = "Accès refusé. Vous n'êtes pas connecté";
	public static final String er498 = "Le jeton a expiré ou est invalide.";
	
	public static final int ROLE_DEFAULT = -1;
	public static final int ROLE_MANAGER = 0;
	public static final int ROLE_CDR = 1;
	
    public static final int CRYPT_ITERATIONS = 20*1000;
    public static final int CRYPT_SALTLEN = 32;
    public static final int CRYPT_DESIREDKEYLEN = 256;
}
