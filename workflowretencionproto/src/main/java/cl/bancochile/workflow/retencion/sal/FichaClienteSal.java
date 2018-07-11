package cl.bancochile.workflow.retencion.sal;

import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.FaultMessage;
import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.mpi.FichaClienteFullRs;

public interface FichaClienteSal {
    public FichaClienteFullRs fetchClientData(String rutEntrada) throws FaultMessage;
}
