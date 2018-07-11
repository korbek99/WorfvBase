package cl.bancochile.workflow.retencion.sal.Impl;

import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.FaultMessage;
import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.InformacionClientePort;
import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.mpi.FichaClienteFullRq;
import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.mpi.FichaClienteFullRs;
import cl.bancochile.workflow.retencion.sal.FichaClienteSal;
import cl.bancochile.ws12.handler4.AbstractWebServiceClient;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class FichaClienteSalImpl extends AbstractWebServiceClient implements FichaClienteSal {

    @Resource(name = "fichaClienteFull")
    InformacionClientePort proxy;

    @Override
    public FichaClienteFullRs fetchClientData(String rutEntrada) throws FaultMessage {
        FichaClienteFullRq fichaClienteFullRq = new FichaClienteFullRq();

        this.addHeader("usuario", "15475762-7", proxy);
        this.addHeader("pathServices", "path", proxy);

        fichaClienteFullRq.setRutCliente(rutEntrada);
            return proxy.fichaClienteFull(fichaClienteFullRq);

    }

}
