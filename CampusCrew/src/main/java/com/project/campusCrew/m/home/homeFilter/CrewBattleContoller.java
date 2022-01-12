package com.project.campusCrew.m.home.homeFilter;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/m/battle")
public class CrewBattleContoller {
    private static final Logger logger = LoggerFactory.getLogger(CrewBattleContoller.class);

    @RequestMapping(value = "/crewList", method = RequestMethod.GET)
    public String crewBattleList(Locale locale, Model model) throws Exception {
        
        return "m/home/homeFilter/crewBattleList";
    }
    
    @RequestMapping(value = "/managerList", method = RequestMethod.GET)
    public String managerBattleList(Locale locale, Model model) throws Exception {
        
        return "m/home/homeFilter/managerBattleList";
    }
}