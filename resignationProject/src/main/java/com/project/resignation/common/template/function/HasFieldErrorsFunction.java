package com.project.resignation.common.template.function;

import java.util.Map;

import org.springframework.validation.BindingResult;

import com.mitchellbosecke.pebble.template.EvaluationContext;
import com.mitchellbosecke.pebble.template.PebbleTemplate;

public class HasFieldErrorsFunction extends BaseBindingFunction {

	public static final String FUNCTION_NAME = "hasFieldErrors";

	  public HasFieldErrorsFunction() {
	    super(PARAM_FORM_NAME, PARAM_FIELD_NAME);
	  }

	  @Override
	  public Object execute(Map<String, Object> args, PebbleTemplate self, EvaluationContext context,
	      int lineNumber) {
	    String formName = (String) args.get(PARAM_FORM_NAME);
	    String fieldName = (String) args.get(PARAM_FIELD_NAME);

	    BindingResult bindingResult = this.getBindingResult(formName, context);

	    if (bindingResult != null) {
	      if (fieldName == null) {
	        return bindingResult.hasFieldErrors();
	      } else {
	        return bindingResult.hasFieldErrors(fieldName);
	      }
	    } else {
	      return false;
	    }
	  }
}
