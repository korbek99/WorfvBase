package cl.bancochile.workflow.retencion.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Carlos Negrón on 6/21/2018.
 */

@Controller
public class HomeController {

    @RequestMapping("/")
    public ModelAndView welcomeMessage(
            @RequestParam(value = "name", required = false) String name) {
        // Name of your jsp file as parameter
        ModelAndView view = new ModelAndView("home");
        view.addObject("name", name);
        return view;
    }

    @RequestMapping("/formularioCliente")
    public ModelAndView formulario(
            @RequestParam(value = "rut", required = false) String name) {
        ModelAndView view = new ModelAndView("formularioCliente");
        view.addObject("name", name);
        return view;
    }
}

