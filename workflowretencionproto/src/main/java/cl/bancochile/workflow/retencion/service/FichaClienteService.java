package cl.bancochile.workflow.retencion.service;

import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.FaultMessage;
import cl.bancochile.workflow.retencion.web.domain.FichaClienteTO;

public interface FichaClienteService {
    FichaClienteTO fetchClientData(String rutEntrada) throws FaultMessage;
}
