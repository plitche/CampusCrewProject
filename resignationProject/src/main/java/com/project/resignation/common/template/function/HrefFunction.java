package com.project.resignation.common.template.function;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.mitchellbosecke.pebble.extension.Function;
import com.mitchellbosecke.pebble.template.EvaluationContext;
import com.mitchellbosecke.pebble.template.PebbleTemplate;

public class HrefFunction implements  Function {
	 public static final String FUNCTION_NAME = "href";

	  protected static final String PARAM_URL = "url";

	  protected List<String> argumentNames;
	  private String contextPath;

	  /**
	   * Constructor
	   */
	  public HrefFunction() {
	    this.argumentNames = new ArrayList<>();
	    this.argumentNames.add(PARAM_URL);
	  }

	  /**
	   * {@inheritDoc}
	   *
	   * @see com.mitchellbosecke.pebble.extension.Function#execute(Map, PebbleTemplate,
	   * EvaluationContext, int)
	   */
	  @Override
	  public Object execute(Map<String, Object> args, PebbleTemplate self, EvaluationContext context,
	      int lineNumber) {
	    StringBuffer result = new StringBuffer();

	    result.append(this.getContextPath());
	    this.addUrlParameter(args, result);

	    return result.toString();
	  }

	  private void addUrlParameter(Map<String, Object> args, StringBuffer result) {
	    String url = (String) args.get(PARAM_URL);
	    if (org.springframework.util.StringUtils.hasText(url)) {
	      result.append(url);
	    }
	  }

	  private String getContextPath() {
	    if (this.contextPath == null) {
	      this.contextPath = this.getRequest().getContextPath();
	    }
	    return this.contextPath;
	  }

	  private HttpServletRequest getRequest() {
	    ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	    return attr.getRequest();
	  }

	  /**
	   * {@inheritDoc}
	   *
	   * @see com.mitchellbosecke.pebble.extension.NamedArguments#getArgumentNames()
	   */
	  @Override
	  public List<String> getArgumentNames() {
	    return this.argumentNames;
	  }
}
