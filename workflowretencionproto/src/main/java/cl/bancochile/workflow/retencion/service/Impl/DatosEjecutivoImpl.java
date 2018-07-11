package cl.bancochile.workflow.retencion.service.Impl;

import cl.bancochile.osb.neg.siebel.escalamientofuncionario.v._2.FaultMsg;
import cl.bancochile.osb.neg.siebel.escalamientofuncionarioresponse.mpi.v._2.EscalamientoFuncionarioResponse;
import cl.bancochile.workflow.retencion.sal.DatosEjecutivoSal;
import cl.bancochile.workflow.retencion.sal.FichaClienteSal;
import cl.bancochile.workflow.retencion.service.DatosEjecutivoService;
import cl.bancochile.workflow.retencion.web.domain.DatosEjecutivoTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.datatype.DatatypeConfigurationException;
import java.math.BigDecimal;

@Service
public class DatosEjecutivoImpl implements DatosEjecutivoService {

    @Autowired
    FichaClienteSal fichaClienteSal;

    @Autowired
    DatosEjecutivoSal datosEjecutivoSal;

    @Override
    public DatosEjecutivoTO fetchEjecutivoData(String rutEjecutivo) throws FaultMsg, DatatypeConfigurationException {

        DatosEjecutivoTO datosEjecutivo = new DatosEjecutivoTO();
        EscalamientoFuncionarioResponse servResp = datosEjecutivoSal.fetchEjecutivoData(rutEjecutivo);

        if(servResp.getDatosEjecutivo().getNombres().equals("sin info")){
            datosEjecutivo.setNombre("");
            datosEjecutivo.setApellidoPaterno("");
            datosEjecutivo.setApellidoMaterno("");
            datosEjecutivo.setBanca("");
            datosEjecutivo.setCanal("");
            datosEjecutivo.setCargo("");
            datosEjecutivo.setCiudad("");
            datosEjecutivo.setCodigoEjecutivo("");
            datosEjecutivo.setCodBanca("");
            datosEjecutivo.setCodCanal("");
            datosEjecutivo.setCodCargo("");
            datosEjecutivo.setCodigoOficina("");
            datosEjecutivo.setCodMarca("");
            datosEjecutivo.setDireccion("");
            datosEjecutivo.setDivision("");
            datosEjecutivo.setEmail("");
            datosEjecutivo.setGlosaRegion("");
            datosEjecutivo.setLogin("");
            datosEjecutivo.setMarca("");
            datosEjecutivo.setMontoAprobacion(BigDecimal.ZERO);
            datosEjecutivo.setMontoCLP(BigDecimal.ZERO);
            datosEjecutivo.setMontoEUR(BigDecimal.ZERO);
            datosEjecutivo.setMontoUSD(BigDecimal.ZERO);
            datosEjecutivo.setNombreDivision("");
            datosEjecutivo.setNombreOficina("");
            datosEjecutivo.setOficinaContable("");
            datosEjecutivo.setPuestoTrabajo("");
            datosEjecutivo.setRegion("");
            datosEjecutivo.setTelefono("");
        }else{
            datosEjecutivo.setNombre(servResp.getDatosEjecutivo().getNombres());
            datosEjecutivo.setApellidoPaterno((servResp.getDatosEjecutivo().getApellidoPaterno()));
            datosEjecutivo.setApellidoMaterno(servResp.getDatosEjecutivo().getApellidoMaterno());
            datosEjecutivo.setBanca(servResp.getDatosEjecutivo().getBanca());
            datosEjecutivo.setCanal(servResp.getDatosEjecutivo().getCanal());
            datosEjecutivo.setCargo(servResp.getDatosEjecutivo().getCargo());
            datosEjecutivo.setCiudad(servResp.getDatosEjecutivo().getCiudad());
            datosEjecutivo.setCodigoEjecutivo(servResp.getDatosEjecutivo().getCodigoEjecutivo());
            datosEjecutivo.setCodBanca(servResp.getDatosEjecutivo().getCodBanca());
            datosEjecutivo.setCodCanal(servResp.getDatosEjecutivo().getCodCanal());
            datosEjecutivo.setCodCargo(servResp.getDatosEjecutivo().getCodCargo());
            datosEjecutivo.setCodigoOficina(servResp.getDatosEjecutivo().getCodigoOficina());
            datosEjecutivo.setCodMarca(servResp.getDatosEjecutivo().getCodMarca());
            datosEjecutivo.setDireccion(servResp.getDatosEjecutivo().getDireccion());
            datosEjecutivo.setDivision(servResp.getDatosEjecutivo().getDivision());
            datosEjecutivo.setEmail(servResp.getDatosEjecutivo().getEmail());
            datosEjecutivo.setGlosaRegion(servResp.getDatosEjecutivo().getGlosaRegion());
            datosEjecutivo.setLogin(servResp.getDatosEjecutivo().getLogin());
            datosEjecutivo.setMarca(servResp.getDatosEjecutivo().getMarca());
            datosEjecutivo.setMontoAprobacion(servResp.getDatosEjecutivo().getMontoAprobacion());
            datosEjecutivo.setMontoCLP(servResp.getDatosEjecutivo().getMontoCLP());
            datosEjecutivo.setMontoEUR(servResp.getDatosEjecutivo().getMontoEUR());
            datosEjecutivo.setMontoUSD(servResp.getDatosEjecutivo().getMontoUSD());
            datosEjecutivo.setNombreDivision(servResp.getDatosEjecutivo().getNombreDivision());
            datosEjecutivo.setNombreOficina(servResp.getDatosEjecutivo().getNombreOficina());
            datosEjecutivo.setOficinaContable(servResp.getDatosEjecutivo().getOficinaContable());
            datosEjecutivo.setPuestoTrabajo(servResp.getDatosEjecutivo().getPuestoTrabajo());
            datosEjecutivo.setRegion(servResp.getDatosEjecutivo().getRegion());
            datosEjecutivo.setTelefono(servResp.getDatosEjecutivo().getTelefono());
        }

        return datosEjecutivo;
    }
}
