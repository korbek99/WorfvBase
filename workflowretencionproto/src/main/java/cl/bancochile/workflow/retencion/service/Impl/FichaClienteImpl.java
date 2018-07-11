package cl.bancochile.workflow.retencion.service.Impl;

import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.FaultMessage;
import cl.bancochile.osb.bch.neg.informacioncliente.fichaclientefull.mpi.FichaClienteFullRs;
import cl.bancochile.workflow.retencion.sal.FichaClienteSal;
import cl.bancochile.workflow.retencion.service.FichaClienteService;
import cl.bancochile.workflow.retencion.web.domain.FichaClienteTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FichaClienteImpl implements FichaClienteService {

    @Autowired
    FichaClienteSal fichaClienteSal;


    @Override
    public FichaClienteTO fetchClientData(String rutEntrada) throws FaultMessage {
        FichaClienteTO fichaCliente = new FichaClienteTO();
        FichaClienteFullRs servResp = fichaClienteSal.fetchClientData(rutEntrada);

        if(servResp.getNombre().equals("Sin Informacion")) {
            fichaCliente.setRutCliente("");
            fichaCliente.setNombre("");
            fichaCliente.setApellidoMaterno("");
            fichaCliente.setApellidoPaterno("");
            fichaCliente.setOficinaEjecutivo("");
            fichaCliente.setCodigoEjecutivo("");
            fichaCliente.setNombreEjecutivo("");
            fichaCliente.setApellidoPaternoEjecutivo("");
            fichaCliente.setApellidoMaternoEjecutivo("");
            fichaCliente.setEmailEjecutivo("");
            fichaCliente.setCodigoPaisEjecutivo("");
            fichaCliente.setCodigoCiudadEjecutivo("");
            fichaCliente.setTelefono("");
            fichaCliente.setSegmento("");
            fichaCliente.setMarca("");
            fichaCliente.setBanca("");
            fichaCliente.setClasificacionRiesgo("");
            fichaCliente.setActividadEconomica("");
            fichaCliente.setCategoria("");
            fichaCliente.setCodigoSegmento("");
            fichaCliente.setCodigoMarca("");
            fichaCliente.setCodigoBanca("");
            fichaCliente.setCodigoActividadEconomica("");
            fichaCliente.setFechaNacimiento("");
            fichaCliente.setNombreOficina("");
            fichaCliente.setTipoCliente("");
            fichaCliente.setSexo("");
            fichaCliente.setDireccion("");
            fichaCliente.setNumeroDireccion("");
            fichaCliente.setComplementoDireccion("");
            fichaCliente.setComuna("");
            fichaCliente.setCiudad("");
            fichaCliente.setRegion("");
            fichaCliente.setPais("");
            fichaCliente.setTipoDespacho("");
            fichaCliente.setCui("");
            fichaCliente.setCodigoCategoria("");
            fichaCliente.setRowIdDireccion("");
            fichaCliente.setCodigoPaisFonoPartCliente("");
            fichaCliente.setCodigoCiudadPartCliente("");
            fichaCliente.setFonoParticularCliente("");
            fichaCliente.setCodigoPaisCelularCliente("");
            fichaCliente.setCodigoCiudadCelularCliente("");
            fichaCliente.setCelularParticularCliente("");
            fichaCliente.setEmailParticularCliente("");
            fichaCliente.setCodigoPaisFonoComCliente("");
            fichaCliente.setCodigoCiudadFonoComCliente("");
            fichaCliente.setFonoComercialCliente("");
            fichaCliente.setEmailComercialCliente("");
            fichaCliente.setEmailAlternativoEjecutivo("");

            fichaCliente.setRutEjecutivo("");
            fichaCliente.setInhabilidad("");
            fichaCliente.setNacionalidad("");
            fichaCliente.setPaisOrigen("");
            fichaCliente.setEstadoCivil("");
            fichaCliente.setRegimenMatrimonial("");
            fichaCliente.setTipoFATCA("");
            fichaCliente.setTinNumSeguroSocial("");
            fichaCliente.setRutContacto("");
            fichaCliente.setNombreContacto("");
            fichaCliente.setApellidoPaternoContacto("");
            fichaCliente.setApellidoMaternoContacto("");
            fichaCliente.setTipoRelacionContato("");
            fichaCliente.setRutConyuge("");
            fichaCliente.setTipoVivienda("");
            fichaCliente.setNroDependencia("");
            fichaCliente.setAnoResidencia("");
            fichaCliente.setMarcaFuncionario("");
            fichaCliente.setNivelEstudios("");
            fichaCliente.setProfesion("");
            fichaCliente.setRutEmpleador("");
            fichaCliente.setNombreEmpleador("");
            fichaCliente.setCargo("");
            fichaCliente.setTipoContrato("");
            fichaCliente.setFechaContrato("");
            fichaCliente.setTipoRenta("");
            fichaCliente.setTipoPagoPension("");
            fichaCliente.setFondoPension("");
            fichaCliente.setUsoBancoMonto("");
            fichaCliente.setTipoIngrLiquido("");
            fichaCliente.setMontoIngreso("");
            fichaCliente.setFechaActualizacionIngreso("");
            fichaCliente.setMarcaComparteBcaPrivada("");
            fichaCliente.setIdioma("");
            fichaCliente.setFlagEnviaCorreo("");
            fichaCliente.setDesSexo("");
            fichaCliente.setDesCui("");
            fichaCliente.setComportamiento("");
            fichaCliente.setMensaje("Sin Informacion");
        }
        else{
            fichaCliente.setRutCliente(servResp.getRutCliente());
            fichaCliente.setNombre(servResp.getNombre());
            fichaCliente.setApellidoMaterno(servResp.getApellidoMaterno());
            fichaCliente.setApellidoPaterno(servResp.getApellidoPaterno());
            fichaCliente.setOficinaEjecutivo(servResp.getOficinaEjecutivo());
            fichaCliente.setCodigoEjecutivo(servResp.getCodigoEjecutivo());
            fichaCliente.setNombreEjecutivo(servResp.getNombreEjecutivo());
            fichaCliente.setApellidoPaternoEjecutivo(servResp.getApellidoPaternoEjecutivo());
            fichaCliente.setApellidoMaternoEjecutivo(servResp.getApellidoMaternoEjecutivo());
            fichaCliente.setEmailEjecutivo(servResp.getEmailEjecutivo());
            fichaCliente.setCodigoPaisEjecutivo(servResp.getCodigoPaisEjecutivo());
            fichaCliente.setCodigoCiudadEjecutivo(servResp.getCodigoCiudadEjecutivo());
            fichaCliente.setTelefono(servResp.getTelefono());
            fichaCliente.setSegmento(servResp.getSegmento());
            fichaCliente.setMarca(servResp.getMarca());
            fichaCliente.setBanca(servResp.getBanca());
            fichaCliente.setClasificacionRiesgo(servResp.getClasificacionRiesgo());
            fichaCliente.setActividadEconomica(servResp.getActividadEconomica());
            fichaCliente.setCategoria(servResp.getCategoria());
            fichaCliente.setCodigoSegmento(servResp.getCodigoSegmento());
            fichaCliente.setCodigoMarca(servResp.getCodigoMarca());
            fichaCliente.setCodigoBanca(servResp.getCodigoBanca());
            fichaCliente.setCodigoActividadEconomica(servResp.getCodigoActividadEconomica());
            fichaCliente.setFechaNacimiento(servResp.getFechaNacimiento());
            fichaCliente.setNombreOficina(servResp.getNombreOficina());
            fichaCliente.setTipoCliente(servResp.getTipoCliente());
            fichaCliente.setSexo(servResp.getSexo());
            fichaCliente.setDireccion(servResp.getDireccion());
            fichaCliente.setNumeroDireccion(servResp.getNumeroDireccion());
            fichaCliente.setComplementoDireccion(servResp.getComplementoDireccion());
            fichaCliente.setComuna(servResp.getComuna());
            fichaCliente.setCiudad(servResp.getCiudad());
            fichaCliente.setRegion(servResp.getRegion());
            fichaCliente.setPais(servResp.getPais());
            fichaCliente.setTipoDespacho(servResp.getTipoDespacho());
            fichaCliente.setCui(servResp.getCui());
            fichaCliente.setCodigoCategoria(servResp.getCodigoCategoria());
            fichaCliente.setRowIdDireccion(servResp.getRowIdDireccion());
            fichaCliente.setCodigoPaisFonoPartCliente(servResp.getCodigoPaisFonoPartCliente());
            fichaCliente.setCodigoCiudadPartCliente(servResp.getCodigoCiudadPartCliente());
            fichaCliente.setFonoParticularCliente(servResp.getFonoParticularCliente());
            fichaCliente.setCodigoPaisCelularCliente(servResp.getCodigoPaisCelularCliente());
            fichaCliente.setCodigoCiudadCelularCliente(servResp.getCodigoCiudadCelularCliente());
            fichaCliente.setCelularParticularCliente(servResp.getCelularParticularCliente());
            fichaCliente.setEmailParticularCliente(servResp.getEmailParticularCliente());
            fichaCliente.setCodigoPaisFonoComCliente(servResp.getCodigoPaisFonoComCliente());
            fichaCliente.setCodigoCiudadFonoComCliente(servResp.getCodigoCiudadFonoComCliente());
            fichaCliente.setFonoComercialCliente(servResp.getConoComercialCliente());
            fichaCliente.setEmailComercialCliente(servResp.getEmailComercialCliente());
            fichaCliente.setEmailAlternativoEjecutivo(servResp.getEmailAlternativoEjecutivo());

            fichaCliente.setRutEjecutivo(servResp.getRutEjecutivo());
            fichaCliente.setInhabilidad(servResp.getInhabilidad());
            fichaCliente.setNacionalidad(servResp.getNacionalidad());
            fichaCliente.setPaisOrigen(servResp.getPaisOrigen());
            fichaCliente.setEstadoCivil(servResp.getEstadoCivil());
            fichaCliente.setRegimenMatrimonial(servResp.getRegimenMatrimonial());
            fichaCliente.setTipoFATCA(servResp.getTipoFATCA());
            fichaCliente.setTinNumSeguroSocial(servResp.getTinNumSeguroSocial());
            fichaCliente.setRutContacto(servResp.getRutContacto());
            fichaCliente.setNombreContacto(servResp.getNombreContacto());
            fichaCliente.setApellidoPaternoContacto(servResp.getApellidoPaternoContacto());
            fichaCliente.setApellidoMaternoContacto(servResp.getApellidoMaternoContacto());
            fichaCliente.setTipoRelacionContato(servResp.getTipoRelacionContato());
            fichaCliente.setRutConyuge(servResp.getRutConyuge());
            fichaCliente.setTipoVivienda(servResp.getTipoVivienda());
            fichaCliente.setNroDependencia(servResp.getNroDependencia());
            fichaCliente.setAnoResidencia(servResp.getAnoResidencia());
            fichaCliente.setMarcaFuncionario(servResp.getMarcaFuncionario());
            fichaCliente.setNivelEstudios(servResp.getNivelEstudios());
            fichaCliente.setProfesion(servResp.getProfesion());
            fichaCliente.setRutEmpleador(servResp.getRutEmpleador());
            fichaCliente.setNombreEmpleador(servResp.getNombreEmpleador());
            fichaCliente.setCargo(servResp.getCargo());
            fichaCliente.setTipoContrato(servResp.getTipoContrato());
            fichaCliente.setFechaContrato(servResp.getFechaContrato());
            fichaCliente.setTipoRenta(servResp.getTipoRenta());
            fichaCliente.setTipoPagoPension(servResp.getTipoPagoPension());
            fichaCliente.setFondoPension(servResp.getFondoPension());
            fichaCliente.setUsoBancoMonto(servResp.getUsoBancoMonto());
            fichaCliente.setTipoIngrLiquido(servResp.getTipoIngrLiquido());
            fichaCliente.setMontoIngreso(servResp.getMontoIngreso());
            fichaCliente.setFechaActualizacionIngreso(servResp.getFechaActualizacionIngreso());
            fichaCliente.setMarcaComparteBcaPrivada(servResp.getMarcaComparteBcaPrivada());
            fichaCliente.setIdioma(servResp.getIdioma());
            fichaCliente.setFlagEnviaCorreo(servResp.getFlagEnviaCorreo());
            fichaCliente.setDesSexo(servResp.getDesSexo());
            fichaCliente.setDesCui(servResp.getDesCui());
            fichaCliente.setComportamiento(servResp.getComportamiento());
            fichaCliente.setMensaje("OK");
        }

        return fichaCliente;
    }


}
