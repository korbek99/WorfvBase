package cl.bancochile.workflow.retencion.sal.Impl;

import cl.bancochile.common.DateUtil;
import cl.bancochile.osb.ent.bch.infra.mci.cabeceraservicios.v._2.DatosConsumidor;
import cl.bancochile.osb.ent.bch.neg.mci.cabeceraservicios.v._3.DatosTransaccion;
import cl.bancochile.osb.ent.bch.neg.mci.cabeceraservicios.v._3.HeaderRequest;
import cl.bancochile.osb.ent.bch.neg.mci.cabeceraservicios.v._3.HeaderResponse;
import cl.bancochile.osb.neg.siebel.escalamientofuncionario.v._2.EscalamientoFuncionarioPort;
import cl.bancochile.osb.neg.siebel.escalamientofuncionario.v._2.FaultMsg;
import cl.bancochile.osb.neg.siebel.escalamientofuncionariorequest.mpi.v._2.ConsultaEscalamientoFuncionario;
import cl.bancochile.osb.neg.siebel.escalamientofuncionariorequest.mpi.v._2.EscalamientoFuncionarioRequest;
import cl.bancochile.osb.neg.siebel.escalamientofuncionarioresponse.mpi.v._2.EscalamientoFuncionarioResponse;
import cl.bancochile.workflow.retencion.sal.DatosEjecutivoSal;
import cl.bancochile.ws12.handler4.AbstractWebServiceClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.ws.Holder;

@Service
public class DatosEjectutivoSalImpl extends AbstractWebServiceClient implements DatosEjecutivoSal {

    private static final Logger log = LoggerFactory.getLogger(DatosEjectutivoSalImpl.class);

    @Resource(name = "consultaDatosEjecutivo")
    EscalamientoFuncionarioPort proxy;

    @Override
    public EscalamientoFuncionarioResponse fetchEjecutivoData(String rutEjecutivo) throws FaultMsg, DatatypeConfigurationException {

        EscalamientoFuncionarioRequest ejecutivoDataRq = new EscalamientoFuncionarioRequest();
        ConsultaEscalamientoFuncionario consultaEscalamientoFuncionario = new ConsultaEscalamientoFuncionario();
        HeaderRequest headerRequest = new HeaderRequest();
        DatosConsumidor datosConsumidor = new DatosConsumidor();
        DatosTransaccion datosTransaccion = new DatosTransaccion();
        Holder<HeaderResponse> headerResponseHolder = new Holder<>();
        consultaEscalamientoFuncionario.setRutEjecutivo(rutEjecutivo);

        datosConsumidor.setUsuario("15475762-7");
        datosConsumidor.setPathServices("path");

        datosTransaccion.setFechaHora(DateUtil.getGregorianDateXML());
        datosTransaccion.setIdCanal("?");
        datosTransaccion.setIdTransaccionNegocio("?");
        datosTransaccion.setInternalCode("?");
        datosTransaccion.setNumeroSucursal("?");

        headerRequest.setDatosConsumidor(datosConsumidor);
        headerRequest.setDatosTransaccion(datosTransaccion);
        ejecutivoDataRq.setConsultaEscalamientoFuncionario(consultaEscalamientoFuncionario);

        return proxy.consultaDatosFuncionario(ejecutivoDataRq, headerRequest, headerResponseHolder);
    }
}
