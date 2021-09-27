package com.project.resignation.common.factory;

import com.mitchellbosecke.pebble.PebbleEngine;
import com.mitchellbosecke.pebble.loader.Loader;
import com.mitchellbosecke.pebble.spring4.PebbleViewResolver;
import com.project.resignation.common.template.TemplateViewExtension;

public class PebbleEngineFactory {
	public static PebbleEngine instance(Loader<?> loader, TemplateViewExtension templateExtension, boolean cacheActive) {
		
		return new PebbleEngine.Builder()
				.loader(loader)
				.extension(templateExtension)
				.cacheActive(cacheActive)
				.build();
	}

}
