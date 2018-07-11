package cl.bancochile.workflow.retencion.sal;

import cl.bancochile.osb.neg.siebel.escalamientofuncionario.v._2.FaultMsg;
import cl.bancochile.osb.neg.siebel.escalamientofuncionarioresponse.mpi.v._2.EscalamientoFuncionarioResponse;

import javax.xml.datatype.DatatypeConfigurationException;

public interface DatosEjecutivoSal {
    public EscalamientoFuncionarioResponse fetchEjecutivoData(String rutEntrada) throws FaultMsg, DatatypeConfigurationException;
}
