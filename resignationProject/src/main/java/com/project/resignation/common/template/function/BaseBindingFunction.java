package com.project.resignation.common.template.function;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.validation.BindingResult;

import com.mitchellbosecke.pebble.extension.Function;
import com.mitchellbosecke.pebble.template.EvaluationContext;
import com.mitchellbosecke.pebble.template.GlobalContext;

public abstract class BaseBindingFunction implements Function {

	  protected static final String PARAM_FIELD_NAME = "fieldName";
	  protected static final String PARAM_FORM_NAME = "formName";

	  private final List<String> argumentNames = new ArrayList<>();

	  protected BaseBindingFunction(String... argumentsName) {
	    Collections.addAll(this.argumentNames, argumentsName);
	  }

	  @Override
	  public List<String> getArgumentNames() {
	    return this.argumentNames;
	  }

	  protected BindingResult getBindingResult(String formName, EvaluationContext context) {
	    String attribute = BindingResult.MODEL_KEY_PREFIX + formName;
	    BindingResult bindingResult = (BindingResult) context.getVariable(attribute);
	    if (bindingResult == null) {
	      GlobalContext globalContext = (GlobalContext) context.getVariable("_context");
	      if (globalContext != null) {
	        return (BindingResult) globalContext.get(attribute);
	      }
	    }
	    return bindingResult;
	  }
}