package cl.bancochile.workflow.retencion.service;


import cl.bancochile.osb.neg.siebel.escalamientofuncionario.v._2.FaultMsg;
import cl.bancochile.workflow.retencion.web.domain.DatosEjecutivoTO;

import javax.xml.datatype.DatatypeConfigurationException;

public interface DatosEjecutivoService {
    DatosEjecutivoTO fetchEjecutivoData(String rutEjecutivo) throws FaultMsg, DatatypeConfigurationException;
}
