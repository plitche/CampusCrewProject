package com.project.resignation.common.factory;

import com.mitchellbosecke.pebble.PebbleEngine;
import com.mitchellbosecke.pebble.loader.Loader;
import com.mitchellbosecke.pebble.spring4.PebbleViewResolver;
import com.mitchellbosecke.pebble.spring4.extension.SpringExtension;

public class PebbleEngineFactory {
	public static PebbleEngine instance(Loader<?> loader, SpringExtension springExtension, boolean cacheActive) {
		
		PebbleViewResolver sd = new PebbleViewResolver();
		return new PebbleEngine.Builder()
				.loader(loader)
				.extension(springExtension)
				.cacheActive(cacheActive)
				.build();
	}

}
