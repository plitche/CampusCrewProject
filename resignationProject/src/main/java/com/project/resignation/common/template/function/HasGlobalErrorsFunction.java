package com.project.resignation.common.template.function;

import java.util.Map;

import org.springframework.validation.BindingResult;

import com.mitchellbosecke.pebble.template.EvaluationContext;
import com.mitchellbosecke.pebble.template.PebbleTemplate;

public class HasGlobalErrorsFunction extends BaseBindingFunction {
	public static final String FUNCTION_NAME = "hasGlobalErrors";

	  public HasGlobalErrorsFunction() {
	    super(PARAM_FORM_NAME);
	  }

	  @Override
	  public Object execute(Map<String, Object> args, PebbleTemplate self, EvaluationContext context,
	      int lineNumber) {
	    String formName = (String) args.get(PARAM_FORM_NAME);

	    BindingResult bindingResult = this.getBindingResult(formName, context);
	    return bindingResult != null && bindingResult.hasGlobalErrors();
	  }
}
