package com.project.resignation.common.template;

import java.util.HashMap;
import java.util.Map;

import org.springframework.util.SystemPropertyUtils;

import com.mitchellbosecke.pebble.spring4.extension.SpringExtension;
import com.project.resignation.common.template.function.GetAllErrorsFunction;
import com.project.resignation.common.template.function.GetFieldErrorsFunction;
import com.project.resignation.common.template.function.GetGlobalErrorsFunction;
import com.project.resignation.common.template.function.HasErrorsFunction;
import com.project.resignation.common.template.function.HasFieldErrorsFunction;
import com.project.resignation.common.template.function.HasGlobalErrorsFunction;
import com.project.resignation.common.template.function.HrefFunction;
import com.project.resignation.common.template.function.MessageSourceFunction;

public class TemplateViewExtension extends SpringExtension {
	
	@Override
	public Map<String, com.mitchellbosecke.pebble.extension.Function> getFunctions() {
		final Map<String, com.mitchellbosecke.pebble.extension.Function> functions = super.getFunctions();
		
		functions.put(GetAllErrorsFunction.FUNCTION_NAME, new GetAllErrorsFunction(null));
		functions.put(GetFieldErrorsFunction.FUNCTION_NAME, new GetFieldErrorsFunction(null));
		functions.put(GetGlobalErrorsFunction.FUNCTION_NAME, new GetGlobalErrorsFunction(null));
		functions.put(HasErrorsFunction.FUNCTION_NAME, new HasErrorsFunction());
		functions.put(HasFieldErrorsFunction.FUNCTION_NAME, new HasFieldErrorsFunction());
		functions.put(HasGlobalErrorsFunction.FUNCTION_NAME, new HasGlobalErrorsFunction());
		functions.put(HrefFunction.FUNCTION_NAME, new HrefFunction());
		functions.put(MessageSourceFunction.FUNCTION_NAME, new MessageSourceFunction(null));
		
		return functions;
	}
	
	@Override
	public Map<String, Object> getGlobalVariables() {
		Map<String, Object> variables = super.getGlobalVariables();
		if (variables == null) variables = new HashMap<>();
		
		variables.put("activeProfile", "");
		variables.put("TEST_RUNTIMES", "");
		
		return variables;
	}

} 
