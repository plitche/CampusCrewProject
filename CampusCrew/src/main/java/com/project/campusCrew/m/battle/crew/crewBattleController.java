package com.project.campusCrew.m.battle.crew;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

// 모바일 indexController
@Controller
@RequestMapping(value="/m/crewBattle")
public class crewBattleController {

    private static final Logger logger = LoggerFactory.getLogger(crewBattleController.class);

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public String crewBattleMain(Locale locale, Model model) throws Exception {
        
        return "m/home/battle/crew/crewBattleMain";
    }
    
}