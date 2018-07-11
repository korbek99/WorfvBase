package cl.bancochile.workflow.retencion.web.controller;


import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.FaultMessage;
import cl.bancochile.osb.neg.siebel.escalamientofuncionario.v._2.FaultMsg;
import cl.bancochile.workflow.retencion.service.DatosEjecutivoService;
import cl.bancochile.workflow.retencion.service.FichaClienteService;
import cl.bancochile.workflow.retencion.web.domain.DatosEjecutivoTO;
import cl.bancochile.workflow.retencion.web.domain.FichaClienteTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.datatype.DatatypeConfigurationException;

/**
 * Created by Carlos Negrón on 6/21/2018.
 */

@RequestMapping("/retencion")
@RestController
public class WorkflowRetencionController {


    @Autowired
    FichaClienteService fichaClienteService;

    @Autowired
    DatosEjecutivoService datosEjecutivoService;

    @RequestMapping (value = "/fichafull", method = RequestMethod.GET)
    public FichaClienteTO respFichaFull(@RequestParam ("rutEntrada")String rutEntrada) throws FaultMessage {

        FichaClienteTO fichaClienteTO = fichaClienteService.fetchClientData(rutEntrada);

        return fichaClienteTO;
    }

    @RequestMapping (value = "/ejecutivo", method = RequestMethod.GET)
    public DatosEjecutivoTO respEjecutivo (@RequestParam ("rutEjecutivo")String rutEjecutivo) throws FaultMsg, DatatypeConfigurationException {

        DatosEjecutivoTO datosEjecutivoTO = datosEjecutivoService.fetchEjecutivoData(rutEjecutivo);

        return datosEjecutivoTO;
    }
}
